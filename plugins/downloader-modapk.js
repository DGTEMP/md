import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*[❗] Escreva o nome do app que quer buscar.*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `📲 *DOWNLOAD APP* 📲\n\n📌 *Nome:* ${data5.name}\n📦 *Package:* ${data5.package}\n🕒 *Última actualização:* ${data5.lastup}\n📥 *Tamanho:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] Arquivo pesado demais, não vou poder enviar.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*[❗] ERRO.*`;
  }    
};
handler.command = /^(apkmod|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
