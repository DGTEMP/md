import fetch from 'node-fetch';
const handler = async (m, {text, usedPrefix, command}) => {
  if (!text) throw `*[❗] INSIRA O NOME DE UM PAÍS ${usedPrefix + command} Brasil*`;
  const res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)));
  if (!res.ok) throw await res.text();
  const json = await res.json();
  if (!json.confirmed) throw 'País?';
  if (json.confirmed) {
    m.reply(`
🌏 País : ${text}
✅Confirmado : ${json.confirmed.value}
📉curado : ${json.recovered.value}
☠️Mortes : ${json.deaths.value}
💌Info Atualizada : ${json.lastUpdate}
`.trim());
  } else throw json;
};
handler.help = ['covid'].map((v) => v + ' <país>');
handler.tags = ['info'];
handler.command = /^(corona|covid|covid19)$/i;
export default handler;
