let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [0895392851501]
│ • Telkomsel [083899161015]
│ • Gopay [-]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62895392851501
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
