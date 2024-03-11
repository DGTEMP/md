import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {args, usedPrefix, command}) => {
  const msg = `*[❗𝐈𝐍𝐅𝐎❗] 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝚃𝙾 ${usedPrefix + command} (idioma) (texto)*\n*𝙴x𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} pt Hello*\n\n*Lista de idiomas permitidos por enquanto:*\n*- https://cloud.google.com/translate/docs/languages*`;
  if (!args || !args[0]) return m.reply(msg);
  let lang = args[0];
  let text = args.slice(1).join(' ');
  const defaultLang = 'pt';
  if ((args[0] || '').length !== 2) {
    lang = defaultLang;
    text = args.join(' ');
  }
  if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
  try {
    const result = await translate(`${text}`, {to: lang, autoCorrect: true});
    await m.reply('*Tradução:* ' + result.text);
  } catch {
    try {
      const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
      const loll = await lol.json();
      const result2 = loll.result.translated;
      await m.reply('*Traducción:* ' + result2);
    } catch {
      await m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERRO, Por favor contate meu mestre Spy 554884702848*');
    }
  }
};
handler.command = /^(translate|traduzir|trad)$/i;
export default handler;
