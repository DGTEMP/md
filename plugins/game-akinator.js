import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';
const handler = async (m, {conn, usedPrefix, command, text}) => {
  if (m.isGroup) return;
  const aki = global.db.data.users[m.sender].akinator;
  if (text == 'end') {
    if (!aki.sesi) return m.reply('*[❗] 𝙰𝚃𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴 𝙽𝙾 𝙴𝚂𝚃𝙰𝚂 𝙽𝚄𝙽𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰 𝙳𝙴 𝙰𝙺𝙸𝙽𝙰𝚃𝙾𝚁*');
    aki.sesi = false;
    aki.soal = null;
    m.reply('*[❗] 𝙴𝙻𝙸𝙼𝙸𝙽𝙾 𝙲 𝙴𝚇𝙸𝚃𝙾 𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰 𝙳𝙴 𝙰𝙺𝙸𝙽𝙰𝚃𝙾𝚁*');
  } else {
    if (aki.sesi) return conn.reply(m.chat, '*[❗] 𝙴𝚂𝚃𝙰𝚂 𝙽𝚄𝙽𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰 𝙳𝙴 𝙰𝙺𝙸𝙽𝙰𝚃𝙾𝚁*', aki.soal);
    try {
      const res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkeysapi}`);
      const anu = await res.json();
      if (anu.status !== 200) throw '*[❗] 𝙴𝚁𝚁𝙾*';
      const {server, frontaddr, session, signature, question, progression, step} = anu.result;
      aki.sesi = true;
      aki.server = server;
      aki.frontaddr = frontaddr;
      aki.session = session;
      aki.signature = signature;
      aki.question = question;
      aki.progression = progression;
      aki.step = step;
      const resultes2 = await translate(question, {to: 'es', autoCorrect: false});
      let txt = `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n\n*JOGADOR: @${m.sender.split('@')[0]}*\n*PERGUNTA: ${resultes2.text}*\n\n`;
      txt += '*0 - Sí*\n';
      txt += '*1 - No*\n';
      txt += '*2 - No sé*\n';
      txt += '*3 - Probablemente sí*\n';
      txt += '*4 - Probablemente no*\n\n';
      txt += `*𝚄𝚂𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command} end 𝙿𝙰𝚁𝙰 𝚂𝙰𝙸𝚁 𝙳𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰 𝙳𝙴 𝙰𝙺𝙸𝙽𝙰𝚃𝙾𝚁*`;
      const soal = await conn.sendMessage(m.chat, {text: txt, mentions: [m.sender]}, {quoted: m});
      aki.soal = soal;
    } catch {
      m.reply('*[❗] 𝙴𝚁𝚁𝙾*');
    }
  }
};
handler.menu = ['akinator'];
handler.tags = ['game'];
handler.command = /^(akinator)$/i;
export default handler;
