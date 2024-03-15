import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙼𝙰 𝚄𝚁𝙻 𝙰 𝙲𝙾𝚁𝚃𝙰𝚁*';
  const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
  if (!shortUrl1) throw `*[❗] 𝙴𝚁𝚁𝙾*`;
  const done = `*𝙻𝙸𝙽𝙺 𝙲𝙾𝚁𝚃𝙰𝙳𝙾 𝙲𝙾𝚁𝙴𝚃𝙰𝙼𝙴𝙽𝚃𝙴!!*\n\n*𝙻𝙸𝙽𝙺 𝙰𝙽𝚃𝙴𝚁𝙸𝙾𝚁:*\n${text}\n*𝙻𝙸𝙽𝙺 𝙲𝙾𝚁𝚃𝙰𝙳𝙾:*\n${shortUrl1}`.trim();
  m.reply(done);
};
handler.help = ['tinyurl', 'acortar'].map((v) => v + ' <link>');
handler.tags = ['tools'];
handler.command = /^(tinyurl|short|cortar|encurtar)$/i;
handler.fail = null;
handler.register = true
export default handler;
