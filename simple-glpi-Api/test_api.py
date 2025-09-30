import requests
import os

# --- CONFIGURACIÓN DE LA URL DE PRUEBA (El "Interruptor" de Entorno) ---
# 
# NOTA: Para hacer las Pruebas de Paridad, DEBES cambiar el valor 
# de BASE_URL entre tu API local y la API de GLPI real.
# 
# 1. PRUEBA LOCAL (Tu servidor Node.js/JavaScript):
BASE_URL = 'http://localhost:3000' 

# 2. PRUEBA DE PARIDAD (Servidor GLPI real en la nube):
# BASE_URL = 'https://firechip.in1.glpi-network.cloud' 
# --------------------------------------------------------------------

API_PATH = '/apirest.php'
SESSION_TOKEN = None # Variable global para almacenar el token capturado

# 🚨 CORRECCIÓN CLAVE: Tu server.js requiere el 'app-token' 🚨
# Usamos un valor fijo para simular la aplicación que llama a la API.
APP_TOKEN = 'your_simulated_app_token_12345' 
# -----------------------------------------------------------

def init_session():
    """
    TEST 1: Prueba el endpoint de autenticación.
    Captura el token de la respuesta JSON para usarlo en peticiones futuras.
    """
    global SESSION_TOKEN
    
    url = f"{BASE_URL}{API_PATH}/initSession"
    print(f"\n[TEST 1: AUTH] Intentando conectar a: {url}")
    
    is_secure = BASE_URL.startswith('https')
    
    try:
        response = requests.get(url, verify=is_secure)
    except requests.exceptions.ConnectionError:
        print(f"   ❌ FALLO FATAL. No se pudo conectar al servidor en {BASE_URL}. ¿Está encendido?")
        return False
        
    if response.status_code == 200:
        try:
            data = response.json()
            if 'session_token' in data:
                SESSION_TOKEN = data['session_token']
                print(f"   ✅ OK (200). Autenticación exitosa.")
                print(f"   🔑 Token capturado: {SESSION_TOKEN[:10]}...") 
                return True
            else:
                print("   ❌ FALLO. 200 OK, pero la respuesta no contenía 'session_token'.")
                return False
        except requests.exceptions.JSONDecodeError:
            print("   ❌ FALLO. 200 OK, pero la respuesta no es JSON válido.")
            return False
    else:
        print(f"   ❌ FALLO. Código de estado: {response.status_code}. Autenticación fallida.")
        return False

def get_users():
    """
    TEST 2: Prueba el endpoint GET /User usando el token capturado.
    """
    if not SESSION_TOKEN:
        print("\n[TEST 2] Omitido: No hay token de sesión. No se puede probar el endpoint.")
        return

    url = f"{BASE_URL}{API_PATH}/User"
    
    # *** CORRECCIÓN FINAL: Se envían AMBOS tokens en minúsculas ***
    headers = {
        'session-token': SESSION_TOKEN, 
        'app-token': APP_TOKEN          # <--- ¡ESTO FALTABA!
    } 
    # ------------------------------------------------------------
    
    print(f"\n[TEST 2: GET /User] Probando listado de Usuarios: {url}")
    
    is_secure = BASE_URL.startswith('https')

    try:
        response = requests.get(url, headers=headers, verify=is_secure)
    except requests.exceptions.ConnectionError:
        print(f"   ❌ FALLO FATAL. No se pudo conectar al servidor en {BASE_URL}.")
        return

    # Esta es la verificación de Paridad: esperamos 200 OK
    if response.status_code == 200:
        try:
            user_count = len(response.json())
            print(f"   ✅ OK (200). Prueba de Paridad exitosa.")
            print(f"   📄 Datos recibidos: Se cargaron {user_count} usuarios (o lista vacía).")
        except:
             print(f"   ✅ OK (200). Código de estado correcto, pero la respuesta no es una lista JSON.")
    else:
        # Si el 401 persiste, es un problema de caché o de que el servidor no procesa bien el token.
        print(f"   ❌ FALLO. Código de estado incorrecto. Se esperaba 200, se obtuvo: {response.status_code}")
        

if __name__ == '__main__':
    print("\n--- INICIANDO PRUEBAS DE PARIDAD AUTOMATIZADAS CON PYTHON ---")
    
    # Esta es la secuencia de pruebas que se ejecuta.
    if init_session():
        get_users()
    
    print("\n--- SECUENCIA DE PRUEBAS FINALIZADA ---")
