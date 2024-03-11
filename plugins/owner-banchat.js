const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*[❗𝐈𝐍𝐅𝐎❗] Ok mestre*\n\n*—◉ O bot não responderá a mais nenhum comando até remover a restrição nesse chat*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
