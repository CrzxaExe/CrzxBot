let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  try {
    let res = await fetchJson(`https://api.i-tech.id/anim/anime?key=pyjaPX-6Nzxgm-De2xYI-a5kUnj-KLtQom`, {method: 'get'})
    let buffer = await getBuffer(res.url)
  } catch (e) {
  }
Nih
`.trim()
   conn.sendFile(m.chat, res, buffer)
}
handler.help = ['anime']
handler.tags = ['anim']
handler.command = /^anime$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

