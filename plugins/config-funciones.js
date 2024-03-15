const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
const optionsFull = `_*< FUNÇOES do BOT />*_\n 
▢ *Opção:* ✨ | WELCOME
▢ *Comando:* ${usedPrefix + command} welcome
▢ *Descrição:* Ativa ou desativa a boa vinda a novos membros neste grupo.

--------------------------------

▢ *Opção:* 🌎 | MODO PUBLICO
▢ *Comando:* ${usedPrefix + command} public
▢ *Descrição:* O bot estará ativo somente para owner ou para todos.
▢ *Nota:* Este comando só pode ser usado pelo Spy.

--------------------------------

▢ *Opção:* 🥵 | MODO HORNY
▢ *Comando:* ${usedPrefix + command} modohorny
▢ *Descrição:* Ativa ou desativa os comandos +18 neste grupo.

--------------------------------

▢ *Opção:* 🔗 | ANTILINK
▢ *Comando:* ${usedPrefix + command} antilink
▢ *Descrição:* Ativa ou desativa o anti-links de WhatsApp.
▢ *Nota:* Necessita ter Ativa la função restrict.

--------------------------------

▢ *Opção:* 🔗 | ANTILINK 2
▢ *Comando:* ${usedPrefix + command} antilink2
▢ *Descrição:* Ativa ou desativa o anti-links que inicião em HTTPS.
▢ *Nota:* Necesita ter Ativa a função restrict.

--------------------------------

▢ *Opção:* 🔎 | DETECT
▢ *Comando:* ${usedPrefix + command} detect
▢ *Descrição:* Ativa ou desativa as notificações de trocas neste grupo.

--------------------------------

▢ *Opção:* 🔎 | DETECT 2
▢ *Comando:* ${usedPrefix + command} detect2
▢ *Descrição:* Detecta modificações no grupo para ajudar a manter uma melhor gestão.
--------------------------------

▢ *Opção:* ❗ | RESTRICT
▢ *Comando:* ${usedPrefix + command} restrict
▢ *Descrição:* Ativa ou desativa as restricciones do Bot, como a de remover ou adcionar pessoas a um grupo.
▢ *Nota:* Este comando só pode ser usado pelo Spy.

--------------------------------

▢ *Opção:* ☑️ | AUTOREAD
▢ *Comando:* ${usedPrefix + command} autoread
▢ *Descrição:* Marca como lido todas as mensagens e os status automáticamente.
▢ *Nota:* Este comando só pode ser usado pelo Spy.

--------------------------------

▢ *Opção:* 🔊 | AUDIOS
▢ *Comando:* ${usedPrefix + command} audios
▢ *Descrição:* Ativa ou desativa os comandos de audios sen prefixos, messe grupo.

--------------------------------

▢ *Opção:* 👾 | AUTOSTICKER
▢ *Comando:* ${usedPrefix + command} autosticker 
▢ *Descrição:* Todas as imagenes o videos enviados neste grupo se conviertem em stickers sem precisar enviar comando. 

--------------------------------

▢ *Opção:* 💬 | PCONLY
▢ *Comando:* ${usedPrefix + command} pconly
▢ *Descrição:* O Bot só responderá aos comandos em um chat privado.
▢ *Nota:* Este comando só pode ser usado pelo Spy.

--------------------------------

▢ *Opção:* 🏢 | GCONLY
▢ *Comando:* ${usedPrefix + command} gconly
▢ *Descrição:* O Bot só responderá aos comandos em um grupo. 
▢ *Nota:* Este comando só pode ser usado pelo Spy.

--------------------------------

▢ *Opção:* ❌ | ANTIVIEWONCE 
▢ *Comando:* ${usedPrefix + command} antiviewonce
▢ *Descrição:* As imagens enviadas para ver só uma vez, são reenviadas pelo Bot. 

--------------------------------

▢ *Opção:* 📵 | ANTICHAMADAS
▢ *Comando:* ${usedPrefix + command} anticall
▢ *Descrição:* O Bot bloquerá as pessoas que realizem uma ligação ao Bot. 
▢ *Nota:* Este comando só poderá ser usado por owners do Bot.

--------------------------------

▢ *Opção:* 🤬 | ANTITOXIC
▢ *Comando:* ${usedPrefix + command} antitoxic
▢ *Descrição:* Detecta as palavras mal intencionadas e advierte o participante do grupo, antes de ser eliminado.
▢ *Nota:* Se necesita ter ativa a função restrict.

--------------------------------

▢ *Opção:* 🕸️ | ANTITRABAS
▢ *Comando:* ${usedPrefix + command} antitraba
▢ *Descrição:* O Bot detecta textos longos que podem ser virus e causar lag no chat e elimina o usuário.
▢ *Nota:* Se necesita ter ativa a função restrict.

--------------------------------

▢ *Opção:* 👎 | ANTIARABES
▢ *Comando:* ${usedPrefix + command} antiarabes
▢ *Descrição:* Se um numero árabe se une ao grupo, o Bot irá elimina-lo automaticamente.
▢ *Nota:* Se necesita ter ativo welcome e restrict.

--------------------------------

▢ *Opção:* 👎 | ANTIARABES 2
▢ *Comando:* ${usedPrefix + command} antiarabes2
▢ *Descrição:* Se um numero árabe se une ao grupo, o Bot irá elimina-lo automaticamente.
▢ *Nota:* Se necesita ter ativa a função restrict.

--------------------------------

▢ *Opção:* 👑 | MODOADMIN
▢ *Comando:* ${usedPrefix + command} modoadmin
▢ *Descrição:* O Bot só responderá as mensagens enviadas pelos admins. do grupo.

--------------------------------

▢ *Opção:* 😃 | SIMSIMI
▢ *Comando:* ${usedPrefix + command} simsimi
▢ *Descrição:* O Bot passará a responder a todas as mensagens usando a IA de SimSimi.

--------------------------------

▢ *Opção:* 🛡️ | ANTIDELETE
▢ *Comando:* ${usedPrefix + command} antidelete
▢ *Descrição:* O Bot detecta quando um usuário elimina uma mensagem e reenvia.

--------------------------------

▢ *Opção:* 🔊 | AUDIOS_BOT
▢ *Comando:* ${usedPrefix + command} audios_bot
▢ *Descrição:* Desativa os audios do Bot do menuaudios para todos os chats privados.
▢ *Nota:* Este comando só pode ser usado pelo Spy.

--------------------------------

▢ *Opção:* 🤖 | MODOIA
▢ *Comando:* ${usedPrefix + command} modoia
▢ *Descrição:* Se ativa o modo "Inteligencia Artificial" com ChatGPT em todos os chats privados.
▢ *Nota:* Este comando só pode ser usado pelo Spy.

--------------------------------

▢ *Opção:* ⏳ | ANTISPAM
▢ *Comando:* ${usedPrefix + command} antispam
▢ *Descrição:* O Bot detecta quando um usuario faz spam de comando e o bane por 5 segundos e o adverte.
▢ *Nota:* Este comando só pode ser usado pelo Spy.

--------------------------------

▢ *Opção:* 🤖 | MODO-SUB
▢ *Comando:* ${usedPrefix + command} modejadibot
▢ *Descrição:* Ativa ou desativa o uso do comando para sub bots (${usedPrefix}serbot. 
▢ *Nota:* Este comando só pode ser usado pelo Spy.

--------------------------------

▢ *Opção:* 💬 | ANTIPRIVADO
▢ *Comando:* ${usedPrefix + command} antiprivado
▢ *Descrição:* O Bot bloqueará as pessoas que escrevam no privado do Bot. 
▢ *Nota:* Este comando só pode ser usado pelo Spy.`.trim();

  const isEnable = /true|ativa|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'doete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.doete = isEnable;
      break;
    case 'antidoete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidoete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
      case 'game': case 'juegos': case 'fun': case 'ruleta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `_*< FUNÇÕES do BOT />*_\n\n*[ ℹ️ ] A Opção* _${type}_ *foi* ${isEnable ? '_ATIVADA_' : '_DESATIVADA_'} *exitosamente para este* ${isAll ? '_bot._' : isUser ? '' : '_chat._'}`}, {quoted: m});
  //conn.sendMessage(m.chat, {text: `▢ *Opção:* ${type}\n\n▢ *Estado:* ${isEnable ? 'Ativado' : 'desativado'}\n\n▢ *Para* ${isAll ? 'este bot' : isUser ? '' : 'este chat'}`}, {quoted: m});
};
handler.command = /^((a|desa)tiva|(tru|fals)e|(turn)?[01])$/i;
export default handler;
