ℙℝ𝔸́ℂ𝕋𝕀ℂ𝔸𝕊 𝔻𝔼𝕃 ℂ𝕌ℝ𝕊𝕆 𝕆ℂ𝕌ℙ𝔸ℂ𝕀𝕆ℕ𝔸𝕃 𝔻𝔼 ℙℝ𝕆𝔾ℝ𝔸𝕄𝔸ℂ𝕀𝕆́ℕ 𝕆ℝ𝕀𝔼ℕ𝕋𝔸𝔻𝔸 𝔸 𝕆𝔹𝕁𝔼𝕋𝕆𝕊 𝕐 𝔹𝔸𝕊𝔼𝕊 𝔻𝔼 𝔻𝔸𝕋𝕆𝕊 ℝ𝔼𝕃𝔸ℂ𝕀𝕆ℕ𝔸𝕃𝔼𝕊
𝐄𝐍 𝐋𝐀 𝐄𝐌𝐏𝐑𝐄𝐒𝐀: 𝐅𝐈𝐑𝐄𝐂𝐇𝐈𝐏

Este repositorio contiene la carpeta principal del proyecto (simple-glpi-api), donde se aloja todo el código (JavaScript y Python), la configuración y la documentación de la API.

Este proyecto es el Trabajo Práctico finalizado durante mis prácticas profesionales en FIRECHIP. Es el requisito para la obtención del título del Curso Ocupacional de Programación Orientada a Objetos (POO) y Bases de Datos Relacionales.

𝐎𝐁𝐉𝐄𝐓𝐈𝐕𝐎 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋:
El objetivo principal fue demostrar la aplicación práctica de habilidades en desarrollo backend. Construí una API funcional y escalable usando JavaScript y el entorno Node.js, tomando como referencia el modelo de integración y la seguridad de la API de GLPI.

𝐃𝐄𝐒𝐀𝐑𝐑𝐎𝐋𝐋𝐎 𝐃𝐄𝐋 𝐏𝐑𝐎𝐘𝐄𝐂𝐓𝐎: 𝐅𝐨𝐜𝐨 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥 --> 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭, 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬 𝐲 𝐏𝐎𝐎
A continuación explicaré lo que he estado desarrollando durante el proyecto:

𝟷. PROGRAMACIÓN CON JAVASCRIPT Y POO
𝘓𝘰́𝘨𝘪𝘤𝘢 𝘦𝘯 𝘑𝘢𝘷𝘢𝘚𝘤𝘳𝘪𝘱𝘵: Todo el backend y la lógica de la API están escritos completamente en JavaScript, demostrando solidez en el lenguaje.

𝐹𝑢𝑛𝑐𝑖𝑜𝑛𝑒𝑠 𝐶𝑅𝑈𝐷 𝐺𝑒𝑛𝑒́𝑟𝑖𝑐𝑎𝑠: Apliqué la Programación Orientada a Objetos (POO) para crear funciones CRUD genéricas. Esto significa que el mismo código JavaScript se reutiliza para gestionar cualquier tipo de entidad (Tickets, Usuarios, etc.), un principio clave de abstracción y modularidad.

2. DESARROLLO DE ENDPOINTS CON NODE.JS Y EXPRESS
𝘚𝘵𝘢𝘤𝘬 𝘛𝘦𝘤𝘯𝘰𝘭𝘰́𝘨𝘪𝘤𝘰: Usé Node.js como entorno de ejecución y Express como framework esencial para crear y manejar las rutas HTTP de la API.

𝘊𝘳𝘦𝘢𝘤𝘪𝘰́𝘯 𝘥𝘦 𝘌𝘯𝘥𝘱𝘰𝘪𝘯𝘵𝘴: El trabajo se centró en definir y programar los endpoints necesarios para la gestión de datos (GET, POST, PUT, DELETE).

