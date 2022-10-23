import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 SCRIPT BOT 」*
*MAU BUY SCRIPT BOT INI?*\n*_Chat Wa_*\nWa.me/6282142185506\n*Harga Rp100.000*
`.trim()
  m.reply(caption)
}
handler.help = ['sc']
handler.tags = ['tools']
handler.command = /^(script|sc)$/i


export default handler
