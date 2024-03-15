import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';
const teks = '*0 - Sim*\n*1 - Não*\n*2 - Não sei*\n*3 - Provavelmente sim*\n*4 - Provavelmente não*\n*5 - Voltar a pergunta anterior*';
export async function before(m) {
  if (global.db.data.users[m.sender].banned) return;
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text) return !0;
  const aki = global.db.data.users[m.sender].akinator;
  if (!aki.sesi || m.quoted.id != aki.soal.key.id) return;
  if (!somematch(['0', '1', '2', '3', '4', '5'], m.text)) return this.sendMessage(m.chat, {text: `*[❗] RESPONDA SOMENTE COM OS NÚMEROS 𝟷, 𝟸, 𝟹, 𝟺 𝚘 𝟻*\n\n${teks}`}, {quoted: aki.soal});
  const {server, frontaddr, session, signature, question, progression, step} = aki;
  if (step == '0' && m.text == '5') return m.reply('*[❗] NÃO HÁ MAIS PERGUNTAS ANTERIORES A ESTA, ESTA É A PRIMEIRA PERGUNTA*');
  let res; let anu; let soal;
  try {
    if (m.text == '5') res = await fetch(`https://api.lolhuman.xyz/api/akinator/back?apikey=${lolkeysapi}&server=${server}&session=${session}&signature=${signature}&step=${step}`);
    else res = await fetch(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${lolkeysapi}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${m.text}`);
    anu = await res.json();
    if (anu.status != '200') {
      aki.sesi = false;
      aki.soal = null;
      return m.reply('*[❗] A SESSÃO DO 𝙰𝙺𝙸𝙽𝙰𝚃𝙾𝚁 FICOU INATIVA POR MUITO TEMPO, O JOGO FOI FINALIZADO*');
    }
    anu = anu.result;
    if (anu.name) {
      await this.sendMessage(m.chat, {image: {url: anu.image}, caption: `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n\n*AKINATOR ACREDITO QUE SEU PERSONAGEM É ${anu.name}*\n_${anu.description}_`, mentions: [m.sender]}, {quoted: m});
      aki.sesi = false;
      aki.soal = null;
    } else {
      const resultes = await translate(`${anu.question}`, {to: 'es', autoCorrect: true});
      soal = await this.sendMessage(m.chat, {text: `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n*PROGRESSO: ${anu.step} (${anu.progression.toFixed(2)} %)*\n\n*JOGADOR: @${m.sender.split('@')[0]}*\n*PERGUNTA: ${resultes.text}*\n\n${teks}`, mentions: [m.sender]}, {quoted: m});
      aki.soal = soal;
      aki.step = anu.step;
      aki.progression = anu.progression;
    }
  } catch (e) {
    aki.sesi = false;
    aki.soal = null;
    m.reply('*[❗] 𝙴𝚁𝚁𝙾*');
  }
  return !0;
}
function somematch( data, id ) {
  const res = data.find((el) => el === id );
  return res ? true : false;
}
