const handler = async (m, {conn, text}) => {
  if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗]  @𝚝𝚊𝚐 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] @𝚝𝚊𝚐 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] USUÁRIO DESBANIDO COM ÊXITO*\n*—◉ JÁ PODE USAR O BOT*`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^unbanuser$/i;
handler.rowner = true;
export default handler;
