import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `_*< IA - CHARACTER.AI />*_\n\n*[ ℹ️ ] Escreva um texto.*\n\n*[ 💡 ] Exemplo:* _${usedPrefix + command} Olá, como estás?_`;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const API_URL = `https://vihangayt.me/tools/characterai?q=${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw '_*< IA - CHARACTER.AI />*_\n\n*[ ℹ️ ] Não pude obter uma resposta válida.*';
    }
  } catch (error) {
    throw `_*< IA - CHARACTER.AI />*_\n\n*[ ℹ️ ] Ocorreu um erro.*`;
  }
};

handler.command = /^aicharacter$/i;

export default handler;
