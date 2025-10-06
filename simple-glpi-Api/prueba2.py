import requests
import os
import json
from dotenv import load_dotenv

load_dotenv()

def iniciar_sesion():
    base_url = os.getenv('GLPI_BASE_URL')
    app_token = os.getenv('GLPI_APP_TOKEN')
    user_token = os.getenv('GLPI_USER_TOKEN')
    
    url = f"{base_url}/initSession"
    headers = {
        "App-Token": app_token,
        "Content-Type": "application/json",
        "Authorization": f"user_token {user_token}"
    }
    
    response = requests.post(url, headers=headers)
    print(f"🔐 Session Status: {response.status_code}")
    
    if response.status_code == 200:
        data = response.json()
        if "session_token" in data:
            print("✅ Session created")
            return data['session_token']
    print("❌ Session failed")
    return None

def get_my_profiles(session_token):
    base_url = os.getenv('GLPI_BASE_URL')
    app_token = os.getenv('GLPI_APP_TOKEN')
    
    url = f"{base_url}/getMyProfiles"
    headers = {
        "App-Token": app_token,
        "Session-Token": session_token,
        "Content-Type": "application/json"
    }
    
    response = requests.get(url, headers=headers)
    print(f"👤 Get My Profiles Status: {response.status_code}")
    
    if response.status_code == 200:
        print("✅ Profiles retrieved")
        print(json.dumps(response.json(), indent=2))
        return True
    print("❌ Get profiles failed")
    return False

def get_active_profile(session_token):
    base_url = os.getenv('GLPI_BASE_URL')
    app_token = os.getenv('GLPI_APP_TOKEN')
    
    url = f"{base_url}/getActiveProfile"
    headers = {
        "App-Token": app_token,
        "Session-Token": session_token,
        "Content-Type": "application/json"
    }
    
    response = requests.get(url, headers=headers)
    print(f"👤 Get Active Profile Status: {response.status_code}")
    
    if response.status_code == 200:
        print("✅ Active profile retrieved")
        print(json.dumps(response.json(), indent=2))
        return True
    print("❌ Get active profile failed")
    return False

def change_active_profile(session_token, profile_id):
    base_url = os.getenv('GLPI_BASE_URL')
    app_token = os.getenv('GLPI_APP_TOKEN')
    
    url = f"{base_url}/changeActiveProfile"
    headers = {
        "App-Token": app_token,
        "Session-Token": session_token,
        "Content-Type": "application/json"
    }
    
    data = {
        "profiles_id": profile_id
    }
    
    response = requests.post(url, headers=headers, json=data)
    print(f"🔄 Change Active Profile Status: {response.status_code}")
    
    if response.status_code == 200:
        print("✅ Profile changed")
        return True
    print("❌ Change profile failed")
    return False

def get_my_entities(session_token):
    base_url = os.getenv('GLPI_BASE_URL')
    app_token = os.getenv('GLPI_APP_TOKEN')
    
    url = f"{base_url}/getMyEntities"
    headers = {
        "App-Token": app_token,
        "Session-Token": session_token,
        "Content-Type": "application/json"
    }
    
    response = requests.get(url, headers=headers)
    print(f"🏢 Get My Entities Status: {response.status_code}")
    
    if response.status_code == 200:
        print("✅ Entities retrieved")
        print(json.dumps(response.json(), indent=2))
        return True
    print("❌ Get entities failed")
    return False

def add_item_ticket(session_token):
    base_url = os.getenv('GLPI_BASE_URL')
    app_token = os.getenv('GLPI_APP_TOKEN')
    
    url = f"{base_url}/Ticket"
    headers = {
        "App-Token": app_token,
        "Session-Token": session_token,
        "Content-Type": "application/json"
    }
    
    data = {
        "input": {
            "name": "Ticket desde Python",
            "content": "Ticket creado automáticamente",
            "type": 1,
            "itilcategories_id": 1
        }
    }
    
    response = requests.post(url, headers=headers, json=data)
    print(f"📝 Ticket Status: {response.status_code}")
    
    if response.status_code == 201:
        print("✅ Ticket created")
        return True
    print("❌ Ticket failed")
    return False

def lost_password():
    base_url = os.getenv('GLPI_BASE_URL')
    app_token = os.getenv('GLPI_APP_TOKEN')
    
    url = f"{base_url}/lostPassword"
    headers = {
        "App-Token": app_token,
        "Content-Type": "application/json"
    }
    
    data = {"email": "admin@example.com"}  # Cambia este email
    
    response = requests.put(url, headers=headers, json=data)
    print(f"🔑 Lost Password Status: {response.status_code}")
    
    if response.status_code == 200:
        print("✅ Password reset sent")
        return True
    print("❌ Password reset failed")
    return False

def kill_session(session_token):
    base_url = os.getenv('GLPI_BASE_URL')
    app_token = os.getenv('GLPI_APP_TOKEN')
    
    url = f"{base_url}/killSession"
    headers = {
        "App-Token": app_token,
        "Session-Token": session_token,
        "Content-Type": "application/json"
    }
    
    response = requests.get(url, headers=headers)
    print(f"🔓 Kill Session Status: {response.status_code}")
    
    if response.status_code == 200:
        print("✅ Session killed")
        return True
    print("❌ Session kill failed")
    return False

# Ejecutar todo
session_token = iniciar_sesion()
if session_token:
    get_my_profiles(session_token)
    get_active_profile(session_token)
    change_active_profile(session_token, 4)  # Cambia el ID del perfil según necesites
    get_my_entities(session_token)
    add_item_ticket(session_token)
    kill_session(session_token)
lost_password()
