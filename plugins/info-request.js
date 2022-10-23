let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `kalo kamu mau request fitur,pake perintah ini\n\ncontoh:\n${usedPrefix + command} selamat siang owner, sy mau request fitur berikut <copy/tag pesan request nya>`
    if (text.length < 10) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan terkirim kepemilik bot, silahkan menunggu_`)
}
handler.help = ['request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(request)$/i
export default handler