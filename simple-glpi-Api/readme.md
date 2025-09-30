En esta carpeta , encontraras todo el codigo que he necesitado para este proyecto:

𝗙𝘂𝗻𝗰𝗶𝗼́𝗻 𝗱𝗲 𝗹𝗼𝘀 𝗔𝗿𝗰𝗵𝗶𝘃𝗼𝘀 𝗖𝗹𝗮𝘃𝗲
 
𝟷. 𝑠𝑒𝑟𝑣𝑒𝑟.𝑗𝑠

Este es el corazón de la API.

¿Qué hace? Utiliza JavaScript y el framework Express para montar el servidor backend. Su trabajo principal es definir y gestionar todos los endpoints (las rutas como /apirest.php/User o /apirest.php/Ticket). 
También contiene la lógica de la API,incluyendo las funciones CRUD genéricas de POO y el manejo de la autenticación por tokens.

𝟸. 𝑑𝑏𝑡𝑒𝑠𝑡.𝑗𝑠

Este es un script de verificación de entorno.

¿Qué hace? Se encarga de probar la conexión a tu base de datos MySQL. Su única función es confirmar, usando la librería mysql2, que el servidor puede comunicarse correctamente con la base de datos glpi (utilizando 
las credenciales del archivo .env).

𝟹. 𝑡𝑒𝑠𝑡_𝑎𝑝𝑖.𝑝𝑦
Este es el módulo de certificación de paridad (escrito en Python).

¿Qué hace? Automatiza el flujo de seguridad y funcionalidad para garantizar que nuestro proxy (el server.js) es idéntico a la API real de GLPI. El script realiza dos pruebas críticas:

Autenticación (/initSession): Intenta obtener un session-token.

Autorización (/User): Usa ese token y el app-token para acceder a una ruta protegida.

La superación de ambas pruebas con un código 200 OK certifica que nuestro backend cumple con los requisitos de seguridad.
