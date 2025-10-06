
ℙℝ𝔸́ℂ𝕋𝕀ℂ𝔸𝕊 𝔻𝔼𝕃 ℂ𝕌ℝ𝕊𝕆 𝕆ℂ𝕌ℙ𝔸ℂ𝕀𝕆ℕ𝔸𝕃 𝔻𝔼 ℙℝ𝕆𝔾ℝ𝔸𝕄𝔸ℂ𝕀𝕆́ℕ 𝕆ℝ𝕀𝔼ℕ𝕋𝔸𝔻𝔸 𝔸 𝕆𝔹𝕁𝔼𝕋𝕆𝕊 𝕐 𝔹𝔸𝕊𝔼𝕊 𝔻𝔼 𝔻𝔸𝕋𝕆𝕊 ℝ𝔼𝕃𝔸ℂ𝕀𝕆ℕ𝔸𝕃𝔼𝕊

Este repositorio fue creado como parte de la culminación de mis Prácticas Profesionales en FIRECHIP. Contiene el código fuente y la documentación desarrollados durante mi formación.

𝙴𝚂𝚃𝚁𝚄𝙲𝚃𝚄𝚁𝙰 𝙳𝙴𝙻 𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝚈 𝙲𝙾𝙼𝙿𝙾𝙽𝙴𝙽𝚃𝙴𝚂:

El repositorio está organizado en las siguientes carpetas funcionales:

𝓼𝓲𝓶𝓹𝓵𝓮-𝓰𝓵𝓹𝓲-𝓪𝓹𝓲/:

Contenido: El código fuente completo de la API REST (JavaScript/Node.js), el backend modular basado en POO y los scripts de validación en Python .

𝓭𝓸𝓬𝓾𝓶𝓮𝓷𝓽𝓪𝓬𝓲𝓸́𝓷 𝓭𝓮 𝓵𝓪 𝓐𝓹𝓲/:

Contenido: Archivos como Endpoints y documentación específica sobre cómo interactuar con la API.

𝓫𝓪𝓼𝓮 𝓭𝓮 𝓭𝓪𝓽𝓸𝓼/:

Contenido: Contiene el esquema SQL (glpi-10.0.20-empty.sql) de la base de datos necesaria para que la API funcione.

𝙿𝚁𝙾𝚈𝙴𝙲𝚃𝙾 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻: 𝚜𝚒𝚖𝚙𝚕𝚎-𝚐𝚕𝚙𝚒-𝚊𝚙𝚒::

El proyecto simple-glpi-api consiste en la construcción de una API REST robusta. Su objetivo es replicar la estricta arquitectura de seguridad (doble token) y la lógica de negocio del software empresarial GLPI.

𝖳𝖾𝖼𝗇𝗈𝗅𝗈𝗀𝗂́𝖺𝗌 𝖢𝗅𝖺𝗏𝖾: 𝖩𝖺𝗏𝖺𝖲𝖼𝗋𝗂𝗉𝗍 (𝖭𝗈𝖽𝖾.𝗃𝗌/𝖤𝗑𝗉𝗋𝖾𝗌𝗌) 𝗒 𝖯𝗒𝗍𝗁𝗈𝗇.

𝙈𝙖𝙧𝙠𝙙𝙤𝙬𝙣 𝙙𝙚 𝙢𝙞 𝙢𝙖𝙩𝙧𝙞𝙯 𝙙𝙚 𝙥𝙖𝙧𝙞𝙙𝙖𝙙:

| Endpoint              | GLPI | Localhost |
|-----------------------|------|-----------|
| initSession           | ✔    | ✘         |
| addItem               | ✔    | ✔         |
| killSession           | ✔    | ✔         |
| lostPassword          | ✔    | ✔         |
| getMyProfiles         | ✔    | ✔         |
| getActiveProfile      | ✔    | ✔         |
| changeActiveProfile   | ✔    | ✔         |
| getMyEntities         | ✔    | ✔         |
| getActiveEntities     | ✔    | ✔         |
| changeActiveEntities  | ✔    | ✔         |
| getFullSession        | ✔    | ✔         |
| getGlpiConfig         | ✔    | ✔         |

𝙶𝚄𝙸́𝙰 𝙳𝙴 𝙰𝙲𝙲𝙴𝚂𝙾 𝙰 𝙻𝙰 𝙳𝙾𝙲𝚄𝙼𝙴𝙽𝚃𝙰𝙲𝙸𝙾́𝙽:

La explicación completa de la Arquitectura, el listado exhaustivo de archivos y la guía paso a paso para la puesta en funcionamiento de la API se encuentran en la documentación dentro de la carpeta del proyecto:

𝙨𝙞𝙢𝙥𝙡𝙚-𝙜𝙡𝙥𝙞-𝙖𝙥𝙞/𝙍𝙀𝘼𝘿𝙈𝙀.𝙢𝙙
