const handler = async (m, {conn}) => {
  try {
    const pp = imagen6;
    const img = await(await fetch('https://github.com/CrisAmorim27.png')).buffer();
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const str = `╭────[ *Spy - 𝐁𝐨𝐭* ]
│
│ *➤ ʜi ${taguser}*
│
│ *=> 🤖 ᴛᴇᴍᴘᴏ ᴀᴛɪᴠᴏ:* ${uptime}
│ *=> ✅ ʙᴏᴛ ᴘᴜʙʟ*
│ *=> 👑 ᴄʀɪᴀᴅᴏʀ: Spy ne vd*
│ *=> 🔗 ᴏғᴄ:* https://www.atom.bio/spy
╰────────────────`.trim();
    if (m.isGroup) {
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://www.atom.bio/spy`, "sourceUrl": `https://www.atom.bio/spy`}}}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://www.atom.bio/spy`, "sourceUrl": `https://www.atom.bio/spy`}}}, {quoted: fkontak2});
    }
  } catch {
  }
};
handler.help = ['estado'];
handler.tags = ['main'];
handler.command = /^(estado|status|estate|state|stado|stats|runtime|uptime)$/i;
export default handler;
function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [`\n│ *=> 💥 ` + d, ' Dia(s)* ', `\n│ *=> 💫 ` + h, ' Hora(s)* ', `\n│ *=> 💠 ` + m, ' Minuto(s)* ', `\n│ *=> ♦ ` + s, ' Segundo(s)* '].map((v) => v.toString().padStart(2, 0)).join('');
}
