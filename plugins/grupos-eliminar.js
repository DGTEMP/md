const handler = async (m, {conn, participants, command, usedPrefix}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '_*< GRUPOS - ELIMINAR />*_\n\n*[ ℹ️ ] Spy precisa ativar a função de restrição (*_restrict_*), para que o comando funcione.*';
  const kicktext = `_*< GRUPOS - ELIMINAR />*_\n\n*[ ℹ️ ] Marque ou responda a mensagem de um participante que desejas eliminar.*\n\n*[ 💡 ] Exemplo:* _${usedPrefix + command} @${global.suittag}_`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('_*< GRUPOS - ELIMINAR />*_\n\n*[ ℹ️ ] Marque ou responda a mensagem de um participante que desejas eliminar.');
  if (m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== '') {
    const mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant;
    if (conn.user.jid.includes(mentioned)) return m.reply('_*< GRUPOS - ELIMINAR />*_\n\n*[ ℹ️ ] Não vou me eliminar do grupo né seu merda.*');
    const responseb = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove');
    const exitoso1 = `_*< GRUPOS - ELIMINAR />*_\n\n*[ ℹ️ ] Participante @${mentioned.split('@')[0]} foi eliminado.*`;
    const error1 = `_*< GRUPOS - ELIMINAR />*_\n\n*[ ℹ️ ] @${mentioned.split('@')[0]} esse é o proprietário do grupo, não pode ser eliminado.*`;
    const error2 = `_*< GRUPOS - ELIMINAR />*_\n\n*[ ℹ️ ] @${mentioned.split('@')[0]} já foi eliminado ou saiu do grupo.*`;
    if (responseb[0].status === '200') m.reply(exitoso1, m.chat, {mentions: conn.parseMention(exitoso1)});
    else if (responseb[0].status === '406') m.reply(error1, m.chat, {mentions: conn.parseMention(error1)});
    else if (responseb[0].status === '404') m.reply(error2, m.chat, {mentions: conn.parseMention(error2)});
    else conn.sendMessage(m.chat, {text: `_*< GRUPOS - ELIMINAR />*_\n\n*[ ℹ️ ] Agora to muito ocupado, faça voce mesmo.*`, mentions: [m.sender], contextInfo: {forwardingScore: 999, isForwarded: true}}, {quoted: m});
  } else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
    return;
  }
};
handler.command = /^(kick|expulsar|eliminar|vaza|ban)$/i;
handler.admin = handler.group = handler.botAdmin = true;
handler.register = true
export default handler;
/* var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.includes(conn.user.jid)) return m.reply("*[❗] 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁𝙼𝙴 𝙰 𝙼𝙸 𝙼𝙸𝚂𝙼𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝙰𝙲𝙰𝙼𝙴 𝙼𝙰𝙽𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴 𝚂𝙸 𝙰𝚂𝙸 𝙻𝙾 𝙳𝙴𝚂𝙴𝙰𝚂*")
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return m.reply(`¿De verdad vas a banear a todos?`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await conn.groupParticipantsUpdate(m.chat, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
conn.sendMessage(m.chat, {text: `${sexocomrato} participante elimanado del grupo.`, mentions: [m.sender], contextInfo:{forwardingScore:999, isForwarded:true}}, {quoted: m})
} else {
let responseb3 = await conn.groupParticipantsUpdate(m.chat, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") conn.sendMessage(m.chat, {text: `@${mentioned[0].split("@")[0]} fue eliminado exitosamente del grupo.️`, mentions: [mentioned[0], m.sender], contextInfo:{forwardingScore:999, isForwarded:true}}, {quoted: m})
else if (responseb3[0].status === "406") conn.sendMessage(m.chat, {text: `@${mentioned[0].split("@")[0]} creó este grupo y no puede ser eliminado.`, mentions: [mentioned[0], m.sender], contextInfo:{forwardingScore:999, isForwarded:true}}, {quoted: m})
else if (responseb3[0].status === "404") conn.sendMessage(m.chat, {text: `@${mentioned[0].split("@")[0]} ya ha sido eliminado o abandonado el grupo`, mentions: [mentioned[0], m.sender], contextInfo:{forwardingScore:999, isForwarded:true}}, {quoted: m})
else conn.sendMessage(m.chat, {text: `A ocurrido un error.`, mentions: [m.sender], contextInfo:{forwardingScore:999, isForwarded:true}}, {quoted: m})
}*/
