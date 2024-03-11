/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '*[❗] Olá Spy, Como está? Já és admin nesse grupo*';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁*');
  }
};
handler.command = /^seradmin$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
