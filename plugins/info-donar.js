/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`
*┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┇          「 𝐃𝐎𝐀𝐑 」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┃ Salve ${name}*
*┃*
*┃* 👉🏻 *Spy ne vd*
*┃*
*┃* ➤ *Obrigado por apoiar o projeto*
*┃* 
*┃* ➤ *livepix.gg/luizaa*
*┃*
*┃* ➤ _Nesse link também encontrará_ 
*┃*       _opções para o seu projeto_
*┃* 
*┃* 
*┃ ➤ Papai Spy*   
*┃*
*┃ 👉🏻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃*
*┃*
*┃ wa.me/554884702848*
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|doar|server$/i;
export default handler;
