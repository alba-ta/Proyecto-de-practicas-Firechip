ARQUITECTURA Y DISEÑO TÉCNICO DE LA CARPETA  𝙎𝙄𝙈𝙋𝙇𝙀-𝙂𝙇𝙋𝙄-𝘼𝙋𝙄:

𝑵𝒖́𝒄𝒍𝒆𝒐 𝒅𝒆𝒍 𝑺𝒆𝒓𝒗𝒊𝒅𝒐𝒓 (𝑱𝒂𝒗𝒂𝑺𝒄𝒓𝒊𝒑𝒕 𝒚 𝑵𝒐𝒅𝒆.𝒋𝒔):

El backend utiliza JavaScript sobre el entorno asíncrono de Node.js.

Express.js gestiona las rutas (endpoints), el middleware y el ciclo de vida de las peticiones, formando la estructura RESTful de la API.

𝑷𝒓𝒊𝒏𝒄𝒊𝒑𝒊𝒐𝒔 𝒅𝒆 𝑷𝑶𝑶 𝒚 𝑨𝒃𝒔𝒕𝒓𝒂𝒄𝒄𝒊𝒐́𝒏:

Implementamos un motor CRUD Genérico. Esto significa que las funciones de gestión de datos (Crear, Leer, Actualizar, Eliminar) se reutilizan para cualquier tabla de la base de datos (usuarios, activos, etc.) sin reescribir la lógica.

Esto se logra mediante archivos de mapeo que definen dinámicamente qué tabla y qué campos utilizar.

𝑭𝒍𝒖𝒋𝒐 𝒅𝒆 𝑺𝒆𝒈𝒖𝒓𝒊𝒅𝒂𝒅 𝑬𝒎𝒑𝒓𝒆𝒔𝒂𝒓𝒊𝒂𝒍 :

-La API requiere una estricta autenticación que replica la de GLPI: una llamada a /initSession es necesaria para obtener un session-token (temporal).

Todas las peticiones protegidas deben incluir este session-token junto con el app-token (permanente).

-Cadena de Procesamiento (Python):

Python se utiliza para tareas críticas de Validación y Diagnóstico de la API, asegurando que el backend funcione correctamente antes de ejecutar cualquier procesamiento de datos final.

𝐷𝐼𝑅𝐸𝐶𝑇𝑂𝑅𝐼𝑂 𝐷𝐸 𝐴𝑅𝐶𝐻𝐼𝑉𝑂𝑆 𝑌 𝐹𝑈𝑁𝐶𝐼𝑂𝑁𝐴𝐿𝐼𝐷𝐴𝐷:

Esta es la lista completa de archivos esenciales dentro de la carpeta simple-glpi-api/ y su función:

𝐴𝑟𝑐ℎ𝑖𝑣𝑜	𝐹𝑢𝑛𝑐𝑖𝑜́𝑛 𝑃𝑟𝑖𝑛𝑐𝑖𝑝𝑎𝑙:

𝘀𝗲𝗿𝘃𝗲𝗿.𝗷𝘀	--> El archivo principal que inicializa el servidor Express, carga las rutas y aplica el middleware.

𝗽𝗮𝗰𝗸𝗮𝗴𝗲.𝗷𝘀𝗼𝗻 -->	Manifiesto de Node.js que lista las dependencias del proyecto (express, mysql2) y los scripts de ejecución.

.𝗲𝗻𝘃 -->	Almacena las credenciales sensibles, como las de la base de datos MySQL y los tokens de GLPI (excluido de Git).

𝗶𝘁𝗲𝗺𝘁𝘆𝗽𝗲𝗦𝗰𝗵𝗲𝗺𝗮𝘀.𝗷𝘀 -->	Define las estructuras de datos (esquemas) y las reglas de validación para cada tipo de ítem gestionado por la API.

𝗶𝘁𝗲𝗺𝘁𝘆𝗽𝗲𝗠𝗮𝗽𝗽𝗶𝗻𝗴𝘀.𝗷𝘀 -->	Define las relaciones entre los campos de la API y las columnas exactas de la base de datos.

𝗶𝘁𝗲𝗺𝘁𝘆𝗽𝗲𝗧𝗮𝗯𝗹𝗲𝗠𝗮𝗽.𝗷𝘀 -->	Archivo central de mapeo que indica al motor CRUD Genérico qué tabla de MySQL utilizar para cada tipo de solicitud.

𝗽𝗮𝗿𝗶𝘁𝘆_𝗰𝗵𝗲𝗰𝗸.𝗽𝘆 -->	Script de Diagnóstico. Verifica si el token permanente es válido externamente contra un servidor GLPI real, aislando problemas de autenticación.

𝘁𝗲𝘀𝘁-𝘀𝗶𝗺𝗽𝗹𝗲.𝗽𝘆 -->	Validador Principal. Ejecuta una Matriz de Pruebas de Paridad Funcional contra la API local para certificar que el flujo de autenticación funciona correctamente.

