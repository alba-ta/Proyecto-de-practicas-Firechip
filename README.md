                                                            ℙℝ𝔸ℂ𝕋𝕀ℂ𝔸𝕊 𝔻𝔼𝕃 ℂ𝕌ℝ𝕊𝕆 𝕆ℂ𝕌ℙ𝔸ℂ𝕀𝕆ℕ𝔸𝕃 𝔻𝔼 ℙℝ𝕆GR𝔸𝕄𝔸ℂ𝕀𝕆́ℕ 𝕆ℝ𝕀𝔼ℕ𝕋𝔸𝔻𝔸 𝔸 𝕆𝔹𝕁𝔼𝕋𝕆𝕊 𝕐 𝔹𝔸𝕊𝔼𝕊 𝔻𝔼 𝔻𝔸𝕋𝕆𝕊 ℝ𝔼𝕃𝔸ℂ𝕀𝕆ℕ𝔸𝕃𝔼𝕊
                                                                    
                                                                                            𝐄𝐍 𝐋𝐀 𝐄𝐌𝐏𝐑𝐄𝐒𝐀 : 𝐅𝐈𝐑𝐄𝐂𝐇𝐈𝐏

Este proyecto es el Trabajo Práctico finalizado durante mis prácticas profesionales en Fire&Chip. Es el requisito para la obtención del título del Curso Ocupacional de Programación Orientada a Objetos (POO) y Bases de Datos Relacionales.


𝐎𝐁𝐉𝐄𝐓𝐈𝐕𝐎 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋:

El objetivo principal fue demostrar la aplicación práctica de habilidades en desarrollo backend. Construí una API funcional y escalable usando JavaScript y el entorno Node.js, tomando como referencia el modelo de integración de la API de GLPI

𝐃𝐄𝐒𝐀𝐑𝐑𝐎𝐋𝐋𝐎 𝐃𝐄𝐋 𝐏𝐑𝐎𝐘𝐄𝐂𝐓𝐎: 𝐅𝐨𝐜𝐨 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥 --> 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭, 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬 𝐲 𝐏𝐎𝐎

A continuación explicaré lo qy¡ue he estado desarrollando durante el proyecto:

𝟷. PRORAMACIÓN CON JAVA SCRIPT:

𝘓𝘰́𝘨𝘪𝘤𝘢 𝘦𝘯 𝘑𝘢𝘷𝘢𝘚𝘤𝘳𝘪𝘱𝘵: Todo el backend y la lógica de la API están escritos completamente en JavaScript, demostrando solidez en el lenguaje.

Funciones CRUD Genéricas: Apliqué la POO para crear funciones CRUD genéricas. Esto significa que el mismo código JavaScript se reutiliza para gestionar cualquier tipo de entidad (Tickets, Usuarios, etc.), un principio clave de abstracción y modularidad.

2.DESARROLLO DE ENDPOINTS CON NODE.JS Y EXPRESS

𝘚𝘵𝘢𝘤𝘬 𝘛𝘦𝘤𝘯𝘰𝘭𝘰́𝘨𝘪𝘤𝘰: Usé Node.js como entorno de ejecución y Express como framework esencial para crear y manejar las rutas HTTP de la API.

𝘊𝘳𝘦𝘢𝘤𝘪𝘰́𝘯 𝘥𝘦 𝘌𝘯𝘥𝘱𝘰𝘪𝘯𝘵𝘴: El trabajo se centró en definir y programar los endpoints necesarios para la gestión de datos (GET, POST, PUT, DELETE).

𝘈𝘶𝘵𝘦𝘯𝘵𝘪𝘤𝘢𝘤𝘪𝘰́𝘯 𝘌𝘮𝘱𝘳𝘦𝘴𝘢𝘳𝘪𝘢𝘭: La API maneja la seguridad con tokens de sesión (Session-Tokens) y devuelve los códigos de estado HTTP correctos para simular un entorno de producción.

3. CONEXIÓN DE BASE DEDATOS :
   
Persistencia de Datos: La aplicación se conecta y gestiona datos persistentes utilizando MySQL. El enfoque estuvo en asegurar una correcta integración entre la lógica de la API (JavaScript/Express) y el servidor de la base de datos.

𝗘𝗦𝗧𝗥𝗨𝗖𝗧𝗨𝗥𝗔 𝗦𝗜𝗠𝗣𝗟𝗘 𝗗𝗘𝗟 𝗣𝗥𝗢𝗬𝗘𝗖𝗧𝗢

Los archivos principales están en la carpeta simple-glpi-api:

server.js: Es el archivo central. Aquí está toda la lógica en JavaScript, definiendo las rutas (los endpoints) y la coordinación de la API.

.env: Archivo de configuración que contiene las credenciales de MySQL. (No se sube a Git por seguridad.)

package.json: Indica las librerías necesarias (express, mysql2) y los comandos para iniciar el servidor.

𝗖𝗢𝗠𝗢 𝗦𝗘 𝗣𝗢𝗡𝗘 𝗘𝗡 𝗙𝗨𝗡𝗖𝗜𝗢𝗡𝗔𝗠𝗜𝗘𝗡𝗧𝗢:

𝐑𝐞𝐪𝐮𝐢𝐬𝐢𝐭𝐨𝐬:

Node.js (versión 18 o superior)

Un servidor MySQL o MariaDB

𝐏𝐚𝐬𝐨𝐬

Instalar: Abre la terminal en el directorio del proyecto y ejecuta: npm install

Configurar: Crea tu archivo .env con las credenciales de tu base de datos.

Encender: Inicia el servidor con: npm start

𝗣𝗥𝗨𝗘𝗕𝗔𝗦 𝗗𝗘 𝗩𝗘𝗥𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 𝗖𝗢𝗡 𝗣𝗢𝗦𝗧𝗠𝗔𝗡 :

La funcionalidad completa de los endpoints se verifica utilizando Postman.

Herramienta de Prueba: Usamos Postman para enviar peticiones HTTP (GET, POST, etc.) a la API.

Verificación: Esto permite confirmar que la lógica de la API y la conexión a la base de datos funcionan correctamente, recibiendo los códigos de estado HTTP esperados (200 OK, 201 Created).



