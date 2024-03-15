const handler = async (m, {conn, text, usedPrefix, command}) => {
  global.db.data.sticker = global.db.data.sticker || {};
  if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙾 𝙸𝙼𝙰𝙶𝙴𝙼 𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙼 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙾𝚄 𝚃𝙴𝚇𝚃𝙾*';
  if (!m.quoted.fileSha256) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾 𝙿𝙾𝙳𝙴𝚂 𝙰𝚂𝙸𝙽𝙰𝚁 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙾𝚄 𝚃𝙴𝚇𝚃𝙾𝚂 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 𝙴 𝙸𝙼𝙰𝙶𝙴𝙽𝚂*';
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾 𝙳𝙴 𝚄𝚂𝙾, 𝚃𝙴𝚇𝚃𝙾 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴*\n\n*𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝚃𝙾:*\n*—◉ ${usedPrefix + command} <texto> <responder a sticker ou imagem>*\n\n*EXEMPLO:*\n*—◉ ${usedPrefix + command} <#menu> <responder sticker ou imagem>*`;
  const sticker = global.db.data.sticker;
  const hash = m.quoted.fileSha256.toString('base64');
  if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾 𝙾𝚆𝙽𝙴𝚁 𝙿𝙾𝙳𝙴 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙰 𝙼𝙾𝙳*';
  sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false};
  m.reply(`*[ ✔ ] 𝚃𝙴𝚇𝚃𝙾/𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚂𝙸𝙽𝙰𝙳𝙾 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁/𝙸𝙼𝙶 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝙰 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝙳𝙾𝚂 𝙲𝙾𝚁𝚁𝙴𝚃𝙰𝙼𝙴𝙽𝚃𝙴*`);
};
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset'];
handler.rowner = true;
export default handler;
