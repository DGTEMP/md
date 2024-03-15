import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] Insira um texto para criar uma imagem com 𝙳𝙰𝙻𝙻-𝙴*\n\n*—◉ 𝙴x𝙴𝙼𝙿𝙻𝙾𝚂*\n*◉ ${usedPrefix + command} gato chorando*\n*◉ ${usedPrefix + command} universo*`;
    await conn.sendMessage(m.chat, {text: '*[❗] Realizando imagen, aguarde um momento.*'}, {quoted: m});
  try {
    const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
    const json1 = await tiores1.json();
    await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m});
  } catch {  
      console.log('[❗] Erro na api numero 1 de dall-e.');  
  try {
    const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m});
  } catch {
      console.log('[❗] Erro na api numero 2 de dall-e.');
  try {
    const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
    const json3 = await tiores3.json();
    await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m});
  } catch {
      console.log('[❗] Erro na api numero 3 de dall-e.');
  try {
    const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m});
  } catch {
    console.log('[❗] Erro, nenhuma api funcionando no momento.');
    throw `*[❗] Vai trabalhar arrombado, fica me pedindo essas merdas.*`;
  }}
 }}
};
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'imagine'];
export default handler;
