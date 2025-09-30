import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(express.json());

// ==================================================================
// === CONFIGURACIÓN DE CONEXIÓN A LA BASE DE DATOS (Pool) ==========
// ==================================================================
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'glpi',
    port: 3306
});


// ==================================================================
// === FUNCIONES DE LÓGICA DE BASE DE DATOS (CRUD) GENÉRICAS ========
// ==================================================================

/**
 * LÓGICA DE CREACIÓN TOTALMENTE GENÉRICA: Inserta campos dinámicos en cualquier tabla (:itemtype).
 */
function insertItem(itemtype, item) {
    // Extrae columnas y valores del objeto de entrada.
    const columns = Object.keys(item).join(', ');
    const values = Object.values(item);
    const placeholders = values.map(() => '?').join(', ');

    return pool.then(connection => {
        // Nota: Añadir el prefijo 'glpi_' a la tabla para la DB real de GLPI
        const dbTable = itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}s`;
        const query = `INSERT INTO ${dbTable} (${columns}) VALUES (${placeholders})`;
        return connection.execute(query, values);
    })
    .then(([result]) => result.insertId); // Devuelve el nuevo ID generado.
}

/**
 * LÓGICA DE ACTUALIZACIÓN TOTALMENTE GENÉRICA: Actualiza campos dinámicos en cualquier tabla.
 */
async function updateItem(itemtype, id, input) {
    const connection = await pool;
    const setClauses = [];
    const values = [];
    const dbTable = itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}s`;

    // Construye la lista de SET (ej: name = ?, serial = ?)
    for (const key in input) {
        if (key !== 'id') { // Ignora el campo 'id' si está en el payload
            setClauses.push(`${key} = ?`);
            values.push(input[key]);
        }
    }
    
    if (setClauses.length === 0) { return false; } // No hay campos para actualizar.
    values.push(id); // Añade el ID para la cláusula WHERE.

    try {
        const query = `UPDATE ${dbTable} SET ${setClauses.join(', ')} WHERE id = ?`;
        const [result] = await connection.execute(query, values);
        return result.affectedRows > 0; // True si se actualizó una fila.
    } catch (error) {
        throw error;
    }
}

/**
 * LÓGICA DE LECTURA INDIVIDUAL GENÉRICA: Obtiene un ítem por ID.
 */
async function getItemById(itemtype, id) {
    const connection = await pool;
    const dbTable = itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}s`;
    try {
        const [rows] = await connection.execute(
            `SELECT * FROM ${dbTable} WHERE id = ?`,
            [id]
        );
        return rows.length > 0 ? rows[0] : null; // Devuelve el primer resultado o null.
    } catch (error) {
        throw error;
    }
}

/**
 * LÓGICA DE LECTURA DE LISTA GENÉRICA: Obtiene los primeros 50 ítems de una tabla.
 */
async function getItemList(itemtype) {
    const connection = await pool;
    const dbTable = itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}s`;
    try {
        const [rows] = await connection.execute(`SELECT * FROM ${dbTable} LIMIT 50`);
        return rows;
    } catch (error) {
        throw error;
    }
}

/**
 * LÓGICA DE ELIMINACIÓN GENÉRICA
 */
