const handler = async (m, {conn, args}) => {
  await conn.groupUpdateDescription(m.chat, `${args.join(' ')}`);
  m.reply('*✅ A descrição do grupo mudou, mande um emoticon aqui nessa mensagem para confirmar que leu e não ser removido do grupo*');
};
handler.help = ['Setdesc <text>'];
handler.tags = ['group'];
handler.command = /^setdesk|setdesc$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
