/**
TheMystic-Bot-MD@BrunoSobrino - _antitrabas.js
By @NeKosmic || https://github.com/NeKosmic/
**/

import * as fs from 'fs';

export async function before(m, {conn, isAdmin, isBotAdmin, usedPrefix}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const delet = m.key.participant;
  const bang = m.key.id;
  const name = await conn.getName(m.sender);
  const fakemek = {'key': {'participant': '0@s.whatsapp.net', 'remoteJid': '0@s.whatsapp.net'}, 'message': {'groupInviteMessage': {'groupJid': '554884702848-1616969743@g.us', 'inviteCode': 'm', 'groupName': 'P', 'caption': 'The Spy - Bot', 'jpegThumbnail': null}}};
  if (chat.antiTraba && m.text.length > 4000) { // Cantidad máxima de caracteres aceptados en un mensaje.
    if (isAdmin) return conn.sendMessage(m.chat, {text: `_*< ANTI-TRAVAS />*_\n\n*[ ℹ️ ] Administrador @${m.sender.split('@')[0]} envio un mensaje que contiene muchos caracteres.*`, mentions: [m.sender]}, {quoted: fakemek});
    conn.sendMessage(m.chat, `*[ ! ] Detectei uma mensagem com muitos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'Não sou administrador, não posso fazer nada :/'}`, m);
    // await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, author, ['[ DESACTIVAR ANTI TRABAS ]', usedPrefix+'apagar antitraba'], fakemek )
    if (isBotAdmin && bot.restrict) {
      conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
        	setTimeout(() => {
        	conn.sendMessage(m.chat, {text: `Marcar chat como lido ✓\n${'\n'.repeat(400)}\n=> Número : wa.me/${m.sender.split('@')[0]}\n=> Alias : ${name}\n[ ! ] Acaba de enviar um texto que contem muitos caracteres, o que pode ocasionar falhas em alguns dispositivos`, mentions: [m.sender]}, {quoted: fakemek});
      }, 0);
      setTimeout(() => {
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }, 1000);
    } else if (!bot.restrict) return m.reply('[ ! ] Para proteger o grupo eliminando quem burlar isso, meu dono tem que ativar o modo nesse grupo, por favor, comunique sua vontade @PapaiSpy 554884702848');
  }
  return !0;
}
