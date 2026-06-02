# Wallet Service


<img src="https://www.svgrepo.com/show/367256/usdt.svg" alt="Logo" height="150">
<img src="https://www.svgrepo.com/show/367255/usdc.svg" alt="Logo" height="150">
<img src="https://www.svgrepo.com/show/428646/tron-crypto.svg" alt="Logo" height="150">

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

## Stablecoins Soportadas

### USDT (Tether)
<img src="https://assets.klever.io/2025/08/all-about-usdt.jpg.webp" alt="Logo" height="150">

**USDT (Tether)** es una stablecoin diseñada para mantener una paridad aproximada de 1:1 con el dólar estadounidense (USD). Es una de las criptomonedas más utilizadas para transferencias de valor, trading y pagos digitales debido a su alta liquidez y amplia adopción en los mercados de criptomonedas.

**Características principales:**

* Vinculada al valor del dólar estadounidense.
* Amplia disponibilidad en múltiples redes blockchain.
* Alta liquidez en exchanges centralizados y descentralizados.
* Utilizada como medio de intercambio y reserva temporal de valor.

### USDC (USD Coin)
<img src="https://cdn.sanity.io/images/a7img0jk/production/b6b15ec908b2a22af25cf065e06f13d789bdfffc-2400x1350.png?rect=0,45,2400,1260&w=1200&h=630&q=90&fit=max&auto=format" alt="Logo" height="150">

**USDC (USD Coin)** es una stablecoin respaldada por reservas en dólares estadounidenses y emitida bajo estándares de cumplimiento regulatorio. Su objetivo es ofrecer estabilidad de precio y transparencia para pagos, transferencias y aplicaciones financieras descentralizadas.

**Características principales:**

* Paridad aproximada de 1 USDC = 1 USD.
* Respaldo mediante activos equivalentes en dólares.
* Amplia integración con aplicaciones DeFi y servicios financieros.
* Enfoque en transparencia y auditorías de reservas.

### Uso en Wallet Service

Wallet Service permite:

* Consultar balances de USDT y USDC.
* Enviar y recibir transferencias.
* Firmar transacciones de manera segura.
* Gestionar direcciones compatibles con las redes soportadas.
* Monitorear movimientos y estados de transacción.

> Nota: La disponibilidad de USDT y USDC dependerá de las redes blockchain integradas en la aplicación (por ejemplo Ethereum, Polygon, Arbitrum, Solana, entre otras).








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
