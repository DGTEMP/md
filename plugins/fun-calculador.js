const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*[❗] Deves mencionar alguem para cálculo*`;
  const percentages = (500).getRandom();
  let emoji = '';
  let description = '';
  switch (command) {
    case 'gay2':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*Todos os cálculos indicam ${text.toUpperCase()} é ${percentages}% Gay. ${emoji}*\n*-❥ Eso es bajo... ¡Tu eres Joto, no Gay! 😄*`;
      } else if (percentages > 100) {
        description = `*Todos os cálculos indicam ${text.toUpperCase()} é ${percentages}% Gay. ${emoji}*\n*-❥ ¡Incluso más gay de lo que pensábamos! 💃*`;
      } else {
        description = `*Todos os cálculos indicam ${text.toUpperCase()} é ${percentages}% Gay. ${emoji}*\n*-❥ Lo tuyo, lo tuyo es que eres Gay. ☠*`;
      }
      break;
    case 'lesbica':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Quizás necesites más películas románticas en tu vida. 🎬*`;
      } else if (percentages > 100) {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ ¡Eso es un amor extremo por las chicas! 👩‍❤️‍👩*`;
      } else {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Mantén el amor floreciendo! 🌸*`;
      }
      break;
    case 'pajero':
    case 'pajera':
      emoji = '😏💦';
      if (percentages < 50) {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Tal vez necesites más hobbies! 🎨*`;
      } else if (percentages > 100) {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Eso es una resistencia admirable! 💪*`;
      } else {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Mantén el buen trabajo (en solitario). 🙌*`;
      }
      break;
    case 'puto':
    case 'puta':
      emoji = '🔥🥵';
      if (percentages < 50) {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} tu ${percentages}% ${command}. ${emoji}*\n*-❥ Terás mais sorte em sua próxima conquista! 💔*`;
      } else if (percentages > 100) {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} tu ${percentages}% ${command}. ${emoji}*\n*-❥ Estás em chamas! 🚒*`;
      } else {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} tu ${percentages}% ${command}. ${emoji}*\n*-❥ Manterá esse encanto ardente! 🔥*`;
      }
      break;
    case 'manco':
    case 'manca':
      emoji = '💩';
      if (percentages < 50) {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ ¡No eres el único en ese club! 😅*`;
      } else if (percentages > 100) {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ ¡Tienes un talento muy especial! 🙈*`;
      } else {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Mantén esa actitud valiente! 🤙*`;
      }
      break;
    case 'rata':
      emoji = '🐁';
      if (percentages < 50) {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Nada mal em disfrutar desse queijo! 🧀*`;
      } else if (percentages > 100) {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Un auténtico ratón de lujo! 🏰*`;
      } else {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Coma queijo com responsabilidade! 🧀*`;
      }
      break;
    case 'prostituto':
    case 'prostituta':
      emoji = '🫦👅';
      if (percentages < 50) {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} és ${percentages}% ${command}. ${emoji}*\n*-❥ Esse mercado está no auge! 💼*`;
      } else if (percentages > 100) {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} és ${percentages}% ${command}. ${emoji}*\n*-❥ Um/a verdadeiro/a profissional! 💰*`;
      } else {
        description = `*Todos os cálculos indicam que ${text.toUpperCase()} és ${percentages}% ${command}. ${emoji}*\n*-❥ Sempre é hora de negécios! 💼*`;
      }
      break;
      default:
      throw `*[❗] Comando inválido.*`;
  }
  const responses = [
    "E o universo que está falando.",
    "Todos os cientistas confirmam.",
    "Surpresa! 🎉"
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  const cal = `━━━━⬣ *CALCULADORA* ⬣━━━━

—◉ ${description}

*"${response}"*

━━━━⬣ *CALCULADORA* ⬣━━━━`.trim()  
  async function loading() {
var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%"
]
   let { key } = await conn.sendMessage(m.chat, {text: `*🔄 ¡Calculando Porcentaje! 🔄*`, mentions: conn.parseMention(cal)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(cal)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: cal, edit: key, mentions: conn.parseMention(cal)}, {quoted: m});         
 }
loading()    
};
handler.help = ['gay2', 'lesbica', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + ' @tag | nombre');
handler.tags = ['calculator'];
handler.command = /^(gay2|lesbica|pajero|viado|puto|puta|manco|manca|rata|prostituta|prostituto)$/i;
export default handler;
