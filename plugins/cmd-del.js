const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝙻𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴𝙽 𝙰𝚂𝙸𝙶𝙽𝙰𝚁 𝚃𝙴𝚇𝚃𝙾𝚂 𝙾𝚄 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙰𝚂𝙸𝙽𝙰𝙳𝙾𝚂 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 𝙾𝚄 𝙸𝙼𝙰𝙶𝙴𝙽𝚂, 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝚁 𝙾 𝙲𝙾𝙳𝙸𝙶𝙾 𝙰𝚂𝙸𝙽𝙰𝙳𝙾 𝚄𝚂𝙴 𝙾 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix}listcmd*`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] SÓ _@PapaiSpy_ PODE REALIZAR A REMOÇÃO*';
  delete sticker[hash];
  m.reply(`*[ ✔ ] 𝚃𝙴𝚇𝚃𝙾/𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚂𝙸𝙽𝙰𝙳𝙾 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁/𝙸𝙼𝙰𝙶𝙴𝙼 𝙵𝙾𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 𝙳𝙰 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝙳𝙾𝚂 𝙲𝙾𝚁𝚁𝙴𝚃𝙰𝙼𝙴𝙽𝚃𝙴*`);
};
handler.command = ['delcmd'];
handler.rowner = true;
export default handler;
