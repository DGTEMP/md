// Creditos del codigo a @Gatito-kw //

/* GitHub: https://github.com/Gatito-kw */

/* Bot: https://github.com/Gatito-kw/nekobot-md */

import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = await (await fetch(pp)).buffer();
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `*Recentenmente um menbro foi promovido a administrador.*\n\n`;
    txt1 += `*◦  Grupo:* ${groupName}\n`;
    txt1 += `*◦  Nuevo admin:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt1 += `*◦  Ejecutado por:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `*Recentemente um administrador perdeu o cargo, e agora é membro comum.*\n\n`;
    txt2 += `*◦  Grupo:* ${groupName}\n`;
    txt2 += `*◦  Usuário:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt2 += `*◦  Executado por:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `*Recientemente se ha incorporado al grupo un nuevo miembro.*\n\n`;
    txt3 += `*◦  Grupo:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `*◦  Adicionado:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt3 += `*◦  Executado por:* @${m.sender.split`@`[0]}`;
    } else {
      txt3 += `*◦  Add:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `*Recentemente foi eliminado um membro desse grupo.*\n\n`;
    txt4 += `*◦  Grupo:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt4 += `*◦  Eliminado:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt4 += `*◦  Executado por:* @${m.sender.split`@`[0]}`;
    } else {
      txt4 += `*◦  Off:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt4, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = 'salido';
    } else {
      ax = 'eliminado';
    }
    let txt5 = `*Recentemente  ${ax} um membro do grupo.*\n\n`;
    txt5 += `*◦  Grupo:* ${groupName}\n`;
    if (ax === 'eliminado') {
      txt5 += `*◦  Eliminado:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt5 += `*◦  Executado por:* @${m.sender.split`@`[0]}`;
    } else {
      txt5 += `*◦  Saiu:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt5, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion;
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'fechado';
    } else {
      accion = 'aberto';
    }
    let txt6 = `*Recentemente foi modificado os ajustes desse grupo.*\n\n`;
    txt6 += `*◦  Grupo:* ${groupName}\n`;
    txt6 += `*◦  Grupo foi:* ${'```' + accion + '```'}\n`;
    txt6 += `*◦  Executado por:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt6, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 21) {
    let txt7 = `*O que acharam do novo nome do grupo?*\n\n`;
    txt7 += `*◦  Novo nome:* ${'```' + groupName + '```'}\n`;
    txt7 += `*◦  Executado por:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt7, mentions: mentionsContentM}, {quoted: fkontak2});
  }
} /* Cierre del comando */
