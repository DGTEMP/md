const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*Salve irmão 👋🏻, Aqui estão os links de alguns grupos que estou presente*

*Te convido a conhecer nossa comunidade :D*

*➤ 𝙶𝚛𝚞𝚙𝚘𝚜 𝚘𝚏𝚒𝚌𝚒ais Spy:*

*1.-* https://bit.ly/botspy

*2.-* https://chat.whatsapp.com/DbXBmsydWBE1N3EoY0hRs

*3.-* https://chat.whatsapp.com/BW0P22xx7EBTdH5IM851F

*4.-* https://chat.whatsapp.com/CjexkGVr376GuSdDVAHzC

*5.-* https://chat.whatsapp.com/DLrFJUPxQ2IrOm7sJWJ0k`.trim();
  const buttonMessage= {
    'document': {url: `https://wa.me/554884702848`},
    'mimetype': `application/${document}`,
    'fileName': `「  spy ne vd 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/SpyHackera/The-Bot-MD',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.youtube.com/@PapaiSpy'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgp', 'grupos'];
export default handler;
