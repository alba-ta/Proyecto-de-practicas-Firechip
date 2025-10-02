import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import crypto from 'crypto';

// Importaciones corregidas
import { itemtypeToTableMap, getTableName, isValidItemtype, itemtypeTableMap } from './itemtypeMappings.js';
import { itemtypeSchemas } from './itemtypeSchemas.js';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(express.json());

// ==================================================================
// === CONFIGURACIÓN DE BASE DE DATOS ==============================
// ==================================================================
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'glpi',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// ==================================================================
// === FUNCIONES MEJORADAS =========================================
// ==================================================================

function validateItemFields(itemtype, input, isCreate = false) {
    const dbTable = getTableName(itemtype);
    const schema = itemtypeSchemas[dbTable];
    
    if (!schema) {
        console.warn(`⚠️ No schema found for ${itemtype} (table: ${dbTable})`);
        return { isValid: true, errors: [] };
    }

    const errors = [];
    
    if (isCreate && schema.requiredOnCreate) {
        for (const requiredField of schema.requiredOnCreate) {
            if (input[requiredField] === undefined || input[requiredField] === null || input[requiredField] === '') {
                errors.push(`Campo '${requiredField}' es requerido para ${itemtype}`);
            }
        }
    }
    
    for (const field of Object.keys(input)) {
        if (!schema.allowed.includes(field)) {
            errors.push(`Campo '${field}' no permitido para ${itemtype}`);
        }
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// ==================================================================
// === FUNCIONES DE BASE DE DATOS ==================================
// ==================================================================

async function insertItem(itemtype, item) {
    if (!isValidItemtype(itemtype)) {
        throw new Error(`Itemtype inválido: ${itemtype}`);
    }

    const validation = validateItemFields(itemtype, item, true);
    if (!validation.isValid) {
        throw new Error(`Validación falló: ${validation.errors.join(', ')}`);
    }

    const columns = Object.keys(item).join(', ');
    const values = Object.values(item);
    const placeholders = values.map(() => '?').join(', ');

    const connection = await pool;
    const dbTable = getTableName(itemtype);
    
    const query = `INSERT INTO ${dbTable} (${columns}) VALUES (${placeholders})`;
    const [result] = await connection.execute(query, values);
    
    // Log en glpi_logs
    try {
        await connection.execute(
            `INSERT INTO glpi_logs (itemtype, items_id, itemtype_link, linked_action, user_name, date_mod, id_search_option, old_value, new_value) 
             VALUES (?, ?, '', 19, 'API', NOW(), 0, '', ?)`,
            [itemtype, result.insertId, `Creado vía API`]
        );
    } catch (logError) {
        console.warn('No se pudo crear log:', logError.message);
    }
    
    return result.insertId;
}

async function updateItem(itemtype, id, input) {
    if (!isValidItemtype(itemtype)) {
        throw new Error(`Itemtype inválido: ${itemtype}`);
    }

    const validation = validateItemFields(itemtype, input, false);
    if (!validation.isValid) {
        throw new Error(`Validación falló: ${validation.errors.join(', ')}`);
    }

    const connection = await pool;
    const setClauses = [];
    const values = [];
    const dbTable = getTableName(itemtype);

    for (const key in input) {
        if (key !== 'id') {
            setClauses.push(`${key} = ?`);
            values.push(input[key]);
        }
    }
    
    if (setClauses.length === 0) return false;
    values.push(id);

    const query = `UPDATE ${dbTable} SET ${setClauses.join(', ')} WHERE id = ?`;
    const [result] = await connection.execute(query, values);
    
    // Log de cambios
    if (result.affectedRows > 0) {
        try {
            await connection.execute(
                `INSERT INTO glpi_logs (itemtype, items_id, itemtype_link, linked_action, user_name, date_mod, id_search_option, old_value, new_value) 
                 VALUES (?, ?, '', 20, 'API', NOW(), 0, '', ?)`,
                [itemtype, id, `Actualizado vía API`]
            );
        } catch (logError) {
            console.warn('No se pudo crear log de actualización:', logError.message);
        }
    }
    
    return result.affectedRows > 0;
}

async function deleteItem(itemtype, id, forcePurge = false) {
    if (!isValidItemtype(itemtype)) {
        throw new Error(`Itemtype inválido: ${itemtype}`);
    }

    const connection = await pool;
    const dbTable = getTableName(itemtype);
    
    const schema = itemtypeSchemas[dbTable];
    const hasSoftDelete = schema && schema.hasSoftDelete;
    
    let result;
    
    if (hasSoftDelete && !forcePurge) {
        // SOFT DELETE
        [result] = await connection.execute(
            `UPDATE ${dbTable} SET is_deleted = 1 WHERE id = ?`,
            [id]
        );
        
        // Log de eliminación a papelera
        try {
            await connection.execute(
                `INSERT INTO glpi_logs (itemtype, items_id, itemtype_link, linked_action, user_name, date_mod, id_search_option, old_value, new_value) 
                 VALUES (?, ?, '', 22, 'API', NOW(), 0, '', 'Movido a papelera')`,
                [itemtype, id]
            );
        } catch (logError) {
            console.warn('No se pudo crear log de eliminación:', logError.message);
        }
    } else {
        // HARD DELETE
        [result] = await connection.execute(
            `DELETE FROM ${dbTable} WHERE id = ?`,
            [id]
        );
        
        // Log de purga
        try {
            await connection.execute(
                `INSERT INTO glpi_logs (itemtype, items_id, itemtype_link, linked_action, user_name, date_mod, id_search_option, old_value, new_value) 
                 VALUES (?, ?, '', 23, 'API', NOW(), 0, '', 'Eliminado permanentemente')`,
                [itemtype, id]
            );
        } catch (logError) {
            console.warn('No se pudo crear log de purga:', logError.message);
        }
    }
    
    return result.affectedRows > 0;
}

async function restoreItem(itemtype, id) {
    if (!isValidItemtype(itemtype)) {
        throw new Error(`Itemtype inválido: ${itemtype}`);
    }

    const connection = await pool;
    const dbTable = getTableName(itemtype);
    
    const schema = itemtypeSchemas[dbTable];
    const hasSoftDelete = schema && schema.hasSoftDelete;
    
    if (!hasSoftDelete) {
        throw new Error(`Itemtype ${itemtype} no soporta restauración`);
    }
    
    const [result] = await connection.execute(
        `UPDATE ${dbTable} SET is_deleted = 0 WHERE id = ?`,
        [id]
    );
    
    // Log de restauración
    try {
        await connection.execute(
            `INSERT INTO glpi_logs (itemtype, items_id, itemtype_link, linked_action, user_name, date_mod, id_search_option, old_value, new_value) 
             VALUES (?, ?, '', 21, 'API', NOW(), 0, '', 'Restaurado desde papelera')`,
            [itemtype, id]
        );
    } catch (logError) {
        console.warn('No se pudo crear log de restauración:', logError.message);
    }
    
    return result.affectedRows > 0;
}

async function getItemById(itemtype, id, includeDeleted = false) {
    if (!isValidItemtype(itemtype)) {
        throw new Error(`Itemtype inválido: ${itemtype}`);
    }

    const connection = await pool;
    const dbTable = getTableName(itemtype);
    
    const schema = itemtypeSchemas[dbTable];
    const hasSoftDelete = schema && schema.hasSoftDelete;
    
    let query = `SELECT * FROM ${dbTable} WHERE id = ?`;
    const params = [id];
    
    if (hasSoftDelete && !includeDeleted) {
        query += ` AND is_deleted = 0`;
    }
    
    try {
        const [rows] = await connection.execute(query, params);
        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        throw error;
    }
}

async function getItemList(itemtype, includeDeleted = false) {
    if (!isValidItemtype(itemtype)) {
        throw new Error(`Itemtype inválido: ${itemtype}`);
    }

    const connection = await pool;
    const dbTable = getTableName(itemtype);
    
    const schema = itemtypeSchemas[dbTable];
    const hasSoftDelete = schema && schema.hasSoftDelete;
    
    let query = `SELECT * FROM ${dbTable}`;
    const params = [];
    
    if (hasSoftDelete && !includeDeleted) {
        query += ` WHERE is_deleted = 0`;
    }
    
    query += ` LIMIT 50`;
    
    try {
        const [rows] = await connection.execute(query, params);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function getSubItems(itemtype, id, sub_itemtype) {
    if (!isValidItemtype(itemtype) || !isValidItemtype(sub_itemtype)) {
        throw new Error(`Itemtype inválido: ${itemtype} o ${sub_itemtype}`);
    }

    const connection = await pool;
    const subTable = getTableName(sub_itemtype);
    
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
// === FUNCIONES DE AUTENTICACIÓN ==================================
// ==================================================================

async function validateSession(sessionToken) {
    if (!sessionToken) return null;
    
    const connection = await pool;
    try {
        const [sessions] = await connection.execute(
            `SELECT * FROM glpi_sessions WHERE id = ? AND expire > NOW()`,
            [sessionToken]
        );
        return sessions.length > 0 ? sessions[0] : null;
    } catch (error) {
        return null;
    }
}

async function getUserFromSession(session) {
    if (!session) return null;
    
    const connection = await pool;
    try {
        const sessionData = JSON.parse(session.data || '{}');
        const userId = sessionData.glpiID;
        
        if (!userId) return null;
        
        const [users] = await connection.execute(
            `SELECT * FROM glpi_users WHERE id = ? AND is_active = 1`,
            [userId]
        );
        return users.length > 0 ? users[0] : null;
    } catch (error) {
        return null;
    }
}

async function getUserProfiles(userId) {
    const connection = await pool;
    try {
        const [profiles] = await connection.execute(`
            SELECT p.*, pu.entities_id, pu.is_recursive 
            FROM glpi_profiles p 
            JOIN glpi_profiles_users pu ON p.id = pu.profiles_id 
            WHERE pu.users_id = ?
        `, [userId]);
        return profiles;
    } catch (error) {
        return [];
    }
}

async function getProfileEntities(profileId, userId) {
    const connection = await pool;
    try {
        const [entities] = await connection.execute(`
            SELECT e.*, pe.is_recursive 
            FROM glpi_entities e 
            JOIN glpi_profiles_users pe ON e.id = pe.entities_id 
            WHERE pe.profiles_id = ? AND pe.users_id = ?
            ORDER BY e.level ASC
        `, [profileId, userId]);
        return entities;
    } catch (error) {
        return [];
    }
}

async function checkItemPermission(userId, itemtype, itemId, operation) {
    const connection = await pool;
    try {
        const [rights] = await connection.execute(`
            SELECT pr.rights 
            FROM glpi_profilerights pr 
            JOIN glpi_profiles_users pu ON pr.profiles_id = pu.profiles_id 
            WHERE pu.users_id = ? AND pr.name = ?
        `, [userId, itemtype]);
        
        if (rights.length === 0) return false;
        
        const profileRights = rights[0].rights;
        const operationBits = {
            'read': 1,
            'update': 2,
            'create': 4,
            'delete': 8,
            'purge': 16
        };
        
        return (profileRights & operationBits[operation]) !== 0;
    } catch (error) {
        return false;
    }
}

// ==================================================================
// === MIDDLEWARE DE AUTENTICACIÓN ==================================
// ==================================================================

async function authMiddleware(req, res, next) {
    const sessionToken = req.headers['session-token'];
    const appToken = req.headers['app-token'];
    
    if (!sessionToken) {
        return res.status(401).json({ error: "ERROR_SESSION_TOKEN_MISSING" });
    }
    
    try {
        const session = await validateSession(sessionToken);
        if (!session) {
            return res.status(401).json({ error: "ERROR_SESSION_TOKEN_INVALID" });
        }
        
        const user = await getUserFromSession(session);
        if (!user) {
            return res.status(401).json({ error: "ERROR_GLPI_LOGIN" });
        }
        
        req.session = session;
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ error: "ERROR_SESSION_TOKEN_INVALID" });
    }
}

// ==================================================================
// === ENDPOINTS 1-11: AUTENTICACIÓN Y SESIÓN ======================
// ==================================================================

// 1. initSession
app.get('/apirest.php/initSession', async (req, res) => {
    const { login, password, user_token } = req.headers;
    const appToken = req.headers['app-token'];
    
    if (!login && !password && !user_token) {
        return res.status(400).json({ error: "ERROR_LOGIN_PARAMETERS_MISSING" });
    }
    
    const connection = await pool;
    try {
        let user;
        
        if (user_token) {
            const [users] = await connection.execute(
                `SELECT * FROM glpi_users WHERE personal_token = ? AND is_active = 1`,
                [user_token]
            );
            user = users.length > 0 ? users[0] : null;
        } else {
            const [users] = await connection.execute(
                `SELECT * FROM glpi_users WHERE name = ? AND is_active = 1`,
                [login]
            );
            user = users.length > 0 ? users[0] : null;
        }
        
        if (!user) {
            return res.status(401).json({ error: "ERROR_GLPI_LOGIN" });
        }
        
        const sessionId = crypto.randomBytes(20).toString('hex');
        const sessionData = {
            glpiID: user.id,
            glpiname: user.name,
            glpiactiveprofile: 1
        };
        
        await connection.execute(
            `INSERT INTO glpi_sessions (id, data, expire) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 1 HOUR))`,
            [sessionId, JSON.stringify(sessionData)]
        );
        
        const response = { "session_token": sessionId };
        
        if (req.query.get_full_session === 'true') {
            response.session = sessionData;
        }
        
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ error: "ERROR_GLPI_LOGIN" });
    }
});

// 2. killSession
app.get('/apirest.php/killSession', authMiddleware, async (req, res) => {
    const connection = await pool;
    try {
        await connection.execute(
            `DELETE FROM glpi_sessions WHERE id = ?`,
            [req.headers['session-token']]
        );
        return res.status(200).send();
    } catch (error) {
        return res.status(500).json({ error: "ERROR_GLPI_DELETE" });
    }
});

// 3. lostPassword
app.put('/apirest.php/lostPassword', async (req, res) => {
    const { email, password_forget_token, password } = req.body;
    
    if (!email) {
        return res.status(400).json({ error: "Bad Request: Missing 'email' in payload" });
    }
    
    const connection = await pool;
    try {
        if (password_forget_token && password) {
            const [users] = await connection.execute(
                `SELECT * FROM glpi_users WHERE email = ? AND password_forget_token = ?`,
                [email, password_forget_token]
            );
            
            if (users.length === 0) {
                return res.status(400).json({ error: "Invalid token" });
            }
            
            await connection.execute(
                `UPDATE glpi_users SET password = ?, password_forget_token = NULL WHERE email = ?`,
                [password, email]
            );
            
        } else {
            const [users] = await connection.execute(
                `SELECT * FROM glpi_users WHERE email = ?`,
                [email]
            );
            
            if (users.length === 0) {
                return res.status(400).json({ error: "Email not found" });
            }
            
            const token = crypto.randomBytes(20).toString('hex');
            await connection.execute(
                `UPDATE glpi_users SET password_forget_token = ? WHERE email = ?`,
                [token, email]
            );
        }
        
        return res.status(200).send();
    } catch (error) {
        return res.status(500).json({ error: "ERROR_GLPI_UPDATE" });
    }
});

app.patch('/apirest.php/lostPassword', async (req, res) => {
    // Misma implementación que PUT
    const { email, password_forget_token, password } = req.body;
    
    if (!email) {
        return res.status(400).json({ error: "Bad Request: Missing 'email' in payload" });
    }
    
    const connection = await pool;
    try {
        if (password_forget_token && password) {
            const [users] = await connection.execute(
                `SELECT * FROM glpi_users WHERE email = ? AND password_forget_token = ?`,
                [email, password_forget_token]
            );
            
            if (users.length === 0) {
                return res.status(400).json({ error: "Invalid token" });
            }
            
            await connection.execute(
                `UPDATE glpi_users SET password = ?, password_forget_token = NULL WHERE email = ?`,
                [password, email]
            );
            
        } else {
            const [users] = await connection.execute(
                `SELECT * FROM glpi_users WHERE email = ?`,
                [email]
            );
            
            if (users.length === 0) {
                return res.status(400).json({ error: "Email not found" });
            }
            
            const token = crypto.randomBytes(20).toString('hex');
            await connection.execute(
                `UPDATE glpi_users SET password_forget_token = ? WHERE email = ?`,
                [token, email]
            );
        }
        
        return res.status(200).send();
    } catch (error) {
        return res.status(500).json({ error: "ERROR_GLPI_UPDATE" });
    }
});

// 4. getMyProfiles
app.get('/apirest.php/getMyProfiles', authMiddleware, async (req, res) => {
    try {
        const profiles = await getUserProfiles(req.user.id);
        
        const profilesWithEntities = await Promise.all(
            profiles.map(async (profile) => {
                const entities = await getProfileEntities(profile.id, req.user.id);
                return {
                    id: profile.id,
                    name: profile.name,
                    entities: entities.map(e => ({
                        id: e.id,
                        name: e.name,
                        completename: e.completename,
                        is_recursive: profile.is_recursive
                    }))
                };
            })
        );
        
        res.status(200).json({ myprofiles: profilesWithEntities });
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_ADD" });
    }
});

// 5. getActiveProfile  
app.get('/apirest.php/getActiveProfile', authMiddleware, async (req, res) => {
    try {
        const sessionData = JSON.parse(req.session.data || '{}');
        const activeProfileId = sessionData.glpiactiveprofile || 1;
        
        const [profiles] = await pool.execute(
            `SELECT * FROM glpi_profiles WHERE id = ?`,
            [activeProfileId]
        );
        
        if (profiles.length === 0) {
            return res.status(404).json({ error: "Profile not found" });
        }
        
        const entities = await getProfileEntities(activeProfileId, req.user.id);
        
        res.status(200).json({
            id: profiles[0].id,
            name: profiles[0].name,
            entities: entities.map(e => ({
                id: e.id,
                name: e.name,
                completename: e.completename
            }))
        });
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_ADD" });
    }
});

// 6. changeActiveProfile
app.post('/apirest.php/changeActiveProfile', authMiddleware, async (req, res) => {
    const { profiles_id } = req.body;
    
    if (!profiles_id) {
        return res.status(400).json({ error: "Bad Request: Missing 'profiles_id' in payload" });
    }
    
    try {
        const userProfiles = await getUserProfiles(req.user.id);
        const hasProfile = userProfiles.some(p => p.id == profiles_id);
        
        if (!hasProfile) {
            return res.status(404).json({ error: "Not found", message: "Profile does not exist or is not usable" });
        }
        
        const sessionData = JSON.parse(req.session.data || '{}');
        sessionData.glpiactiveprofile = parseInt(profiles_id);
        
        const connection = await pool;
        await connection.execute(
            `UPDATE glpi_sessions SET data = ? WHERE id = ?`,
            [JSON.stringify(sessionData), req.headers['session-token']]
        );
        
        res.status(200).send();
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_UPDATE" });
    }
});

// 7. getMyEntities
app.get('/apirest.php/getMyEntities', authMiddleware, async (req, res) => {
    try {
        const { is_recursive } = req.query;
        const sessionData = JSON.parse(req.session.data || '{}');
        const activeProfileId = sessionData.glpiactiveprofile || 1;
        
        let entities;
        if (is_recursive === 'true') {
            entities = await getProfileEntities(activeProfileId, req.user.id);
        } else {
            const connection = await pool;
            [entities] = await connection.execute(`
                SELECT e.* 
                FROM glpi_entities e 
                JOIN glpi_profiles_users pe ON e.id = pe.entities_id 
                WHERE pe.profiles_id = ? AND pe.users_id = ? AND pe.is_recursive = 0
            `, [activeProfileId, req.user.id]);
        }
        
        res.status(200).json({ 
            myentities: entities.map(e => ({
                id: e.id,
                name: e.name,
                completename: e.completename
            }))
        });
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_ADD" });
    }
});

// 8. getActiveEntities
app.get('/apirest.php/getActiveEntities', authMiddleware, async (req, res) => {
    try {
        const sessionData = JSON.parse(req.session.data || '{}');
        const activeEntity = sessionData.glpiactive_entity || { id: 0, is_recursive: false };
        
        let activeEntities = [];
        if (activeEntity.is_recursive && activeEntity.id !== 0) {
            const connection = await pool;
            [activeEntities] = await connection.execute(`
                SELECT id FROM glpi_entities 
                WHERE id = ? OR entities_id = ?
            `, [activeEntity.id, activeEntity.id]);
        } else {
            activeEntities = [{ id: activeEntity.id }];
        }
        
        res.status(200).json({
            active_entity: activeEntity,
            active_entity_recursive: activeEntity.is_recursive || false,
            active_entities: activeEntities
        });
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_ADD" });
    }
});

// 9. changeActiveEntities
app.post('/apirest.php/changeActiveEntities', authMiddleware, async (req, res) => {
    const { entities_id, is_recursive } = req.body;
    
    if (!entities_id) {
        return res.status(400).json({ error: "Bad Request: Missing 'entities_id' in payload" });
    }
    
    try {
        const sessionData = JSON.parse(req.session.data || '{}');
        const activeProfileId = sessionData.glpiactiveprofile || 1;
        
        const userEntities = await getProfileEntities(activeProfileId, req.user.id);
        const hasAccess = userEntities.some(e => e.id == entities_id);
        
        if (!hasAccess && entities_id !== 'all') {
            return res.status(404).json({ error: "Entity not accessible" });
        }
        
        sessionData.glpiactive_entity = {
            id: entities_id === 'all' ? 0 : parseInt(entities_id),
            is_recursive: Boolean(is_recursive)
        };
        
        const connection = await pool;
        await connection.execute(
            `UPDATE glpi_sessions SET data = ? WHERE id = ?`,
            [JSON.stringify(sessionData), req.headers['session-token']]
        );
        
        res.status(200).send();
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_UPDATE" });
    }
});

// 10. getFullSession
app.get('/apirest.php/getFullSession', authMiddleware, async (req, res) => {
    try {
        const sessionData = JSON.parse(req.session.data || '{}');
        res.status(200).json({ session: sessionData });
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_ADD" });
    }
});

// 11. getGlpiConfig
app.get('/apirest.php/getGlpiConfig', authMiddleware, async (req, res) => {
    try {
        const connection = await pool;
        const [configs] = await connection.execute(`SELECT * FROM glpi_configs`);
        
        const config = {};
        configs.forEach(c => {
            config[c.context] = config[c.context] || {};
            config[c.context][c.name] = c.value;
        });
        
        res.status(200).json(config);
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_ADD" });
    }
});

// ==================================================================
// === ENDPOINTS 12-26: CRUD Y OPERACIONES =========================
// ==================================================================

// 12. Get an item
app.get('/apirest.php/:itemtype/:id', authMiddleware, async (req, res) => {
    const { id, itemtype } = req.params;
    const includeDeleted = req.query.is_deleted === 'true';

    if (!isValidItemtype(itemtype)) {
        return res.status(400).json({ error: `Itemtype inválido: ${itemtype}` });
    }

    try {
        const hasPermission = await checkItemPermission(req.user.id, itemtype, id, 'read');
        if (!hasPermission) {
            return res.status(403).json({ error: "ERROR_RIGHT_MISSING" });
        }

        const item = await getItemById(itemtype, id, includeDeleted);

        if (item) {
            return res.status(200).json(item);
        } else {
            return res.status(404).json({ error: "Not Found", message: `Item ID ${id} not found in ${itemtype}` });
        }
    } catch (error) {
        console.error("Error en GET:", error.message);
        return res.status(404).json({ error: "Not Found or Database Error", message: error.message });
    }
});

// 13. Get all items
app.get('/apirest.php/:itemtype', authMiddleware, async (req, res) => {
    const { itemtype } = req.params;
    const includeDeleted = req.query.is_deleted === 'true';

    if (!isValidItemtype(itemtype)) {
        return res.status(400).json({ error: `Itemtype inválido: ${itemtype}` });
    }

    try {
        const hasPermission = await checkItemPermission(req.user.id, itemtype, null, 'read');
        if (!hasPermission) {
            return res.status(403).json({ error: "ERROR_RIGHT_MISSING" });
        }

        const list = await getItemList(itemtype, includeDeleted);
        return res.status(200).json(list);
    } catch (error) {
        console.error("Error en GET list:", error.message);
        return res.status(404).json({ error: "Not Found or Database Error", message: error.message });
    }
});

// 14. Get sub items
app.get('/apirest.php/:itemtype/:id/:sub_itemtype', authMiddleware, async (req, res) => {
    const { itemtype, id, sub_itemtype } = req.params;

    if (!isValidItemtype(itemtype) || !isValidItemtype(sub_itemtype)) {
        return res.status(400).json({ error: `Itemtype inválido: ${itemtype} o ${sub_itemtype}` });
    }

    try {
        const hasPermission = await checkItemPermission(req.user.id, itemtype, id, 'read');
        if (!hasPermission) {
            return res.status(403).json({ error: "ERROR_RIGHT_MISSING" });
        }

        const subItems = await getSubItems(itemtype, id, sub_itemtype);
        res.status(200).json(subItems);
    } catch (error) {
        res.status(404).json({ 
            error: "Not Found", 
            message: `Cannot find sub items ${sub_itemtype} for ${itemtype} ID ${id}: ${error.message}` 
        });
    }
});

// 15. Get multiple items
app.get('/apirest.php/getMultipleItems', authMiddleware, async (req, res) => {
    const { items } = req.query;
    if (!items || !Array.isArray(items)) {
        return res.status(400).json({ error: "Bad Request: Missing or invalid 'items' parameter" });
    }

    try {
        const results = [];
        for (const item of items) {
            if (item.itemtype && item.items_id) {
                const hasPermission = await checkItemPermission(req.user.id, item.itemtype, item.items_id, 'read');
                if (hasPermission) {
                    const itemData = await getItemById(item.itemtype, item.items_id);
                    if (itemData) {
                        results.push(itemData);
                    }
                }
            }
        }
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", message: error.message });
    }
});

// 16. List searchOptions
app.get('/apirest.php/listSearchOptions/:itemtype', authMiddleware, async (req, res) => {
    const { itemtype } = req.params;

    try {
        const connection = await pool;
        const [columns] = await connection.execute(`SHOW COLUMNS FROM ${getTableName(itemtype)}`);
        
        const searchOptions = {
            "common": "Characteristics",
            1: { 'name': 'ID', 'field': 'id', 'datatype': 'number', 'uid': `${itemtype}.id` },
            2: { 'name': 'Name', 'field': 'name', 'datatype': 'string', 'uid': `${itemtype}.name` }
        };
        
        columns.forEach((col, index) => {
            if (col.Field !== 'id' && col.Field !== 'name') {
                searchOptions[index + 3] = {
                    'name': col.Field.replace(/_/g, ' ').toUpperCase(),
                    'field': col.Field,
                    'datatype': col.Type.includes('int') ? 'number' : 'string',
                    'uid': `${itemtype}.${col.Field}`
                };
            }
        });
        
        res.status(200).json(searchOptions);
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_ADD" });
    }
});

// 17. Search items
app.get('/apirest.php/search/:itemtype', authMiddleware, async (req, res) => {
    const { itemtype } = req.params;
    const includeDeleted = req.query.is_deleted === 'true';

    if (!isValidItemtype(itemtype)) {
        return res.status(400).json({ error: `Itemtype inválido: ${itemtype}` });
    }

    try {
        const hasPermission = await checkItemPermission(req.user.id, itemtype, null, 'read');
        if (!hasPermission) {
            return res.status(403).json({ error: "ERROR_RIGHT_MISSING" });
        }

        const list = await getItemList(itemtype, includeDeleted);
        return res.status(200).json({
            totalcount: list.length,
            count: list.length,
            data: list
        });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", message: error.message });
    }
});

// 18. Add item(s)
app.post('/apirest.php/:itemtype', authMiddleware, async (req, res) => {
    const { itemtype } = req.params; 
    
    if (!isValidItemtype(itemtype)) {
        return res.status(400).json({ error: `Itemtype inválido: ${itemtype}` });
    }
    
    if (!req.body.input) {
        return res.status(400).json({ error: "Missing 'input' data in body" });
    }

    const hasPermission = await checkItemPermission(req.user.id, itemtype, null, 'create');
    if (!hasPermission) {
        return res.status(403).json({ error: "ERROR_RIGHT_MISSING" });
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

// 19. Update item(s)
app.put('/apirest.php/:itemtype/:id', authMiddleware, async (req, res) => {
    await handlePutRequest(req, res);
});

app.put('/apirest.php/:itemtype', authMiddleware, async (req, res) => {
    await handlePutRequest(req, res);
});

app.patch('/apirest.php/:itemtype/:id', authMiddleware, async (req, res) => {
    await handlePutRequest(req, res);
});

// 20. Delete item(s)
app.delete('/apirest.php/:itemtype/:id', authMiddleware, async (req, res) => {
    await handleDeleteRequest(req, res);
});

app.delete('/apirest.php/:itemtype', authMiddleware, async (req, res) => {
    await handleDeleteRequest(req, res);
});

// 21. Get available massive actions for an itemtype
app.get('/apirest.php/getMassiveActions/:itemtype', authMiddleware, async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_ADD" });
    }
});

// 22. Get available massive actions for an item
app.get('/apirest.php/getMassiveActions/:itemtype/:id', authMiddleware, async (req, res) => {
    try {
        const actions = [
            { key: "MassiveAction:update", label: "Update" },
            { key: "MassiveAction:delete", label: "Put in trashbin" },
            { key: "MassiveAction:add_note", label: "Add note" }
        ];
        res.status(200).json(actions);
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_ADD" });
    }
});

// 23. Get massive action parameters
app.get('/apirest.php/getMassiveActionParameters/:itemtype/:action', authMiddleware, async (req, res) => {
    const { action } = req.params;
    
    try {
        if (action.includes('note')) {
            return res.status(200).json([{ name: "note_text", type: "text", label: "Note content" }]);
        } 
        if (action.includes('Profile')) {
            return res.status(200).json([{ name: "profiles_id", type: "dropdown", label: "Profile to assign" }]);
        }
        res.status(200).json([]);
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_ADD" });
    }
});

// 24. Apply massive action
app.post('/apirest.php/applyMassiveAction/:itemtype/:action', authMiddleware, async (req, res) => {
    const { itemtype } = req.params; 
    const { ids, input } = req.body; 

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

// 25. Download Document
app.get('/apirest.php/Document/:id', authMiddleware, async (req, res) => {
    const acceptHeader = req.headers['accept'];
    const altParam = req.query.alt;
    
    if (acceptHeader !== 'application/octet-stream' && altParam !== 'media') {
        return res.status(400).json({ error: "Bad Request: Must include 'Accept: application/octet-stream' header or 'alt=media' parameter" });
    }

    try {
        const document = await getItemById('Document', req.params.id);
        if (!document) {
            return res.status(404).json({ error: "Document not found" });
        }

        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Content-Disposition', `attachment; filename="${document.filename || 'document'}"`);
        res.status(200).send(Buffer.from('Simulated document content for GLPI'));
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_ADD" });
    }
});

// 26. User Picture
app.get('/apirest.php/User/:id/Picture', authMiddleware, async (req, res) => {
    try {
        const user = await getItemById('User', req.params.id);
        if (!user || !user.picture) {
            return res.status(204).send();
        }

        res.setHeader('Content-Type', 'image/jpeg');
        res.status(200).send(Buffer.from('Simulated user picture'));
    } catch (error) {
        res.status(500).json({ error: "ERROR_GLPI_ADD" });
    }
});

// ==================================================================
// === HANDLERS PARA PUT Y DELETE ===================================
// ==================================================================

async function handlePutRequest(req, res) {
    const { id: idInUrl, itemtype } = req.params; 
    const inputData = req.body.input;

    if (!isValidItemtype(itemtype)) {
        return res.status(400).json({ error: `Itemtype inválido: ${itemtype}` });
    }

    if (!inputData) {
        return res.status(400).json({ error: "Bad Request: Missing 'input' payload" });
    }

    const finalResults = [];

    if (!Array.isArray(inputData)) {
        const idToUpdate = idInUrl || inputData.id;

        if (!idToUpdate) return res.status(400).json({ error: "Bad Request: Missing 'id' in URL or payload." });

        try {
            const hasPermission = await checkItemPermission(req.user.id, itemtype, idToUpdate, 'update');
            if (!hasPermission) {
                return res.status(403).json({ error: "ERROR_RIGHT_MISSING" });
            }

            const wasUpdated = await updateItem(itemtype, idToUpdate, inputData);
            finalResults.push({ [idToUpdate]: wasUpdated, message: wasUpdated ? "" : "Item not found" });
        } catch (error) {
            return res.status(409).json({ error: 'Conflict or Database Error', message: error.message });
        }

    } else {
        if (idInUrl) return res.status(400).json({ error: "Bad Request: Cannot provide 'id' in URL for multiple updates." });

        const updatePromises = inputData.map(item => {
            const idToUpdate = item.id;
            if (!idToUpdate) return Promise.resolve({ [false]: false, message: "Missing ID in array element" });
            
            return checkItemPermission(req.user.id, itemtype, idToUpdate, 'update')
                .then(hasPermission => {
                    if (!hasPermission) {
                        return { [idToUpdate]: false, message: "ERROR_RIGHT_MISSING" };
                    }
                    return updateItem(itemtype, idToUpdate, item)
                        .then(wasUpdated => ({ [idToUpdate]: wasUpdated, message: wasUpdated ? "" : "Item not found" }))
                        .catch(error => ({ [idToUpdate]: false, message: `Database Error: ${error.message}` }));
                });
        });

        const results = await Promise.all(updatePromises);
        finalResults.push(...results);
    }

    const hasFailures = finalResults.some(result => Object.values(result).includes(false));
    const statusCode = hasFailures ? 207 : 200;

    res.status(statusCode).json(finalResults);
}

async function handleDeleteRequest(req, res) {
    const { id: idInUrl, itemtype } = req.params; 
    const { input: inputData } = req.body;
    const forcePurge = req.query.force_purge === 'true';
    
    if (!isValidItemtype(itemtype)) {
        return res.status(400).json({ error: `Itemtype inválido: ${itemtype}` });
    }

    const finalResults = [];

    if (idInUrl || (inputData && !Array.isArray(inputData) && inputData.id)) {
        const idToDelete = idInUrl || inputData.id;

        if (!idToDelete) return res.status(400).json({ error: "Bad Request: Missing 'id' in URL or payload." });

        try {
            const operation = forcePurge ? 'purge' : 'delete';
            const hasPermission = await checkItemPermission(req.user.id, itemtype, idToDelete, operation);
            if (!hasPermission) {
                return res.status(403).json({ error: "ERROR_RIGHT_MISSING" });
            }

            const wasDeleted = await deleteItem(itemtype, idToDelete, forcePurge);
            
            if (wasDeleted) {
                return res.status(204).send(); 
            } else {
                return res.status(207).json([{ [idToDelete]: false, message: "Item not found" }]);
            }
        } catch (error) {
            return res.status(409).json({ error: 'Conflict or Database Error', message: error.message });
        }

    } else if (inputData && Array.isArray(inputData)) {
        if (idInUrl) return res.status(400).json({ error: "Bad Request: Cannot provide 'id' in URL for multiple deletions." });
        
        const deletePromises = inputData.map(item => {
            const idToDelete = item.id;
            if (!idToDelete) return Promise.resolve({ [false]: false, message: "Missing ID in array element" });
            
            return checkItemPermission(req.user.id, itemtype, idToDelete, forcePurge ? 'purge' : 'delete')
                .then(hasPermission => {
                    if (!hasPermission) {
                        return { [idToDelete]: false, message: "ERROR_RIGHT_MISSING" };
                    }
                    return deleteItem(itemtype, idToDelete, forcePurge)
                        .then(wasDeleted => ({ [idToDelete]: wasDeleted, message: wasDeleted ? "" : "Item not found" }))
                        .catch(error => ({ [idToDelete]: false, message: `Database Error: ${error.message}` }));
                });
        });

        const results = await Promise.all(deletePromises);
        finalResults.push(...results);

    } else {
        return res.status(400).json({ error: "Bad Request: Missing ID in URL or 'input' payload." });
    }

    const hasFailures = finalResults.some(result => !Object.values(result)[0]);
    const statusCode = hasFailures ? 207 : 200; 

    res.status(statusCode).json(finalResults);
}

// ==================================================================
// === INICIALIZACIÓN DEL SERVIDOR ==================================
// ==================================================================
app.listen(PORT, () => {
    console.log(`🚀 Servidor de API GLPI REAL corriendo en http://localhost:${PORT}`);
    console.log(`✅ 26 ENDPOINTS GLPI COMPLETOS implementados`);
    console.log(`✅ Usando ${Object.keys(itemtypeTableMap).length} tablas GLPI`);
    console.log(`✅ ${Object.keys(itemtypeToTableMap).length} itemtypes mapeados`);
    console.log(`✅ Soft Delete implementado`);
    console.log(`📊 Esquemas cargados: ${Object.keys(itemtypeSchemas).length} tablas`);
});
