import mysql from 'mysql2';
import fs from 'fs';

// Conexión a la base de datos GLPI
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'glpi',
  port: 3306
});

async function generateMap() {
  try {
    // Consulta todas las tablas que empiezan por glpi_
    const [rows] = await conn.promise().query(
      "SHOW TABLES LIKE 'glpi_%';"
    );
    // El nombre de la columna depende del motor, así que lo extraemos dinámicamente
    const tableCol = Object.keys(rows[0])[0];
    const tablas = rows.map(row => row[tableCol]);

    // Genera el mapeo: itemtype = nombre completo de la tabla
    const map = {};
    for (const tabla of tablas) {
      map[tabla] = tabla;
    }

    // Guarda el mapeo en itemtypeTableMap.js
    fs.writeFileSync('itemtypeTableMap.js',
      'export const itemtypeTableMap = ' + JSON.stringify(map, null, 2) + ';'
    );

    console.log('Mapeo generado con', Object.keys(map).length, 'itemtypes.');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    conn.end();
  }
}

generateMap();
