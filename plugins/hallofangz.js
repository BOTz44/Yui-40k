let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
`.trim()

conn.fakeReply(m.chat, info, '*✧───────···────────✧*\n*Hallo Juga Kak Shinn Kangen Nih* \n *Gimana Kabar Nya? >~<*')
}
handler.customPrefix = /^(Hallo|Hallo yui|hi yui|Hi bot)$/i
handler.command = new RegExp

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
 