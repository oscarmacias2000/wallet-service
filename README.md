# Wallet Service


<img src="https://www.svgrepo.com/show/367256/usdt.svg" alt="Logo" height="150">
<img src="data:image/png;base64,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" alt="Logo" height="150">


## Descripción

Wallet Service es una aplicación que permite la gestión segura de monederos digitales, incluyendo la creación de billeteras, consulta de saldos, firma y transmisión de transacciones, así como el almacenamiento cifrado de claves privadas.

## Características

* ✅ Creación y gestión de monederos
* ✅ Consulta de saldo
* ✅ Firma de transacciones
* ✅ Transmisión de transacciones a la red blockchain
* ✅ Cifrado seguro de claves privadas
* ✅ Soporte para múltiples cuentas (opcional)

---

## Funcionalidades

### 1. Creación y Gestión de Monederos

Permite generar nuevos monederos criptográficos o importar monederos existentes mediante una clave privada o frase semilla.

**Operaciones disponibles:**

* Crear un nuevo monedero
* Importar monedero existente
* Exportar información pública
* Listar monederos registrados
* Eliminar monederos

---

### 2. Consulta de Saldo

Obtiene el saldo actual de una dirección blockchain.

**Ejemplo:**

```bash
GET /wallets/{address}/balance
```

**Respuesta:**

```json
{
  "address": "0x123...",
  "balance": "2.45"
}
```

---

### 3. Firma y Transmisión de Transacciones

Permite firmar transacciones utilizando la clave privada del usuario y posteriormente enviarlas a la red.

**Proceso:**

1. Construcción de la transacción.
2. Firma criptográfica.
3. Verificación de la firma.
4. Transmisión a la blockchain.

**Ejemplo:**

```bash
POST /transactions/send
```

```json
{
  "from": "0x123...",
  "to": "0x456...",
  "amount": "1.0"
}
```

---

### 4. Cifrado de Clave Privada

Las claves privadas se almacenan utilizando algoritmos de cifrado robustos para proteger los fondos de los usuarios.

**Buenas prácticas implementadas:**

* Cifrado AES-256
* Derivación de claves mediante PBKDF2 o Argon2
* Almacenamiento seguro de secretos
* Protección mediante contraseña maestra

---

## Arquitectura

```text
┌─────────────┐
│   Cliente   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Wallet API  │
└──────┬──────┘
       │
 ┌─────┴─────┐
 ▼           ▼
Blockchain   Base de Datos
             (Claves cifradas)
```

---

## Seguridad

* Nunca almacenar claves privadas en texto plano.
* Utilizar HTTPS en todos los entornos.
* Implementar control de acceso y autenticación.
* Rotar secretos periódicamente.
* Mantener dependencias actualizadas.

---

## Requisitos

* Node.js 18+ / Python 3.10+ (según implementación)
* Base de datos (PostgreSQL, MySQL o MongoDB)
* Acceso a un nodo blockchain o proveedor RPC

---

## Instalación

```bash
git clone <repository-url>
cd wallet-service

npm install
```

o

```bash
pip install -r requirements.txt
```

---

## Ejecución

```bash
npm start
```

o

```bash
python app.py
```

---

## Licencia

MIT License
