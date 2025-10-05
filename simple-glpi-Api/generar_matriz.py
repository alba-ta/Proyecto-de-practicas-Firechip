# generar_matriz.py - SOLO genera matriz desde resultados
import json
from datetime import datetime

def generar_matriz():
    print("📊 GENERANDO MATRIZ DE PARIDAD")
    print("=" * 50)
    
    try:
        with open('resultados_parity.json', 'r', encoding='utf-8') as f:
            resultados = json.load(f)
    except:
        print("❌ Ejecuta primero: python parity_check.py")
        return
    
    compatibles = sum(1 for r in resultados if "✅" in r['estado'])
    total = len(resultados)
    porcentaje = (compatibles / total) * 100
    
    # CREAR MATRIZ
    matriz = f"""# 📊 MATRIZ DE PARIDAD - Mi API vs GLPI

*Generado el {datetime.now().strftime("%d/%m/%Y a las %H:%M")}*

## 🔍 Resultados

| Endpoint | Mi API | GLPI | Estado |
|----------|---------|-------|--------|"""
    
    for resultado in resultados:
        matriz += f"\n| {resultado['nombre']} | `{resultado['mi_endpoint']}` | `{resultado['glpi_endpoint']}` | {resultado['estado']} |"

    matriz += f"""

## 📈 Resumen

- **Total endpoints**: {total}
- **Compatibles**: {compatibles}
- **Incompatibles**: {total - compatibles}
- **Porcentaje éxito**: {porcentaje:.1f}%

*Verificado con: python parity_check.py*
"""
    
    with open('matriz_paridad.md', 'w', encoding='utf-8') as f:
        f.write(matriz)
    
    print("✅ Matriz generada: matriz_paridad.md")
    print(f"📊 {compatibles}/{total} endpoints compatibles")

if __name__ == "__main__":
    generar_matriz()
