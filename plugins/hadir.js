let handler = async (m, { conn }) => {
  conn.reply(m.chat, `
  ╭══════•>「 *Absensi* 」
╿
╿  
╿
╿ Silahkan pilih kelas anda:
╿ *8F*
╿https://forms.gle/xHUnn2XovxFEqBGg6
╿ *9B*
╿https://forms.gle/W6VTkwMMLskEctTX6
╿ *9G*
╿https://forms.gle/Q3ZSeo9Gb8R78jvB9
╿ *9H*   
╿https://forms.gle/bmF6YkHBkuzfRYcw6
╿
╿*Selamat belajar online*
╿
╰═════════════════════════
`.trim(), m)
}
handler.help = ['absen']
handler.tags = ['']
handler.command = /^absen/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

