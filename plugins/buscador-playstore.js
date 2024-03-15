import gplay from "google-play-scraper";

let handler = async (m, { conn, text }) => {
  if (!text) throw "*[❗] ME FALE O APP QUE DESEJA*";
  let res = await gplay.search({ term: text });
  if (!res.length) throw `*[❗] ME FALE O APP QUE DESEJA BUSCAR*`;
  let opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };
  await console.log(res);
  res = res.map(
    (v) =>
      `*🔍 Resultado:* ${v.title}
       *✍️ Desenvolvedor:* ${v.developer}
       *💸 Preço:* ${v.priceText}
       *📈 Puntuação:* ${v.scoreText}
        *⛓️ Link:* ${v.url}`
  ).join`\n\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet'];
handler.command = /^(playstore)$/i;
export default handler;
