import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `_*< SPY - IA - BARD />*_\n\n*[ ℹ️ ] Pergunte algo.*\n\n*[ 💡 ] Exemplo:* _${usedPrefix + command} Olá, como estás?_`;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const API_URL = `https://vihangayt.me/tools/bard?q=${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw '_*< SPY - IA - BARD - GEMINI />*_\n\n*[ ℹ️ ] Não consegui encontrar uma resposta válida.*';
    }
  } catch (error) {
    throw `_*< SPY - IA - BARD />*_\n\n*[ ℹ️ ] ERRO, Por favor contate meu mestre Spy 554884702848.*`;
  }
};

handler.command = /^spy$/i;

export default handler;
