import mysql from 'mysql2';
import fs from 'fs';
import { itemtypeTableMap } from './itemtypeTableMap.js';

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'glpi',
  port: 3306
});

async function generateSchemas() {
  try {
    const schemas = {};
    for (const table of Object.values(itemtypeTableMap)) {
      const [columns] = await conn.promise().query(`SHOW COLUMNS FROM ${table}`);
      const allowed = columns.map(col => col.Field);
      // Camps requerits: pots ajustar aquesta lògica segons les teves necessitats
      const required = [];
      if (allowed.includes('entities_id')) required.push('entities_id');
      if (allowed.includes('name')) required.push('name');
      schemas[table] = {
        allowed,
        requiredOnCreate: required
      };
    }
    fs.writeFileSync('itemtypeSchemas.js',
      'export const itemtypeSchemas = ' + JSON.stringify(schemas, null, 2) + ';'
    );
    console.log('Esquemes generats per', Object.keys(schemas).length, 'taules.');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    conn.end();
  }
}

generateSchemas();
