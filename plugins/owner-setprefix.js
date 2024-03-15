const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] Não foi encontrado nenhum prefixo, por favor escolha um para estabelecer. Exemplo:* ${usedPrefix + command} /`;
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
  await m.reply(`*[❗] Certo mestre, meu novo prefixo agora é ${text}*`);
};
handler.help = ['setprefix'].map((v) => v + ' [prefix]');
handler.tags = ['owner'];
handler.command = /^(setprefix)$/i;
handler.rowner = true;
export default handler;
