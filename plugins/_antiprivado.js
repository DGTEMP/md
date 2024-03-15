// TheMystic-Bot-MD@BrunoSobrino - _antiprivado.js

export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA','PEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA','TESOURA') || m.text.includes('serbot') || m.text.includes('SPY')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`_*< ANTI-PRIVADO />*_\n\n*[ ℹ️ ] Não tenho permissão para falar com você, por isso vou te bloquear! Caso isso seja um erro e tenha prints como prova, podes pedir ao meu mestre que te desbloqueie. @PapaiSpy 554884702848*`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
