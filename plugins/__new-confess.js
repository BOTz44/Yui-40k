let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Maaf Format Anda Salah\n\nContoh:\n.confess 62××××|hallo sayang', m)
    if (!pesan) return conn.reply(m.chat, 'Maaf Format Anda Salah\n\nContoh:\n.confess 62××××|hallo sayang', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
(Pengirim Rahasia)
⬡──⬡─────────⬡──⬡
📫Pengirim : Rahasia

💌 Pesan : ${pesan}
⬡──⬡─────────⬡──⬡
Maaf Anda Belum Bisa Membalas ke Pengirim

------------------------------------------`

    conn.reply(korban + '@s.whatsapp.net', spam1, m)

    let logs = `Sukses Mengirim Pesan
⬡──⬡─────────⬡──⬡
💌 Sukses Mengirim Pesan
⬡──⬡─────────⬡──⬡`

    conn.reply(m.chat, logs, m)
}
handler.help = ['confess nomor|pesan']
handler.tags = ['tools']

handler.command = /^(|confess|confes|chat)$/i

handler.limit = true
handler.private = true
handler.premium = false
export default handler
