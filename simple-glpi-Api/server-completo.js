import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(express.json());

// ==================================================================
// === CONFIGURACIÓN DE CONEXIÓN A LA BASE DE DATOS ================
// ==================================================================
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'glpi',
    port: 3306
});

// ==================================================================
// === FUNCIONES DE BASE DE DATOS ==================================
// ==================================================================

function insertItem(itemtype, item) {
    const columns = Object.keys(item).join(', ');
    const values = Object.values(item);
    const placeholders = values.map(() => '?').join(', ');

    return pool.then(connection => {
        const dbTable = itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}s`;
        const query = `INSERT INTO ${dbTable} (${columns}) VALUES (${placeholders})`;
        return connection.execute(query, values);
    })
    .then(([result]) => result.insertId);
}

async function updateItem(itemtype, id, input) {
    const connection = await pool;
    const setClauses = [];
    const values = [];
    const dbTable = itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}s`;

    for (const key in input) {
        if (key !== 'id') {
            setClauses.push(`${key} = ?`);
            values.push(input[key]);
        }
    }
    
    if (setClauses.length === 0) return false;
    values.push(id);

    try {
        const query = `UPDATE ${dbTable} SET ${setClauses.join(', ')} WHERE id = ?`;
        const [result] = await connection.execute(query, values);
        return result.affectedRows > 0;
    } catch (error) {
        throw error;
    }
}

async function getItemById(itemtype, id) {
    const connection = await pool;
    const dbTable = itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}s`;
    try {
        const [rows] = await connection.execute(
            `SELECT * FROM ${dbTable} WHERE id = ?`,
            [id]
        );
        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        throw error;
    }
}

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

async function deleteItem(itemtype, id) {
    const connection = await pool;
    const dbTable = itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}s`;
    try {
        const [result] = await connection.execute(
            `DELETE FROM ${dbTable} WHERE id = ?`,
            [id]
        );
        return result.affectedRows > 0;
    } catch (error) {
        throw error;
    }
}

async function getSubItems(itemtype, id, sub_itemtype) {
    const connection = await pool;
    const subTable = sub_itemtype.startsWith('glpi_') ? sub_itemtype : `glpi_${sub_itemtype.toLowerCase()}`;
    
    try {
        const [rows] = await connection.execute(
            `SELECT * FROM ${subTable} WHERE items_id = ? AND itemtype = ? LIMIT 50`,
            [id, itemtype]
        );
        return rows;
    } catch (error) {
        throw error;
    }
}

// ==================================================================
// === 1. ENDPOINTS DE AUTENTICACIÓN Y SESIÓN ======================
// ==================================================================

app.get('/apirest.php/initSession', (req, res) => {
    const simulatedToken = crypto.randomBytes(20).toString('hex');
    const response = { "session_token": simulatedToken };
    
    if (req.query.get_full_session === 'true') {
        response.session = {
            'glpi_plugins': {},
            'user_info': { id: 1, name: 'tech', profile: 'Super-admin' }
        };
    }
    
    return res.status(200).json(response);
});

app.get('/apirest.php/killSession', (req, res) => {
    if (!req.headers['session-token']) {
        return res.status(400).json({ error: "Bad Request: Missing Session-Token header" });
    }
    return res.status(200).send();
});

const lostPasswordHandler = (req, res) => {
    const { email, password_forget_token, password } = req.body;
    if (!email) return res.status(400).json({ error: "Bad Request: Missing 'email' in payload" });
    return res.status(200).send();
};
app.put('/apirest.php/lostPassword', lostPasswordHandler);
app.patch('/apirest.php/lostPassword', lostPasswordHandler);

// ==================================================================
// === 2. ENDPOINTS DE PERFILES ====================================
// ==================================================================

