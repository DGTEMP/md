/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝚄𝙼 𝚅𝙸𝙳𝙴𝙾 𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙴𝙼 𝙶𝙸𝙵 𝙲𝙾𝙼 𝙰𝚄𝙳𝙸𝙾*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*[❗] 𝚃𝙸𝙿𝙾 ${mime} 𝙽𝙰𝙾 𝙴 𝙲𝙾𝚁𝚁𝙴𝚃𝙾, 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙼 𝚅𝙸𝙳𝙴𝙾*`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*ᴀϙᴜɪ ᴇsᴛᴀ sᴜ ɢɪғ ᴄᴏɴ ᴀᴜᴅɪᴏ, ᴀʟ ᴀʙʀɪʀʟᴏ sᴇ ʀᴇᴘʀᴏᴅᴜᴄᴇ ᴄᴏɴ ᴀᴜᴅɪᴏ*'}, {quoted: m});
};
handler.command = ['togifaud'];
export default handler;
