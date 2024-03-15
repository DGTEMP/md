const handler = async (m, {command, text}) => m.reply(`
*⁉️ 𝐏𝐄𝐑𝐆𝐔𝐍𝐓𝐀𝐒 ⁉️*
  
*𝙿𝙴𝚁𝙶𝚄𝙽𝚃𝙰:* ${text}
*𝚁𝙴𝚂𝙿𝙾𝚂𝚃𝙰:* ${['Sim', 'Talvez sim','Spy quem decide', 'Posivelmente', 'Provavelmente não', 'Não', 'Só se o Spy deixar', 'Impossível '].getRandom()}
`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
handler.help = ['pregunta <texto>?'];
handler.tags = ['kerang'];
handler.command = /^pergunta|perguntas|sera$/i;
export default handler;