𝐹𝑙𝑢𝑗𝑜 𝑑𝑒 𝑆𝑒𝑔𝑢𝑟𝑖𝑑𝑎𝑑 (𝐴𝑢𝑡𝑒𝑛𝑡𝑖𝑐𝑎𝑐𝑖𝑜́𝑛 𝐸𝑚𝑝𝑟𝑒𝑠𝑎𝑟𝑖𝑎𝑙): La API maneja la seguridad con la Autenticación Basada en Tokens, exigiendo los headers session-token y app-token en todas las peticiones protegidas. Esto simula el estricto flujo de seguridad de GLPI, devolviendo los códigos de estado HTTP correctos (como 401 Unauthorized) ante cualquier fallo de credenciales.

3. CONEXIÓN DE BASE DE DATOS
Persistencia de Datos: La aplicación se conecta y gestiona datos persistentes utilizando MySQL. El enfoque estuvo en asegurar una correcta integración entre la lógica de la API (JavaScript/Express) y el servidor de la base de datos.

𝗘𝗦𝗧𝗥𝗨𝗖𝗧𝗨𝗥𝗔 𝗦𝗜𝗠𝗣𝗟𝗘 𝗗𝗘𝗟 𝗣𝗥𝗢𝗬𝗘𝗖𝗧𝗢
Los archivos principales están dentro de la carpeta del proyecto, que fue desarrollado en el entorno de Visual Studio Code.

server.js: Es el archivo central. Aquí está toda la lógica en JavaScript, definiendo las rutas (endpoints) y la coordinación de la API.

.env: Archivo de configuración que contiene las credenciales de MySQL. (No se sube a Git por seguridad.)

package.json: Indica las librerías necesarias (express, mysql2) y los comandos para iniciar el servidor.

test_api.py: Script de validación en Python. Se usa para verificar que nuestra API funciona correctamente.

Documentación de la API: La documentación de todos los endpoints creados se adjunta por separado en el proyecto.

𝐏𝐑𝐔𝐄𝐁𝐀𝐒 𝐘 𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎́𝐍 𝐂𝐎𝐍 𝐏𝐘𝐓𝐇𝐎𝐍
El script test_api.py (Python) es la herramienta de validación final para la Certificación de Paridad Funcional. Su objetivo es automatizar las pruebas y garantizar que nuestra simulación se comporta como la API real de GLPI.

Interruptor de Entorno:

El código utiliza una variable central (BASE_URL) que permite alternar la ejecución de las pruebas. Con solo cambiar una línea, el script puede probar nuestro proxy local (localhost:3000) o el servidor GLPI en la nube, garantizando que el mismo código funciona en ambos entornos.

Flujo de Pruebas de Seguridad:

El script realiza dos pruebas críticas que deben devolver 200 OK:

Test de Autenticación (/initSession): Verifica que se obtiene el session-token.

Test de Autorización (/User): Prueba que ese token, junto con el app-token, permiten el acceso a los datos, certificando que el flujo de seguridad ha sido implementado correctamente.

𝐂𝐎𝐌𝐎 𝐒𝐄 𝐏𝐎𝐍𝐄 𝐄𝐍 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐀𝐌𝐈𝐄𝐍𝐓𝐎:
𝐑𝐞𝐪𝐮𝐢𝐬𝐢𝐭𝐨𝐬:
Node.js (versión 18 o superior)

Un servidor MySQL o MariaDB

𝐏𝐚𝐬𝐨𝐬
Instalar: Abre la terminal en el directorio del proyecto y ejecuta: npm install

Configurar: Crea tu archivo .env con las credenciales de tu base de datos.

Encender: Inicia el servidor con: npm run dev

𝐏𝐑𝐔𝐄𝐁𝐀𝐒 𝐃𝐄 𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎́𝐍 𝐂𝐎𝐍 𝐏𝐎𝐒𝐓𝐌𝐀𝐍:
La funcionalidad completa de los endpoints se verifica utilizando Postman para enviar peticiones HTTP (GET, POST, etc.) y confirmar los códigos de estado esperados (200 OK, 201 Created).
