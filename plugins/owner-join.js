const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let enviando;
const handler = async (m, {conn, text, isMods, isOwner, isPrems}) => {
 if (enviando) return;
     enviando = true 
  try {
    const link = text //(m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text;
    if (!link || !link.match(linkRegex)) throw '*[❗] Link errado, insira o link de un grupo de WhatsApp.*\n\n*—◉ Exemplo:*\n*◉ #join https://chat.whatsapp.com/FwEUGxkvZD85IIp0gKyFC*';
    const [_, code] = link.match(linkRegex) || [];
    if ( isPrems || isMods || isOwner || m.fromMe) {
      const res = await conn.groupAcceptInvite(code);
      await conn.sendMessage(m.chat, {text: '*[ ✔️ ] Bot entrou no grupo.*'}, {quoted: m})
      enviando = false 
    } else {
      conn.sendMessage(m.chat, {text: '*[❗] O link do seu grupo foi enviado ao meu propietario.*\n\n*—◉ Seu grupo está em análise.*\n\n*—◉*\n\n*—◉ Este processo pode demorar, alguns dias, ou semanas, tenha paciência.*'}, {quoted: m});
      const data = global.owner.filter(([id]) => id)[0];
      const dataArray = Array.isArray(data) ? data : [data];
      for (const entry of dataArray) await conn.sendMessage(entry + '@s.whatsapp.net', {text: '*[❗] NOVA SOLICITÇÃO DE UM BOT PARA UM GRUPO [❗]*\n\n*—◉ Solicitante:* ' + '@' + m.sender.split('@')[0] + '\n*—◉ Link do grupo:* ' + link, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}}, {quoted: m});
      enviando = false 
    }
  } catch {
    enviando = false 
    throw '*[❗] Meus sentimentos, algo deu errado por favor tente novamente, caso o erro persista, contate meu mestre 554884702848.*';
  }
};
handler.help = ['join [chat.whatsapp.com]'];
handler.tags = ['premium'];
handler.command = /^join|novogrupo$/i;
handler.private = true;
export default handler;
