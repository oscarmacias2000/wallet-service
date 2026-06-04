// server.js — Node v24, sin dependencias externas
const address = 'TKU4L3QNycCdw8AUk11xB54DQjAifMYXVp'
const API_KEY  = '459827da-b3a6-45b4-b7b4-f3a59563b0c0' // gratis en trongrid.io — o deja vacío

const HEADERS = API_KEY
  ? { 'TRON-PRO-API-KEY': API_KEY }
  : {}

async function checkWallet() {
  console.log(`\n Consultando dirección: ${address}\n`)

  try {
    // ── 1. Balance TRX + tokens TRC-20
    const res    = await globalThis.fetch(
      `https://api.trongrid.io/v1/accounts/${address}`,
      { headers: HEADERS }
    )
    const json   = await res.json()
    const account = json.data?.[0] || {}

    if (!Object.keys(account).length) {
      console.log('Dirección no encontrada o sin actividad en mainnet.')
      return
    }

    const trx = ((account.balance || 0) / 1_000_000).toFixed(6)
    console.log(` Dirección  : ${address}`)
    console.log(`Balance TRX: ${trx} TRX`)

    // Tokens TRC-20
    const tokens = account.trc20 || []
    if (tokens.length) {
      console.log('\n  Tokens TRC-20:')
      tokens.forEach(t => {
        const [contract, raw] = Object.entries(t)[0]
        const amount = (parseInt(raw) / 1e6).toFixed(2)
        console.log(`   ${contract}  →  ${amount}`)
      })
    } else {
      console.log('\n   Sin tokens TRC-20 detectados')
    }

    // ── 2. Últimas 5 transacciones TRC-20
    const txRes  = await globalThis.fetch(
      `https://api.trongrid.io/v1/accounts/${address}/transactions/trc20?limit=5&only_confirmed=true`,
      { headers: HEADERS }
    )
    const txJson = await txRes.json()
    const txs    = txJson.data || []

    console.log(`\n Últimas transacciones TRC-20 (${txs.length}):`)
    if (!txs.length) {
      console.log('   Sin transacciones TRC-20 recientes')
    } else {
      txs.forEach(tx => {
        const decimals = tx.token_info?.decimals || 6
        const val      = (parseInt(tx.value) / 10 ** decimals).toFixed(2)
        const symbol   = tx.token_info?.symbol || '?'
        const dir      = tx.to === address ? '⬇ IN ' : '⬆ OUT'
        const txid     = tx.transaction_id?.slice(0, 20) + '...'
        console.log(`   ${dir}  ${val} ${symbol}  — ${txid}`)
      })
    }

  } catch (err) {
    console.error('❌ Error:', err.message)
  }
}

checkWallet()