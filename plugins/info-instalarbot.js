const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻 𝙷𝙾𝚂𝚃*

> Panel: https://livepix.gg/luizaa

> Suporte: https://wa.me/554891941092

------------------------------------

*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂*

> Comandos:

- cd && termux-setup-storage

- apt-get update -y && apt-get upgrade -y

- pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 

- yarn install

- npm install

- npm update

- npm start

------------------------------------

—◉ ✔️ ATIVAR ✔️

> cd TheSpy-Bot-MD

> npm start`.trim();
  const buttonMessage= {
    'document': {url: `https://wa.me/554848702848`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://wa.me/554848702848',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'SPY - BOT - MD⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://wa.me/554848702848'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['instalarbot', 'instalarbot'];
export default handler;
