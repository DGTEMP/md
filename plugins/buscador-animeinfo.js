import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] INGRESE 𝙾 NOME DE ALGU𝙼 ANIME A BUSCAR*`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `
🎀 • *Título:* ${result.title}
🎋 • *Formato:* ${result.type}
📈 • *Status:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
🍥 • *Episodios totales:* ${result.episodes}
🎈 • *Duraçãon: ${result.duration}*
✨ • *Basado em:* ${result.source.toUpperCase()}
💫 • *Estreando:* ${result.aired.from}
🎗 • *Finalizado:* ${result.aired.to}
🎐 • *Popularidade:* ${result.popularity}
🎏 • *Favoritos:* ${result.favorites}
🎇 • *Clasificação:* ${result.rating}
🏅 • *Nível:* ${result.rank}
♦ • *Trailer:* ${result.trailer.url}
🌐 • *URL:* ${result.url}
🎆 • *Background:* ${resultes.text}
❄ • *Ringkasan:* ${resultes2.text}`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*[❗] ERRO*`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;
