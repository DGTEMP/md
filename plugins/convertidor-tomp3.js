import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝚅𝙸𝙳𝙴𝙾 𝙾𝚄 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙴𝙼 𝙰𝚄𝙳𝙸𝙾/𝙼𝙿𝟹*`;
  const media = await q.download();
  if (!media) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, 𝙾𝙲𝙾𝚁𝚁𝙴𝙾 𝙴𝚁𝚁𝙾 𝙰𝙾 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝚂𝙴𝚄 𝚅𝙸𝙳𝙴𝙾*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, 𝙴𝚁𝚁𝙾 𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝚂𝚄𝙰 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉 𝙴𝙼 𝙰𝚄𝙳𝙸𝙾/𝙼𝙿𝟹*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^to(mp3|audio)$/i;
export default handler;
