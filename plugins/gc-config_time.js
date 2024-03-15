/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */

const handler = async (m, {conn, isAdmin, isOwner, args, usedPrefix, command}) => {
  if (!(isAdmin || isOwner)) {
	  global.dfail('admin', m, conn);
    throw false;
  }
  const isClose = {
	  'open': 'not_announcement',
	  'buka': 'not_announcement',
    'on': 'not_announcement',
	  '1': 'not_announcement',
	  'close': 'announcement',
	  'tutup': 'announcement',
    'off': 'announcement',
    '0': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
	  const caption = `
*• Exemplo:*
*${usedPrefix + command} open 1*
*${usedPrefix + command} close 1*
📌 *_Exemplo de uso:_* *${usedPrefix + command} close 1* 
*_🌿 Para que o grupo fique fechado por 1 hora._*
`;
    m.reply(caption);
	  throw false;
  }
  const timeoutset = 86400000 * args[1] / 24;
  await conn.groupSettingUpdate(m.chat, isClose).then(async (_)=> {
	  m.reply(`⚠️ *_Grupo ${isClose == 'announcement' ? 'fechado' : 'aberto'} ${args[1] ? `durante *${clockString(timeoutset)}_*` : ''}`);
  });
  if (args[1]) {
	 setTimeout(async () => {
      await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async (_)=>{
		    conn.reply(m.chat, `${isClose == 'not_announcement' ? '*O grupo foi fechado com sucesso! Agora somente administradores podem enviar mensagens!*' : '*O grupo foi aberto, agora todos os membros já podem enviar mensagens!*'}!`);
	    });
    }, timeoutset);
  }
};
handler.help = ['grouptime *<open/close>* *<número>*'];
handler.tags = ['group'];
handler.command = /^(grouptime|gptime)$/i;

handler.botAdmin = true;
handler.group = true;

export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}
