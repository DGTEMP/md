import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙼𝙰 𝙸𝙼𝙰𝙶𝙴𝙼 𝙾𝚄 𝚅𝙸𝙳𝙴𝙾 𝙰 𝚂𝙴𝚁 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾 𝙴𝙼 𝙻𝙸𝙽𝙺*';
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(`*Link do seu arquivo:* ${link}`);
};
handler.help = ['tourl <reply image>'];
handler.tags = ['sticker'];
handler.command = /^(up|tourl)$/i;
export default handler;