async function deleteItem(itemtype, id) {
    const connection = await pool;
    const dbTable = itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}s`;
    try {
        const [result] = await connection.execute(
            `DELETE FROM ${dbTable} WHERE id = ?`,
            [id]
        );
        return result.affectedRows > 0; // True si se eliminó una fila.
    } catch (error) {
        throw error;
    }
}

// ==================================================================
// === MANEJADORES CENTRALIZADOS DE PETICIONES (PUT/DELETE/GET) =====
// ==================================================================

async function handlePutRequest(req, res) {
    // Maneja PUT/PATCH /apirest.php/:itemtype/:id Y /apirest.php/:itemtype
    const { id: idInUrl, itemtype } = req.params; 
    const inputData = req.body.input;

    // 401: Comprueba la autenticación mínima
    if (!req.headers['session-token'] || !req.headers['app-token']) { 
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }

    // 400: Comprueba el payload
    if (!inputData) {
        return res.status(400).json({ error: "Bad Request: Missing 'input' payload" });
    }

    const finalResults = [];

    // 1. Lógica Individual (ID en URL o en payload simple)
    if (!Array.isArray(inputData)) {
        const idToUpdate = idInUrl || inputData.id;

        if (!idToUpdate) return res.status(400).json({ error: "Bad Request: Missing 'id' in URL or payload." });

        try {
             const wasUpdated = await updateItem(itemtype, idToUpdate, inputData);
             finalResults.push({ [idToUpdate]: wasUpdated, message: wasUpdated ? "" : "Item not found" });
        } catch (error) {
             return res.status(409).json({ error: 'Conflict or Database Error', message: error.message });
        }

    } else {
        // 2. Lógica Múltiple (Bulk)
        if (idInUrl) return res.status(400).json({ error: "Bad Request: Cannot provide 'id' in URL for multiple updates." });

        const updatePromises = inputData.map(item => {
            const idToUpdate = item.id;
            if (!idToUpdate) return Promise.resolve({ [false]: false, message: "Missing ID in array element" });
            
            return updateItem(itemtype, idToUpdate, item)
                .then(wasUpdated => ({ [idToUpdate]: wasUpdated, message: wasUpdated ? "" : "Item not found" }))
                .catch(error => ({ [idToUpdate]: false, message: `Database Error: ${error.message}` }));
        });

        const results = await Promise.all(updatePromises);
        finalResults.push(...results);
    }

    // Determina la respuesta de estado de GLPI (200 OK o 207 Multi-Status)
    const hasFailures = finalResults.some(result => Object.values(result).includes(false));
    const statusCode = hasFailures ? 207 : 200;

    res.status(statusCode).json(finalResults);
}

async function handleDeleteRequest(req, res) {
    // Maneja DELETE /apirest.php/:itemtype/:id Y /apirest.php/:itemtype
    const { id: idInUrl, itemtype } = req.params; 
    const { input: inputData } = req.body;
    
    // 401: Comprueba la autenticación mínima
    if (!req.headers['session-token'] || !req.headers['app-token']) { 
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }

    const finalResults = [];

    // 1. Lógica Individual (ID en URL o en payload)
    if (idInUrl || (inputData && !Array.isArray(inputData) && inputData.id)) {
        const idToDelete = idInUrl || inputData.id;

        if (!idToDelete) return res.status(400).json({ error: "Bad Request: Missing 'id' in URL or payload." });

        try {
            const wasDeleted = await deleteItem(itemtype, idToDelete);
            
            if (wasDeleted) {
                // 204 No Content para eliminación individual exitosa (como GLPI)
                return res.status(204).send(); 
            } else {
                // Si no se encuentra, la documentación de GLPI sugiere 207 para fallo.
                return res.status(207).json([{ [idToDelete]: false, message: "Item not found" }]);
            }
        } catch (error) {
            return res.status(409).json({ error: 'Conflict or Database Error', message: error.message });
        }


    } else if (inputData && Array.isArray(inputData)) {
        // 2. Lógica Múltiple (Bulk)
        if (idInUrl) return res.status(400).json({ error: "Bad Request: Cannot provide 'id' in URL for multiple deletions." });
        
        const deletePromises = inputData.map(item => {
            const idToDelete = item.id;
            if (!idToDelete) return Promise.resolve({ [false]: false, message: "Missing ID in array element" });
            
            return deleteItem(itemtype, idToDelete)
                .then(wasDeleted => ({ [idToDelete]: wasDeleted, message: wasDeleted ? "" : "Item not found" }))
                .catch(error => ({ [idToDelete]: false, message: `Database Error: ${error.message}` }));
        });

        const results = await Promise.all(deletePromises);
        finalResults.push(...results);

    } else {
        // 400: Fallo si no hay ID ni payload bulk
        return res.status(400).json({ error: "Bad Request: Missing ID in URL or 'input' payload." });
    }

    // Determina la respuesta de estado de GLPI para Bulk (200 OK o 207 Multi-Status)
    const hasFailures = finalResults.some(result => !Object.values(result)[0]);
    const statusCode = hasFailures ? 207 : 200; 

    res.status(statusCode).json(finalResults);
}

async function handleGetRequest(req, res) {
    // Maneja GET /apirest.php/:itemtype/:id Y /apirest.php/:itemtype
    const { id, itemtype } = req.params;

    // 401: Comprueba la autenticación mínima
    if (!req.headers['session-token'] || !req.headers['app-token']) { 
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }
    
    try {
        if (id) {
            // Lógica de Lectura Individual
            const item = await getItemById(itemtype, id);

            if (item) {
                return res.status(200).json(item);
            } else {
                return res.status(404).json({ error: "Not Found", message: `Item ID ${id} not found in ${itemtype}` });
            }
        } else {
            // Lógica de Lectura de Lista (ignora query params por simplicidad)
            const list = await getItemList(itemtype);
            return res.status(200).json(list);
        }
    } catch (error) {
        // 404/500: Captura errores de DB (ej: tabla no existe)
        console.error("Error en GET:", error.message);
        const dbTable = itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}s`;
        return res.status(404).json({ error: "Not Found or Database Error", message: `Error accessing table ${dbTable} doesn't exist: ${error.message}` });
    }
}


