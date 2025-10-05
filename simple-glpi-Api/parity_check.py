# parity_check.py - GLPI Cloud con App-Token y User-Token
import requests
import os
from dotenv import load_dotenv
import urllib3

# Cargar variables del archivo .env
load_dotenv()
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

def test_glpi_cloud():
    print("🎯 TESTEANDO GLPI CLOUD - NUEVO TOKEN")
    print("=" * 50)
    
    # CONFIGURACIÓN DESDE .env
    config = {
        'glpi': {
            'base_url': os.getenv('GLPI_BASE_URL'),
            'GLPI_APP_TOKEN': os.getenv('GLPI_APP_TOKEN'),
            'GLPI_USER_TOKEN': os.getenv('GLPI_USER_TOKEN')
        }
    }
    
    print(f"📡 URL: {config['glpi']['base_url']}")
    print(f"🔑 App Token: {config['glpi']['GLPI_APP_TOKEN'][:15]}...")
    print(f"👤 User Token: {config['glpi']['GLPI_USER_TOKEN'][:15]}...")
    print()
    
    # 1. Conectar a GLPI Cloud
    print("1. 🔐 Conectando a GLPI Cloud...")
    try:
        headers = {
            'App-Token': config['glpi']['GLPI_APP_TOKEN'],
            'Authorization': f"user_token {config['glpi']['GLPI_USER_TOKEN']}",
            'Content-Type': 'application/json'
        }
        
        response = requests.get(
            f"{config['glpi']['base_url']}/initSession",
            headers=headers,
            timeout=15,
            verify=False
        )
        
        print(f"   📊 Status: {response.status_code}")
        
        if response.status_code == 200:
            session_data = response.json()
            session_token = session_data['session_token']
            print(f"   ✅ Conexión exitosa!")
            print(f"   🔑 Session Token: {session_token[:25]}...")
            
            # Probar endpoints de GLPI Cloud
            test_glpi_endpoints(config['glpi']['base_url'], session_token, config['glpi']['GLPI_APP_TOKEN'])
            
            # Cerrar sesión
            kill_session(config['glpi']['base_url'], session_token, config['glpi']['GLPI_APP_TOKEN'])
            
        elif response.status_code == 401:
            print(f"   ❌ Error 401: No autorizado - Verifica los tokens")
        else:
            print(f"   ❌ Error: {response.text}")
            
    except Exception as e:
        print(f"   ❌ Error de conexión: {e}")

def test_glpi_endpoints(base_url, session_token, app_token):
    print("\n2. 🔍 Probando endpoints GLPI Cloud...")
    print("-" * 40)
    
    headers = {
        'Session-Token': session_token,
        'App-Token': app_token,
        'Content-Type': 'application/json'
    }
    
    endpoints = [
        '/getFullSession',
        '/getActiveProfile',
        '/getMyProfiles', 
        '/User',
        '/Computer',
        '/getGlpiConfig'
    ]
    
    for endpoint in endpoints:
        try:
            response = requests.get(
                f"{base_url}{endpoint}",
                headers=headers,
                timeout=10,
                verify=False
            )
            
            if response.status_code == 200:
                print(f"   ✅ {endpoint}: {response.status_code}")
                
                try:
                    data = response.json()
                    if endpoint == '/getFullSession':
                        session_info = data.get('session', {})
                        print(f"     👤 Usuario: {session_info.get('glpiname', 'N/A')}")
                    elif endpoint == '/getActiveProfile':
                        print(f"     🏷️  Perfil: {data.get('name', 'N/A')}")
                    elif endpoint == '/getMyProfiles' and isinstance(data, list):
                        print(f"     📊 Perfiles disponibles: {len(data)}")
                except:
                    print(f"     📦 Respuesta recibida")
                    
            elif response.status_code == 401:
                print(f"   🔐 {endpoint}: 401 - No autorizado")
            else:
                print(f"   ⚠️  {endpoint}: {response.status_code} {response.text}")
                
        except Exception as e:
            print(f"   ❌ {endpoint}: Error - {e}")

def kill_session(base_url, session_token, app_token):
    """Cerrar sesión en GLPI"""
    print("\n3. 🔚 Cerrando sesión...")
    try:
        headers = {
            'Session-Token': session_token,
            'App-Token': app_token,
            'Content-Type': 'application/json'
        }
        
        response = requests.get(
            f"{base_url}/killSession",
            headers=headers,
            timeout=10,
            verify=False
        )
        
        if response.status_code == 200:
            print("   ✅ Sesión cerrada correctamente")
        else:
            print(f"   ⚠️  No se pudo cerrar sesión: {response.status_code}")
            
    except Exception as e:
        print(f"   ❌ Error cerrando sesión: {e}")

if __name__ == "__main__":
    test_glpi_cloud()
