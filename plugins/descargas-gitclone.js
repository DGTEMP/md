import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `_*< DOWNLOAD - GITCLONE />*_\n\n*[ ℹ️ ] Ingrese um link do GitHub.*\n\n*[ 💡 ] Exemplo:* _${usedPrefix + command} https://github.com/Spy/spynevd_`;
  if (!regex.test(args[0])) throw '_*< DOWNLOAD - GITCLONE />*_\n\n*[ ℹ️ ] Link incorreto.*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`_*< DOWNLOAD - GITCLONE />*_\n\n*[ ℹ️ ] Já vou mandar teu arquivo. espere...*\n\n*[ ℹ️ ] Se não envíar, é porque supera o limite estabelecido pelo 
  WhatsApp.*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.command = /gitclone/i;
export default handler;
