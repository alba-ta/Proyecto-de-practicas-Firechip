The API documentation is what I used as a reference to create the endpoints and write the JavaScript code:
GLPI REST API: Documentation
Glossary
Endpoint : Resource available though the API. The endpoint is the URL where your API can be accessed by a client application

Method : HTTP verbs to indicate the desired action to be performed on the identified resource. See: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods

itemtype : A GLPI type, could be an asset, an ITIL or a configuration object, etc. This type must be a class who inherits CommonDTBM GLPI class.

searchOption : A column identifier (integer) of an itemtype (ex: 1 -> id, 2 -> name, ...). See List searchOptions endpoint.

JSON Payload : content of HTTP Request in JSON format (HTTP body)

Query string : URL parameters

User token : Used in login process instead of login/password couple. It represent the user with a string. You can find user token in the settings tabs of users.

Session token : A string describing a valid session in glpi. Except initSession endpoint who provide this token, all others require this string to be used.

App(lication) token : An optional way to filter the access to the API. On API call, it will try to find an API client matching your IP and the app token (if provided). You can define an API client with an app token in general configuration for each of your external applications to identify them (each API client have its own history).

Important
You should always provide a Content-Type header in your HTTP calls. Currently, the API supports:

application/json
multipart/form-data (for files upload, see Add item(s) endpoint.
GET requests must have an empty body. You must pass all parameters in URL. Failing to do so will trigger an HTTP 400 response.

By default, sessions used in this API are read-only. Only some methods have write access to session:

initSession
killSession
changeActiveEntities
changeActiveProfile
You could pass an additional parameter "session_write=true" to bypass this default. This read-only mode allow to use this API with parallel calls. In write mode, sessions are locked and your client must wait the end of a call before the next one can execute.

You can filter API access by enable the following parameters in GLPI General Configuration (API tab):

IPv4 range
IPv6 address
App-Token parameter: if not empty, you should pass this parameter in all of your API calls
Session and App tokens could be provided in query string instead of header parameters.
