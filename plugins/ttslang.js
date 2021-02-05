let handler = async (m, { conn }) => {
  conn.reply(m.chat, `
╭════•>TTS language
╿  id : Indonesia
╿  en : English
╿  ja : Jepang
╿  ru : Rusia
╿  ne : India
╿  ko : Korea 
╰═══════════════════════
`.trim(), m)
}
handler.help = ['ttslang']
handler.tags = ['tools']
handler.command = /^ttslang/i
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

