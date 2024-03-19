import Presence from '@whiskeysockets/baileys';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙾 𝙽𝙾𝚅𝙾 𝙽𝙾𝙼𝙴 𝙳𝙾 𝙶𝚁𝚄𝙿𝙾*`;
  try {
    const text = args.join` `;
    if (!args || !args[0]) {
    } else {
      conn.groupUpdateSubject(m.chat, text);
    }
  } catch (e) {
    throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙾 𝙽𝙾𝙼𝙴 𝙽𝙰𝙾 𝙿𝙾𝙳𝙴 𝚂𝙴𝚁 𝙼𝙰𝙸𝚂 𝙳𝙴 𝟸𝟻 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂*';
  }
};
handler.help = ['setname <text>'];
handler.tags = ['group'];
handler.command = /^(setname)$/i;
handler.group = true;
handler.admin = true;
export default handler;
