//CÓDIGO CREADO POR elrebelde21 : https://github.com/elrebelde21
const handler = async (m, {conn, text, isPrems}) => {
if (!db.data.chats[m.chat].game) throw `[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙨𝙩𝙚 𝙟𝙤𝙜𝙤𝙨 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙖𝙩𝙞𝙫𝙖𝙙𝙤 𝙥𝙚𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙨 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤 𝙨𝙞 𝙩𝙪 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙨 𝙮 𝙦𝙪𝙚𝙧 𝙖𝙘𝙩𝙞𝙫𝙖𝙧𝙡𝙤 𝙪𝙨𝙖𝙧: #on juegos` 
const date = global.db.data.users[m.sender].juegos + 21600000; //21600000 = 6 hs 
if (new Date - global.db.data.users[m.sender].juegos < 21600000) throw `『⏰』𝙀𝙨𝙥𝙚𝙧𝙖 : ${msToTime(date - new Date())} para voltar a jogar `
let user = global.db.data.users[m.sender]
const prem = Math.floor(Math.random() * 3600000)
const exp = Math.floor(Math.random() * 10000)
const diamond = Math.floor(Math.random() * 300)
const money = Math.floor(Math.random() * 10000)
let rulet = ['text', 'text2', 'text3', 'text4', 'text5', 'text6']; 
let ruleta = rulet[Math.floor(Math.random() * 6)]
global.db.data.users[m.sender].juegos = new Date * 1;
if (ruleta === 'text') return m.reply(`😺 𝙌𝙐𝙀 𝙎𝙊𝙍𝙏𝙀 🐞🍀\n*CONSEGUISSE :* ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (ruleta === 'text2') return m.reply(`😿 NÃO ESTÁS COM SORTE, ACABAS DE PERDER : ${exp} XP`).catch(global.db.data.users[m.sender].exp -= exp) 
if (ruleta === 'text3') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'demote').catch(m.reply(`😹 ÉS TÃO RUIM QUE REMOVI SEU PODER, JÁ NAO ÉS MAIS ADMINISTRADOR DO GRUPO, FODASSEEEE 😹😹😹`)) 
if (ruleta === 'text4') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote').catch(m.reply(`😼 ISSO É BOM 😉, AGORA ÉS UM ADMINISTRADOR, QUEM TIRAR O TEU ADM É FÃ DA SHAKIRA 😂`)) 
if (ruleta === 'text5') return m.reply(`WUHUUU, ESTÁS COM SORTE, VAI LOGO JOGAR NO CASSINO 🎰\n*GANHASSE :* ${diamond} 💎`).catch(global.db.data.users[m.sender].diamond += diamond) 
if (ruleta === 'text6') return m.reply(`👑 UHUULLLL, ESTÁS COM SORTE, GANHASSE PREMIUM POR : 1 𝙃𝙤𝙧𝙖 ⏰`).catch(global.db.data.users[m.sender].premium += prem) 
}
handler.help = ['game'];
handler.tags = ['xp'];
handler.command = /^(roletas|roleta|sorte)$/i
handler.fail = null;
handler.group = true
handler.register = true
export default handler;

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}