const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*—◉ 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙾 𝙲𝚁ɪ𝙰𝙳𝙾𝚁 wa.me/554884702848*

*—◉ 𝙽𝚄𝙼𝙴𝚁𝙾 𝙲𝙾𝙻𝙰𝙱𝙾𝚁𝙰𝙳𝙾𝚁 𝟷 wa.me/554884702848*

*—◉ 𝙽𝚄𝙼𝙴𝚁𝙾 𝙲𝙾𝙻𝙰𝙱𝙾𝚁𝙰𝙳𝙾𝚁 2 wa.me/554888767821*

*—◉ 𝙽𝚄𝙼𝙴𝚁𝙾 𝙲𝙾𝙻𝙰𝙱𝙾𝚁𝙰𝙳𝙾𝚁 3 wa.me/595986460945*

*—◉ 𝙽𝚄𝙼𝙴𝚁𝙾 𝙲𝙾𝙻𝙰𝙱𝙾𝚁𝙰𝙳𝙾𝚁 4 wa.me/19292258658*

*—◉ 𝙲𝙾𝙽𝚃𝙰𝚃𝙾 https://instagram.com/PapaiSpy*

*—◉ @PapaiSpy wa.me/554884702848*`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/CrisAmorim27/Spy3`},
    'mimetype': `application/${document}`,
    'fileName': `「  spy ne vd 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/CrisAmorim27/Spy3',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.youtube.com/@PapaiSpy'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'criador', 'dono',];
handler.tags = ['info'];
handler.command = /^(owner|criador|dono|papai|propietario)$/i;
export default handler;
