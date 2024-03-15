const handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = + new Date;
  user.afkReason = text;
  m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 ${conn.getName(m.sender)} 𝙴𝚂𝚃𝙰𝚁𝙰 𝙸𝙽𝙰𝚃𝙸𝚅𝙾 (𝙰𝙵𝙺), ~POR FAVOR NÃO O ENCOMODEM!!!!~*\n\n*—◉ 𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙰 𝙸𝙽𝙰𝚃𝙸𝚅𝙸𝙳𝙰𝙳𝙴 (𝙰𝙵𝙺)${text ? ': ' + text : ''}*
`);
};
handler.help = ['afk [alasan]'];
handler.tags = ['main'];
handler.command = /^afk$/i;
export default handler;