app.get('/apirest.php/getMyProfiles', (req, res) => {
    if (!req.headers['session-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing Session-Token" });
    const profiles = [
        { id: 1, name: "Super-admin", entities: [{ id: 0, name: 'Root Entity' }] },
        { id: 4, name: "Technician", entities: [{ id: 1, name: 'Entity A' }] }
    ];
    res.status(200).json({ myprofiles: profiles });
});

app.get('/apirest.php/getActiveProfile', (req, res) => {
    if (!req.headers['session-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing Session-Token" });
    const activeProfile = { 
        id: 1, 
        name: "Super-admin", 
        entities: [{ id: 0, name: 'Root Entity' }] 
    };
    res.status(200).json(activeProfile);
});

app.post('/apirest.php/changeActiveProfile', (req, res) => {
    const profiles_id = req.body.profiles_id;
    if (!req.headers['session-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing Session-Token" });
    if (!profiles_id) return res.status(400).json({ error: "Bad Request: Missing 'profiles_id' in payload" });
    if (profiles_id == 99) return res.status(404).json({ error: "Not found", message: "Profile does not exist or is not usable" });
    res.status(200).send();
});

// ==================================================================
// === 3. ENDPOINTS DE ENTIDADES ===================================
// ==================================================================

app.get('/apirest.php/getMyEntities', (req, res) => {
    if (!req.headers['session-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing Session-Token" });
    const entities = [
        { id: 0, name: "Root Entity" },
        { id: 1, name: "Entity A" },
        { id: 2, name: "Entity B" }
    ];
    res.status(200).json({ myentities: entities });
});

app.get('/apirest.php/getActiveEntities', (req, res) => {
    if (!req.headers['session-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing Session-Token" });
    const response = {
        active_entity: { id: 0 },
        active_entity_recursive: true,
        active_entities: [{ id: 0 }, { id: 1 }, { id: 2 }]
    };
    res.status(200).json(response);
});

app.post('/apirest.php/changeActiveEntities', (req, res) => {
    const { entities_id, is_recursive } = req.body;
    if (!req.headers['session-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing Session-Token" });
    if (!entities_id) return res.status(400).json({ error: "Bad Request: Missing 'entities_id' in payload" });
    res.status(200).send();
});

// ==================================================================
// === 4. ENDPOINTS DE INFORMACIÓN DEL SISTEMA =====================
// ==================================================================

app.get('/apirest.php/getFullSession', (req, res) => {
    if (!req.headers['session-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing Session-Token" });
    const fullSession = {
        'glpi_plugins': {},
        'glpicookietest': 'test_value',
        'glpicsrftokens': {},
        'glpiID': 1,
        'glpiname': 'tech',
        'glpiactiveprofile': { id: 1, name: 'Super-admin' }
    };
    res.status(200).json({ session: fullSession });
});

app.get('/apirest.php/getGlpiConfig', (req, res) => {
    if (!req.headers['session-token']) return res.status(401).json({ error: "UNAUTHORIZED: Missing Session-Token" });
    const config = {
        'version': '10.0.10',
        'default_language': 'es_ES',
        'available_languages': ['es_ES', 'en_US', 'fr_FR']
    };
    res.status(200).json(config);
});

// ==================================================================
// === 5. ENDPOINTS DE BÚSQUEDA Y METADATOS ========================
// ==================================================================

app.get('/apirest.php/listSearchOptions/:itemtype', (req, res) => {
    const { itemtype } = req.params;
    if (!req.headers['session-token'] || !req.headers['app-token']) {
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }

    const mockSearchOptions = {
        "common": "Characteristics",
        1: { 'name': 'Name', 'field': 'name', 'datatype': 'string', 'uid': `${itemtype}.name` },
        2: { 'name': 'ID', 'field': 'id', 'datatype': 'number', 'uid': `${itemtype}.id` },
        3: { 'name': 'Entity', 'field': 'completename', 'datatype': 'dropdown', 'uid': `${itemtype}.Entity.completename` }
    };
    res.status(200).json(mockSearchOptions);
});

app.get('/apirest.php/search/:itemtype', async (req, res) => {
    const { itemtype } = req.params;

    if (!req.headers['session-token'] || !req.headers['app-token']) { 
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }
    
    try {
        const list = await getItemList(itemtype);
        return res.status(200).json(list);
    } catch (error) {
        const dbTable = itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}s`;
        return res.status(404).json({ error: "Not Found or Database Error", message: `Error accessing table ${dbTable}: ${error.message}` });
    }
});

app.get('/apirest.php/getMultipleItems', async (req, res) => {
    if (!req.headers['session-token'] || !req.headers['app-token']) {
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }

    const { items } = req.query;
    if (!items || !Array.isArray(items)) {
        return res.status(400).json({ error: "Bad Request: Missing or invalid 'items' parameter" });
    }

    try {
        const results = [];
        for (const item of items) {
            if (item.itemtype && item.items_id) {
                const itemData = await getItemById(item.itemtype, item.items_id);
                if (itemData) {
                    results.push(itemData);
                }
            }
        }
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", message: error.message });
    }
});

// ==================================================================
// === 6. ENDPOINTS DE ACCIONES MASIVAS ============================
// ==================================================================

app.get('/apirest.php/getMassiveActions/:itemtype', (req, res) => {
    if (!req.headers['session-token'] || !req.headers['app-token']) {
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }
    
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

app.get('/apirest.php/getMassiveActions/:itemtype/:id', (req, res) => {
    if (!req.headers['session-token'] || !req.headers['app-token']) {
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }
    
    const actions = [
        { key: "MassiveAction:update", label: "Update" },
        { key: "MassiveAction:delete", label: "Put in trashbin" },
        { key: "MassiveAction:add_note", label: "Add note" }
    ];
    res.status(200).json(actions);
});

app.get('/apirest.php/getMassiveActionParameters/:itemtype/:action', (req, res) => {
    const { action } = req.params;
    if (!req.headers['session-token'] || !req.headers['app-token']) {
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }
    
    if (action.includes('note')) {
        return res.status(200).json([{ name: "note_text", type: "text", label: "Note content" }]);
    } 
    if (action.includes('Profile')) {
        return res.status(200).json([{ name: "profiles_id", type: "dropdown", label: "Profile to assign" }]);
    }
    res.status(200).json([]);
});

app.post('/apirest.php/applyMassiveAction/:itemtype/:action', async (req, res) => {
    const { itemtype } = req.params; 
    const { ids, input } = req.body; 

    if (!req.headers['session-token'] || !req.headers['app-token']) {
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }
    
    if (!ids || !Array.isArray(ids) || !input) {
        return res.status(400).json({ error: "Bad Request: Missing 'ids' array or 'input' payload" });
    }

    let ok = 0; 
    let ko = 0; 
    let messages = [];

    try {
        const updatePromises = ids.map(id => {
            return updateItem(itemtype, id, input)
                .then(wasUpdated => {
                    if (wasUpdated) { 
                        ok++; 
                    } else { 
                        ko++; 
                        messages.push({ message: `ID ${id} not found in ${itemtype}`, id: id });
                    }
                })
                .catch(error => { 
                    ko++; 
                    messages.push({ message: `DB error for ID ${id}: ${error.message}`, id: id });
                });
        });

        await Promise.all(updatePromises);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
    
    const statusCode = ko > 0 ? 207 : 200;
    res.status(statusCode).json({
        ok: ok, 
        ko: ko, 
        noright: 0, 
        messages: messages
    });
});

// ==================================================================
// === 7. ENDPOINTS ESPECIALES Y ARCHIVOS ==========================
// ==================================================================

app.get('/apirest.php/:itemtype/:id/:sub_itemtype', async (req, res) => {
    const { itemtype, id, sub_itemtype } = req.params;
    if (!req.headers['session-token'] || !req.headers['app-token']) {
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }

    try {
        const subItems = await getSubItems(itemtype, id, sub_itemtype);
        res.status(200).json(subItems);
    } catch (error) {
        res.status(404).json({ 
            error: "Not Found", 
            message: `Cannot find sub items ${sub_itemtype} for ${itemtype} ID ${id}: ${error.message}` 
        });
    }
});

app.get('/apirest.php/Document/:id', (req, res) => {
    if (!req.headers['session-token'] || !req.headers['app-token']) {
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }

    const acceptHeader = req.headers['accept'];
    const altParam = req.query.alt;
    
    if (acceptHeader !== 'application/octet-stream' && altParam !== 'media') {
        return res.status(400).json({ error: "Bad Request: Must include 'Accept: application/octet-stream' header or 'alt=media' parameter" });
    }

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename="document.pdf"');
    res.status(200).send(Buffer.from('Simulated document content'));
});

app.get('/apirest.php/User/:id/Picture', (req, res) => {
    if (!req.headers['session-token'] || !req.headers['app-token']) {
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }

    res.status(204).send();
});

// ==================================================================
// === 8. ENDPOINTS CRUD PRINCIPALES ===============================
// ==================================================================

app.get('/apirest.php/:itemtype/:id', async (req, res) => {
    const { id, itemtype } = req.params;

    if (!req.headers['session-token'] || !req.headers['app-token']) { 
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }
    
    try {
        const item = await getItemById(itemtype, id);
        if (item) {
            return res.status(200).json(item);
        } else {
            return res.status(404).json({ error: "Not Found", message: `Item ID ${id} not found in ${itemtype}` });
        }
    } catch (error) {
        const dbTable = itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}s`;
        return res.status(404).json({ error: "Not Found or Database Error", message: `Error accessing table ${dbTable}: ${error.message}` });
    }
});

app.get('/apirest.php/:itemtype', async (req, res) => {
    const { itemtype } = req.params;

    if (!req.headers['session-token'] || !req.headers['app-token']) { 
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }
    
    try {
        const list = await getItemList(itemtype);
        return res.status(200).json(list);
    } catch (error) {
        const dbTable = itemtype.startsWith('glpi_') ? itemtype : `glpi_${itemtype.toLowerCase()}s`;
        return res.status(404).json({ error: "Not Found or Database Error", message: `Error accessing table ${dbTable}: ${error.message}` });
    }
});

app.post('/apirest.php/:itemtype', (req, res) => {
    const { itemtype } = req.params; 
    
    if (!req.headers['session-token'] || !req.headers['app-token']) {
        return res.status(401).json({ error: "Missing required tokens" });
    }
    
    if (!req.body.input) {
        return res.status(400).json({ error: "Missing 'input' data in body" });
    }

    if (!Array.isArray(req.body.input)) {
        insertItem(itemtype, req.body.input)
            .then(newId => res.status(201).set({ 'Location': `http://localhost:${PORT}/apirest.php/${itemtype}/${newId}` }).json({ id: newId }))
            .catch(error => res.status(409).json({ error: 'Conflict or Database Error', message: error.message }));
        return;
    }

    let results = [];
    let linkHeader = [];
    
    req.body.input.reduce((promiseChain, item) => {
        return promiseChain.then(() => {
            return insertItem(itemtype, item)
                .then(newId => {
                    results.push({ id: newId, message: "" });
                    linkHeader.push(`http://localhost:${PORT}/apirest.php/${itemtype}/${newId}`);
                })
                .catch(error => {
                    results.push({ id: item.id || false, message: error.message });
                });
        });
    }, Promise.resolve())
    .then(() => res.status(207).set({ 'Link': linkHeader.join(',') }).json(results))
    .catch(error => res.status(500).json({ error: 'Internal Server Error' }));
});

app.put('/apirest.php/:itemtype/:id', async (req, res) => {
    const { id, itemtype } = req.params; 
    const inputData = req.body.input;

    if (!req.headers['session-token'] || !req.headers['app-token']) { 
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }

    if (!inputData) {
        return res.status(400).json({ error: "Bad Request: Missing 'input' payload" });
    }

    try {
        const wasUpdated = await updateItem(itemtype, id, inputData);
        if (wasUpdated) {
            return res.status(200).json([{ [id]: true, message: "" }]);
        } else {
            return res.status(207).json([{ [id]: false, message: "Item not found" }]);
        }
    } catch (error) {
        return res.status(409).json({ error: 'Conflict or Database Error', message: error.message });
    }
});

app.patch('/apirest.php/:itemtype/:id', async (req, res) => {
    await app._router.stack.find(layer => layer.route && layer.route.path === '/apirest.php/:itemtype/:id' && layer.route.methods.put).handle(req, res);
});

app.delete('/apirest.php/:itemtype/:id', async (req, res) => {
    const { id, itemtype } = req.params; 
    
    if (!req.headers['session-token'] || !req.headers['app-token']) { 
        return res.status(401).json({ error: "UNAUTHORIZED: Missing required tokens" });
    }

    try {
        const wasDeleted = await deleteItem(itemtype, id);
        if (wasDeleted) {
            return res.status(204).send();
        } else {
            return res.status(207).json([{ [id]: false, message: "Item not found" }]);
        }
    } catch (error) {
        return res.status(409).json({ error: 'Conflict or Database Error', message: error.message });
    }
});

// ==================================================================
// === INICIALIZACIÓN DEL SERVIDOR =================================
// ==================================================================
app.listen(PORT, () => {
    console.log(`🚀 Servidor de API GLPI simple corriendo en http://localhost:${PORT}`);
    console.log(`Base de datos conectada a: ${process.env.DB_DATABASE || 'glpi (hardcodeado)'}`);
});
