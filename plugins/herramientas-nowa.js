/* ---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Alberto Y Ashly⚘
-----------------------------------------------------------------------------------------*/
const handler = async (m, {conn, text, usedPrefix, command}) => {
  const regex = /x/g;
  if (!text) throw '⚠️ Falta o número.';
  if (!text.match(regex)) throw `*Exemplo de uso: ${usedPrefix + command} 554884702848x*`;
  const random = text.match(regex).length; const total = Math.pow(10, random); const array = [];
  for (let i = 0; i < total; i++) {
    const list = [...i.toString().padStart(random, '0')];
    const result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net';
    if (await conn.onWhatsApp(result).then((v) => (v[0] || {}).exists)) {
      const info = await conn.fetchStatus(result).catch((_) => {});
      array.push({exists: true, jid: result, ...info});
    } else {
      array.push({exists: false, jid: result});
    }
  }
  const txt = '*Registrados*\n\n' + array.filter((v) => v.exists).map((v) => `• Nro: wa.me/${v.jid.split('@')[0]}\n*• Bio:* ${v.status || 'Sen descrição'}\n*• Data:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*Não registrados*\n\n' + array.filter((v) => !v.exists).map((v) => v.jid.split('@')[0]).join('\n');
  m.reply(txt);
};
handler.command = /^nowa$/i;
export default handler;
function formatDate(n, locale = 'id') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {timeZone: 'Asia/Jakarta'});
}
