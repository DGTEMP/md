const handler = async (m, {conn, text, command, usedPrefix}) => {
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ?
      m.mentionedJid[0] :
      m.quoted ?
      m.quoted.sender :
      text;
  } else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const dReason = 'Sin motivo';
  const msgtext = text || dReason;
  const sdms = msgtext.replace(/@\d+-?\d* /g, '');
  const warntext = `*[❗] Marque um usuário ou responda uma mensagem com o comando*\n\n*—◉ Exemplo:*\n*${
    usedPrefix + command
  } @${global.suittag}*`;
  if (!who) {
    throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  }
  user.warn += 1;
  await m.reply(
      `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`
      } 𝚁𝙴𝙲𝙴𝙱𝙴 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 𝙽𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾!\nMotivo: ${sdms}\n*ADVERTENCIAS ${
        user.warn
      }/3*`,
      null,
      {mentions: [who]},
  );
  if (user.warn >= 3) {
    if (!bot.restrict) {
      return m.reply(
          '*[❗𝐈𝐍𝐅𝐎❗] Spy precisa habilitar a função restrict 𝙲𝙾𝙽𝚃𝙰𝚃𝙴 @PapaiSpy 554884702848*',
      );
    }
    user.warn = 0;
    await m.reply(
        `𝚃𝙴 𝙰𝙳𝚅𝙴𝚁𝚃𝙸 𝚅𝙰𝚁𝙸𝙰𝚂 𝚅𝙴z𝙴𝚂!!\n*@${
          who.split`@`[0]
        }* 𝚂𝚄𝙿𝙴𝚁𝙰𝚂𝚃𝙴 𝙰𝚂 *3* 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰𝚂, 𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾/𝙰 👽`,
        null,
        {mentions: [who]},
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }
  return !1;
};

handler.command = /^(adv|advertencia|warn|aviso)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
handler.register = true