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
    
    console.log('🔍 Generando esquemas para tablas GLPI...');
    
    for (const table of Object.keys(itemtypeTableMap)) {
      try {
        const [columns] = await conn.promise().query(`SHOW COLUMNS FROM ${table}`);
        const allowed = columns.map(col => col.Field);
        
        // Campos requeridos basados en la estructura GLPI
        const required = [];
        if (allowed.includes('entities_id')) required.push('entities_id');
        if (allowed.includes('name') && !table.includes('_items')) required.push('name');
        if (allowed.includes('content')) required.push('content');
        
        schemas[table] = {
          allowed,
          requiredOnCreate: required,
          hasSoftDelete: allowed.includes('is_deleted')
        };
        
        console.log(`✅ ${table} - ${columns.length} columnas`);
      } catch (error) {
        console.warn(`No se pudo acceder a la tabla: ${table}`, error.message);
      }
    }
    
    // Guardar el archivo
    fs.writeFileSync('itemtypeSchemas.js',
      '// ESQUEMAS GENERADOS AUTOMÁTICAMENTE PARA GLPI\n' +
      '// Ejecutar: node generate_schemas.js\n\n' +
      'export const itemtypeSchemas = ' + JSON.stringify(schemas, null, 2) + ';\n'
    );
    
    console.log(`\ Esquemas generados para ${Object.keys(schemas).length} tablas GLPI`);
    console.log(' Archivo guardado: itemtypeSchemas.js');
    
  } catch (err) {
    console.error(' Error generando esquemas:', err);
  } finally {
    conn.end();
  }
}

generateSchemas();
