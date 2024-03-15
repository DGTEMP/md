const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `[❗] Marque ou responda a mensagem de um usuário para banir de usar o bot\n\n*—◉ 𝙴𝚇𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, {mentions: conn.parseMention(BANtext)});
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('*[❗𝐈𝐍𝐅𝐎❗] Usuário banido com êxito mestre!*\n*—◉ Usuário não poderá mais usar o bot até ser desbanido pelo Spy*');
};
handler.command = /^banuser$/i;
handler.rowner = true;
export default handler;