// ==================================================================
// === 1. ENDPOINTS ESPECÍFICOS (SESIÓN, PERFILES, LOST PASSWORD) ===
// ==================================================================

// ----- 🎯 ENDPOINT 0: SESIÓN (initSession) ------------------------
app.get('/apirest.php/initSession', (req, res) => {
    // La simulación omite la validación real de Basic Auth/user_token.
    const simulatedToken = crypto.randomBytes(20).toString('hex');
    const response = { "session_token": simulatedToken };
    
    // Simula la respuesta completa si se solicita
    if (req.query.get_full_session === 'true') {
        response.session = {
            'glpi_plugins': {},
            'user_info': { id: 1, name: 'tech', profile: 'Super-admin' }
        };
    }
    
    return res.status(200).json(response);
});

// ----- 🎯 ENDPOINT 0: SESIÓN (killSession) -------------------------
app.get('/apirest.php/killSession', (req, res) => {
    // 400: Valida que el token necesario esté presente
    if (!req.headers['session-token']) {
        return res.status(400).json({ error: "Bad Request: Missing Session-Token header" });
    }
    
    // Simula el cierre de sesión exitoso
    return res.status(200).send();
});

// ----- 🎯 ENDPOINT 6: PERFILES (getMyProfiles, getActiveProfile, changeActiveProfile) ---
app.get('/apirest.php/getMyProfiles', (req, res) => {
    if (!req.headers['session-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing Session-Token" });
    const profiles = [
        { id: 1, name: "Super-admin", entities: [{ id: 0, name: 'Root' }] },
        { id: 4, name: "Technician", entities: [{ id: 1, name: 'Entity A' }] }
    ];
    res.status(200).json({ myprofiles: profiles });
});

app.get('/apirest.php/getActiveProfile', (req, res) => {
    if (!req.headers['session-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing Session-Token" });
    const activeProfile = { id: 1, name: "Super-admin", entities: [{ id: 0, name: 'Root' }] };
    res.status(200).json(activeProfile);
});

app.post('/apirest.php/changeActiveProfile', (req, res) => {
    const profiles_id = req.body.profiles_id;
    if (!req.headers['session-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing Session-Token" });
    if (!profiles_id) return res.status(400).json({ error: "Bad Request: Missing 'profiles_id' in payload" });
    if (profiles_id == 99) return res.status(404).json({ error: "Not found", message: "Profile does not exist or is not usable" });
    res.status(200).send();
});

// ----- 🎯 ENDPOINT 7: LOST PASSWORD (PUT/PATCH) ---------------------------
const lostPasswordHandler = (req, res) => {
    const { email, password_forget_token, password } = req.body;
    if (!email) return res.status(400).json({ error: "Bad Request: Missing 'email' in payload" });
    // Simulación: No hacemos validación de token
    return res.status(200).send(); // 200 OK para solicitud o reseteo
};

app.put('/apirest.php/lostPassword', lostPasswordHandler);
app.patch('/apirest.php/lostPassword', lostPasswordHandler);

// ----- 🎯 ENDPOINT (NUEVO) getGlpiConfig ---------------------------------
// Este endpoint fue el que dio error 404 antes por la URL.
app.get('/apirest.php/getGlpiConfig', (req, res) => {
    if (!req.headers['session-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing Session-Token" });

    // Simulación de respuesta de configuración
    const config = {
        'version': '10.0.10',
        'default_language': 'es_ES',
        'available_languages': ['es_ES', 'en_US', 'fr_FR']
    };
    res.status(200).json(config);
});

// ==================================================================
// === 2. ENDPOINTS AVANZADOS DE BÚSQUEDA Y ACCIONES ================
// ==================================================================

// ----- 🎯 ENDPOINT 8: listSearchOptions ---------------------------
// URL: /apirest.php/listSearchOptions/:itemtype
app.get('/apirest.php/listSearchOptions/:itemtype', (req, res) => {
    const { itemtype } = req.params;

    if (!req.headers['session-token'] || !req.headers['app-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });

    const mockSearchOptions = {
        "common": "Characteristics",
        1: { 'name': 'Name', 'field': 'name', 'datatype': 'string', 'uid': `${itemtype}.name` },
        2: { 'name': 'ID', 'field': 'id', 'datatype': 'number', 'uid': `${itemtype}.id` },
        3: { 'name': 'Entity', 'field': 'completename', 'datatype': 'dropdown', 'uid': `${itemtype}.Entity.completename` }
    };

    res.status(200).json(mockSearchOptions);
});


// ----- 🎯 ENDPOINT 9: getMassiveActions (ItemType) ----------------
// URL: /apirest.php/getMassiveActions/:itemtype
app.get('/apirest.php/getMassiveActions/:itemtype', (req, res) => {
    if (!req.headers['session-token'] || !req.headers['app-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    
    const actions = [
        { key: "MassiveAction:update", label: "Update" },
        { key: "MassiveAction:delete", label: "Put in trashbin" },
        { key: "MassiveAction:add_note", label: "Add note" }
    ];

    if (req.query.is_deleted === '1') {
        actions.push({ key: "MassiveAction:purge", label: "Delete permanently" });
        actions.push({ key: "MassiveAction:restore", label: "Restore" });
    }

    res.status(200).json(actions);
});

// ----- 🎯 ENDPOINT 9: getMassiveActions (Item ID) -----------------
// URL: /apirest.php/getMassiveActions/:itemtype/:id
app.get('/apirest.php/getMassiveActions/:itemtype/:id', (req, res) => {
    if (!req.headers['session-token'] || !req.headers['app-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    const actions = [
        { key: "MassiveAction:update", label: "Update" },
        { key: "MassiveAction:delete", label: "Put in trashbin" },
        { key: "MassiveAction:add_note", label: "Add note" }
    ];
    res.status(200).json(actions);
});


// ----- 🎯 ENDPOINT 10: getMassiveActionParameters ------------------
// URL: /apirest.php/getMassiveActionParameters/:itemtype/:action
app.get('/apirest.php/getMassiveActionParameters/:itemtype/:action', (req, res) => {
    const { action } = req.params;

    if (!req.headers['session-token'] || !req.headers['app-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    
    if (action.includes('note')) {
        return res.status(200).json([
            { name: "note_text", type: "text", label: "Note content" }
        ]);
    } 
    
    if (action.includes('Profile')) {
        return res.status(200).json([
            { name: "profiles_id", type: "dropdown", label: "Profile to assign" }
        ]);
    }
    
    res.status(200).json([]);
});

// ----- 🎯 ENDPOINT 11: search items (Búsqueda avanzada) -----------
// URL: /apirest.php/search/:itemtype
// Nota: Reutilizamos la lógica GET genérica para devolver la lista, ignorando 'criteria'.
app.get('/apirest.php/search/:itemtype', async (req, res) => {
    await handleGetRequest(req, res);
});


// ==================================================================
// === 3. ENDPOINTS GENÉRICOS DE CRUD (¡ESTO DEBE IR AL FINAL!) =====
// ==================================================================

// ----- 🎯 ENDPOINT 1: CRUD GENÉRICO (LECTURA GET por ID) ----------
app.get('/apirest.php/:itemtype/:id', async (req, res) => {
    await handleGetRequest(req, res);
});

// ----- 🎯 ENDPOINT 1: CRUD GENÉRICO (LECTURA GET de lista) --------
// Esta ruta tiene que ir después de '/search/:itemtype' para no "comerse" la ruta '/search'.
app.get('/apirest.php/:itemtype', async (req, res) => {
    await handleGetRequest(req, res);
});


// ----- 🎯 ENDPOINT 2: POST /apirest.php/:itemtype (CREACIÓN) -----
app.post('/apirest.php/:itemtype', (req, res) => {
    const { itemtype } = req.params; 
    
    if (!req.headers['session-token'] || !req.headers['app-token']) return res.status(401).json({ error: "Missing required tokens" });
    if (!req.body.input) return res.status(400).json({ error: "Missing 'input' data in body" });

    // Lógica para creación individual
    if (!Array.isArray(req.body.input)) {
        insertItem(itemtype, req.body.input)
            .then(newId => res.status(201).set({ 'Location': `http://path/to/glpi/api/${itemtype}/${newId}` }).json({ id: newId }))
            .catch(error => res.status(409).json({ error: 'Conflict or Database Error', message: error.message }));
        return;
    }

    // Lógica para creación Bulk
    let results = [];
    let linkHeader = [];
    
    req.body.input.reduce((promiseChain, item) => {
        return promiseChain.then(() => {
            return insertItem(itemtype, item)
                .then(newId => {
                    results.push({ id: newId, message: "" });
                    linkHeader.push(`http://path/to/glpi/api/${itemtype}/${newId}`);
                })
                .catch(error => {
                    results.push({ id: item.id || false, message: error.message });
                });
        });
    }, Promise.resolve())
    .then(() => res.status(207).set({ 'Link': linkHeader.join(',') }).json(results))
    .catch(error => res.status(500).json({ error: 'Internal Server Error' }));
});


// ----- 🎯 ENDPOINT 3: POST /apirest.php/applyMassiveAction/:itemtype/:action (ACCIÓN MASIVA) ---
app.post('/apirest.php/applyMassiveAction/:itemtype/:action', async (req, res) => {
    const { itemtype } = req.params; 
    const { ids, input } = req.body; 

    if (!req.headers['session-token'] || !req.headers['app-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    if (!ids || !Array.isArray(ids) || !input) return res.status(400).json({ error: "Bad Request: Missing 'ids' array or 'input' payload" });

    let ok = 0; let ko = 0; let noright = 0; let messages = [];

    try {
        // Ejecuta la actualización genérica para cada ID en paralelo
        const updatePromises = ids.map(id => {
            return updateItem(itemtype, id, input)
                .then(wasUpdated => {
                    if (wasUpdated) { ok++; } else { ko++; messages.push({ message: `ID ${id} no encontrado en ${itemtype}.`, id: id }); }
                })
                .catch(error => { ko++; messages.push({ message: `Fallo de DB para ID ${id}: ${error.message}`, id: id }); });
        });

        await Promise.all(updatePromises);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    
    const statusCode = ko > 0 ? 207 : 200;

    res.status(statusCode).json({
        ok: ok, ko: ko, noright: noright, messages: messages.filter(msg => msg.id)
    });
});


// ----- 🎯 ENDPOINT 4: PUT (ACTUALIZACIÓN por ID en URL) ----------------
app.put('/apirest.php/:itemtype/:id', async (req, res) => {
    await handlePutRequest(req, res);
});

// ----- 🎯 ENDPOINT 4: PUT (ACTUALIZACIÓN Bulk) --------------------------
app.put('/apirest.php/:itemtype', async (req, res) => {
    await handlePutRequest(req, res);
});


// ----- 🎯 ENDPOINT 5: DELETE (por ID en URL) ----------------------------
app.delete('/apirest.php/:itemtype/:id', async (req, res) => {
    await handleDeleteRequest(req, res);
});

// ----- 🎯 ENDPOINT 5: DELETE (Bulk) -------------------------------------
app.delete('/apirest.php/:itemtype', async (req, res) => {
    await handleDeleteRequest(req, res);
});


// ==================================================================
// === INICIALIZACIÓN DEL SERVIDOR ==================================
// ==================================================================
app.listen(PORT, () => {
    console.log(`🚀 Servidor de API GLPI simple corriendo en http://localhost:${PORT}`);
    console.log(`Base de datos conectada a: ${process.env.DB_DATABASE || 'glpi (hardcodeado)'}`);
});
