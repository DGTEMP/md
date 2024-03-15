import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!/image/g.test(mime)) throw '*[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙾𝚄 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝚄𝙼𝙰 𝙸𝙼𝙰𝙶𝙴𝙼*';
  m.reply('*[❗] 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝙽𝙳𝙾 𝙸𝙼𝙰𝙶𝙴𝙼 𝙰 𝙰𝙽𝙸𝙼𝙴, 𝚂𝙴𝙰 𝙿𝙰𝙲𝙸𝙴𝙽𝚃𝙴 𝙴𝙽𝚀𝚄 𝙴𝙽𝚅𝙸𝙾 𝙾 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾*');
  const data = await q.download?.();
  const image = await uploadImage(data);
  try {
    const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
    await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
  } catch (i) {
    try {
      const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
      await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
    } catch (a) {
      try {
        const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
        await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
      } catch (e) {
        throw '*[❗] 𝙴𝚁𝚁𝙾, 𝚅𝙴𝚁𝙸𝙵𝙸𝚀𝚄𝙴 𝚀𝚄𝙴 𝙰 𝙸𝙼𝙰𝙶𝙴𝙼 𝙴 𝚁𝙾𝚂𝚃𝙾 𝙳𝙴 𝚄𝙼𝙰 𝙿𝙴𝚂𝙾𝙰*';
      }
    }
  }
};
handler.help = ['toanime'];
handler.tags = ['tools'];
handler.command = /^(jadianime|toanime)$/i;
export default handler;
