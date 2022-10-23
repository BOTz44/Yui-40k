let fs = require('fs') 
 let handler = m => m 
  
 handler.all = async function (m, { isBlocked }) { 
     if (isBlocked) return 
     // ketika ada yang invite/kirim link grup di chat pribadi 
     if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) { 
     let teks = `*• SEWA BOT & UP TO PREMIUM •*
        
❏ *LIST SEWA BOT*
• Hemat = _5k/grup (1 minggu)_
• Normal = _10k/grup (1 bulan)_
• Standar = _20k/grup (2 bulan)_

❏ *PERPANJANG MASA AKTIF BOT*
• Level Hemat = 5k
• Level Normal = 7k
• Level Standar = 20k
• Level Pro = 35k



❏ *UPGRADE PREMIUM*
• 2k  (1 Day)
• 5k (1 Minggu)
• 10k (1 Month)

❏ *PERPANJANG MASA AKTIF PREMIUM*
2k = 2k
5k = 4k
10k = 7k




❏ *FITUR PREMIUM*
• Unlimited Limit
• Unlock Fitur 18+
• Ban, suspand User
• Mendapatkan code Hadiah Exp, money
Create (Rpg)
• Cheat Money, exp, limit,
• +5 Join Limit ticket
`
     this.reply(m.chat, teks, fpay) 
     const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
     this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m) 
     } 
 } 
  
 export default handler