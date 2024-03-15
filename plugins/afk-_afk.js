export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  *[❗𝐈𝐍𝐅𝐎❗] 𝙳𝙴𝙹𝙰𝚂𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 (𝙰𝙵𝙺)${user.afkReason ? ' 𝙴𝚂𝚃𝙰𝚁 𝙸𝙽𝙰𝚃𝙸𝚅𝙾 (𝙰𝙵𝙺) 𝙿𝙾𝚁 𝙼𝙾𝚃𝙸𝚅𝙾: ' + user.afkReason : ''}*
  
  *—◉ 𝚃𝙴𝙼𝙿𝙾 𝙳𝙴 𝙸𝙽𝙰𝚃𝙸𝚅𝙸𝙳𝙰𝙳𝙴 (𝙰𝙵𝙺): ${(new Date - user.afk).toTimeString()}*
  `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`*[❗] _~AVISO~_ [❗]*

*—◉ Esse úsuario que está a mencionar não está disponível no momento (𝙰𝙵𝙺)*      
*—◉ ${reason ? '𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴 𝙸𝙽𝙰𝚃𝙸𝚅𝙸𝙳𝙰𝙳𝙴 (𝙰𝙵𝙺): ' + reason : '𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴 𝙸𝙽𝙰𝚃𝙸𝚅𝙸𝙳𝙰𝙳𝙴 (𝙰𝙵𝙺): _Não é da sua conta!_'}*
*—◉ 𝚃𝙴𝙼𝙿𝙾 𝙳𝙴 𝙸𝙽𝙰𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): ${(new Date - afkTime).toTimeString()}*
  `.trim());
  }
  return true;
}
