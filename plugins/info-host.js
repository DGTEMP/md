const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*🚀 -----[ spy ne vd ]------- 🚀*
  
 *Olá a todos 👋🏻 ¡Estamos emocionados de anunciar nosso novo colaborador Cafirexos  🤖 Agora já podem ter seu próprio bot de THE-SPY-BOT-MD nessa plataforma, permitindo  que teus bots estejam ativos 24/7. 💻*

_A instalação dessas versões foi aprovada e já está totalmente operacional. Além disso, *os servidores são totalmente suportados, permitindo que você escolha o tipo de inicialização do bot de acordo com suas necessidades.* Prepare-se para uma experiência de usuário ininterrupta e emocionante!_ 

*Página oficial:*
https://www.cafirexos.com/

*Dashboard:*
https://dash.cafirexos.com

*Panel:*
https://panel.cafirexos.com

*WhatsApp*
https://wa.me/554888767821

*Correio eletrônico*
contacto@cafirexos.com

*Canal do WhatsApp*
https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q

*Dúvidas? (UNICAMENTE SOBRE A HOST):*
https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ
`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/CrisAmorim27/bot`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/CrisAmorim27/bot',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'A Melhor Hosting 🚀⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://wa.me/554884702848'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
}; 
handler.command = ['host', 'cafirexos'];
handler.register = true
export default handler;
