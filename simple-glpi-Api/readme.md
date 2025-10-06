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

PASO 1 INSTALACIÓN DE DEPENDENCIAS :

El servidor de la API debe estar activo y ejecutándose en esta terminal.

𝙣𝙥𝙢 𝙞𝙣𝙨𝙩𝙖𝙡𝙡

PASO 2-Levantamos el servidor:

Ejecutamos npm start para levantar el servidor 

PASO 3- en diferente terminal ejecutamos :

𝙩𝙚𝙨𝙩_𝙖𝙥𝙞.𝙥𝙮

PASO 4-Ejecutamos :

𝒑𝒚𝒕𝒉𝒐𝒏 𝒑𝒂𝒓𝒊𝒕𝒚_𝒄𝒉𝒆𝒄𝒌.𝒑𝒚

Sin la ejecución del comando anterior no nos dejara hacer el siguiente comando:

𝙜𝙚𝙣𝙚𝙧𝙖𝙧_𝙢𝙖𝙩𝙧𝙞𝙯.𝙥𝙮 --> obtenemos la matriz de paridad
