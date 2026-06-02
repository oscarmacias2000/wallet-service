# Wallet Service

![Logo](https://www.svgrepo.com/show/367256/usdt.svg)

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