𝗴𝗲𝗻𝗲𝗿𝗮𝗿_𝗺𝗮𝘁𝗿𝗶𝘇.𝗽𝘆	Lógica de Negocio Final. Contiene el script que analiza y genera el output de la matriz de datos, ejecutándose solo si test-simple.py fue exitoso.

𝗴𝗲𝗻𝗲𝗿𝗮𝘁𝗲_𝘀𝗰𝗵𝗲𝗺𝗮𝘀.𝗷𝘀 --> Script de mantenimiento utilizado para regenerar la estructura de datos o modelos que la API debe utilizar.

𝗽𝗮𝗰𝗸𝗮𝗴𝗲-𝗹𝗼𝗰𝗸.𝗷𝘀𝗼𝗻  --> Fija las versiones exactas de todas las dependencias instaladas, garantizando la reproducibilidad del entorno.


𝑷𝑼𝑬𝑺𝑻𝑨 𝑬𝑵 𝑭𝑼𝑵𝑪𝑰𝑶𝑵𝑨𝑴𝑰𝑬𝑵𝑻𝑶 (𝑮𝑼𝑰́𝑨 𝑫𝑬 𝑬𝑱𝑬𝑪𝑼𝑪𝑰𝑶́𝑵):

Esta guía detalla la secuencia lógica estricta para arrancar el servidor y ejecutar el stack de Python, utilizando al menos dos terminales separadas.

Requisitos Previos:

Necesitas tener instalados: Node.js (v18+), un servidor MySQL accesible con el esquema cargado, y Python 3 (con el módulo requests).

𝗣𝗔𝗦𝗢 𝟭: 𝗖𝗢𝗡𝗙𝗜𝗚𝗨𝗥𝗔𝗖𝗜𝗢́𝗡 𝗬 𝗔𝗥𝗥𝗔𝗡𝗤𝗨𝗘 𝗗𝗘 𝗟𝗔 𝗔𝗣𝗜 (𝗧𝗲𝗿𝗺𝗶𝗻𝗮𝗹 𝟭):

El servidor de la API debe estar activo y ejecutándose en esta terminal.

Instalar Dependencias:

𝙣𝙥𝙢 𝙞𝙣𝙨𝙩𝙖𝙡𝙡

Nos aseguramos de crear el archivo .env con tus credenciales.

𝗜𝗻𝗶𝗰𝗶𝗮𝗿 𝗲𝗹 𝗦𝗲𝗿𝘃𝗶𝗱𝗼𝗿 (𝗧𝗲𝗿𝗺𝗶𝗻𝗮𝗹 𝟭):

El servidor debe permanecer activo y escuchando en 𝐡𝐭𝐭𝐩://𝐥𝐨𝐜𝐚𝐥𝐡𝐨𝐬𝐭:𝟑𝟎𝟎𝟎.

𝗻𝗽𝗺 𝘀𝘁𝗮𝗿𝘁

𝙋𝘼𝙎𝙊 𝟮: 𝙀𝙅𝙀𝘾𝙐𝘾𝙄𝙊́𝙉 𝘿𝙀 𝙇𝘼 𝘾𝘼𝘿𝙀𝙉𝘼 𝘿𝙀 𝙑𝘼𝙇𝙊𝙍 (𝙏𝙚𝙧𝙢𝙞𝙣𝙖𝙡 𝟮):

Estos pasos se ejecutan en una Terminal 2 separada y en estricto orden lógico:

𝗣𝗔𝗦𝗢 𝟮: 𝗘𝗝𝗘𝗖𝗨𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗟𝗔 𝗖𝗔𝗗𝗘𝗡𝗔 𝗗𝗘 𝗩𝗔𝗟𝗢𝗥 (𝗧𝗲𝗿𝗺𝗶𝗻𝗮𝗹 𝟮):

Se ejecuta para descartar errores de credenciales externas.

𝒑𝒚𝒕𝒉𝒐𝒏 𝒑𝒂𝒓𝒊𝒕𝒚_𝒄𝒉𝒆𝒄𝒌.𝒑𝒚:

Certificación de Paridad (test-simple.py):

Punto Crítico. Valida el flujo de doble autenticación de tu API local. Debe ejecutarse con éxito para avanzar.

𝒑𝒚𝒕𝒉𝒐𝒏 𝒕𝒆𝒔𝒕-𝒔𝒊𝒎𝒑𝒍𝒆.𝒑𝒚:

𝑮𝒆𝒏𝒆𝒓𝒂𝒄𝒊𝒐́𝒏 𝒅𝒆 𝑴𝒂𝒕𝒓𝒊𝒛 (𝒈𝒆𝒏𝒆𝒓𝒂𝒓_𝒎𝒂𝒕𝒓𝒊𝒛.𝒑𝒚):

Este script ejecuta la lógica de negocio final, asumiendo que la validación fue exitosa.

𝒑𝒚𝒕𝒉𝒐𝒏 𝒈𝒆𝒏𝒆𝒓𝒂𝒓_𝒎𝒂𝒕𝒓𝒊𝒛.𝒑𝒚
