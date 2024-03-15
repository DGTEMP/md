const handler = async (m, {conn, isPrems}) => {
  let enviando;
  if (enviando) return
  enviando = true
  const hasil = Math.floor(Math.random() * 5000);
  const time = global.db.data.users[m.sender].lastwork + 600000;
  if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `⚔️ *Espere um momento pequeno aventureiro!* ⚔️\n\n*—◉ Retorno à travessia em ${msToTime(time - new Date())} ⏳*`;
  conn.sendMessage(m.chat, {text: `🏞️ *Agora vais embarcar em uma emocionante aventura:*\n\n🛠️ *${pickRandom(global.work)}*\n\n*Ganhasse ${hasil} exp por tua bravura!*`}, {quoted: m});
  global.db.data.users[m.sender].exp += hasil;
  global.db.data.users[m.sender].lastwork = new Date() * 1;
  enviando = false
};
handler.help = ['work'];
handler.tags = ['xp'];
handler.command = /^(w|trabalhar|trab)$/i
handler.fail = null;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' minutos ' + seconds + ' segundos ';
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.work = [
  "Você é um mestre alquimista, destilando poções misteriosas em busca de segredos perdidos.",
  "Você se torna um intrépido caçador de tesouros, explorando lugares esquecidos em busca de riquezas escondidas.",
  "Você dirige um negócio de transmutação de metais, transformando o comum em tesouros valiosos.",
  "Você explora ruínas antigas e encontra uma relíquia valiosa que lhe concede conhecimentos ancestrais.",
  "Você trabalha como mercenário em uma guerra épica, enfrentando desafios com sua habilidade e coragem.",
  "Você é um pesquisador do paranormal, descobrindo os segredos ocultos do mundo espiritual.",
  "Você treina dragões para corridas, formando laços com essas majestosas criaturas aladas.",
  "Você se torna o melhor ferreiro da cidade, forjando armas lendárias e artefatos poderosos.",
  "Você descobre uma floresta encantada cheia de criaturas mágicas, estabelecendo uma conexão única com a natureza.",
  "Você é um domador de feras ferozes, controlando as criaturas mais selvagens com seu domínio animal.",
  "Você viaja no tempo e resolve problemas históricos, influenciando o destino de civilizações passadas.",
  "Você é um conselheiro real, fornecendo sabedoria e conselho a governantes e líderes.",
  "Você desenvolve tecnologia futurista, impulsionando a inovação e mudando o rumo do mundo.",
  "Você é um mestre na arte da persuasão, convencendo os outros com sua eloquência e astúcia.",
  "Você pilota um mecha gigante em batalhas épicas, defendendo a terra com sua habilidade na máquina de guerra.",
  "Você dirige uma fazenda de dragões, cuidando dessas majestosas criaturas e criando dragões únicos.",
  "Você é um espião internacional, infiltrando-se em organizações secretas e desmascarando complôs sombrios.",
  "Você explora o espaço e faz descobertas surpreendentes que lhe dão uma visão única do universo.",
  "Você é um mágico renomado, realizando truques impressionantes e conjurando feitiços mágicos.",
  "Você é um cientista louco, criando invenções extravagantes e experimentos incomuns.",
  "Você defende o reino contra um exército invasor, liderando exércitos e demonstrando sua bravura na batalha.",
  "Você é um navegador audaz, explorando mares desconhecidos e descobrindo ilhas cheias de tesouros.",
  "Você é um mestre na arte do sigilo, movendo-se nas sombras e realizando missões secretas.",
  "Você é um chef renomado, criando pratos deliciosos que encantam os paladares de todo o mundo.",
  "Você investiga crimes complexos como um detetive habilidoso, resolvendo mistérios intrigantes.",
  "Você é um diplomata habilidoso, negociando tratados e alianças para manter a paz entre as nações.",
  "Você é um xamã poderoso, canalizando energias espirituais para curar e proteger.",
  "Você desenvolve aplicativos mágicos para dispositivos encantados, melhorando a vida das pessoas com suas invenções.",
  "Você é um campeão em torneios de luta, demonstrando sua habilidade em combate corpo a corpo.",
  "Você é um arquiteto visionário, projetando cidades futuristas e estruturas impressionantes.",
  "Você é um psíquico com habilidades sobrenaturais, explorando as mentes e prevendo o futuro.",
  "Você é um famoso diretor de cinema, criando histórias épicas que cativam o público.",
  "Você é um astrônomo e descobre um novo planeta, ampliando nosso conhecimento do cosmos.",
  "Você é um especialista em sobrevivência, enfrentando os perigos do mundo com engenho e coragem.",
  "Você é um músico talentoso que toca em concertos massivos, enchendo o ar com melodias cativantes.",
  "Você é um explorador submarino, mergulhando nas profundidades para descobrir tesouros esquecidos.",
  "Você é um designer de moda reconhecido, criando tendências e vestindo as pessoas com seu estilo único.",
  "Você é um líder revolucionário, lutando por um mundo melhor e guiando as massas para a liberdade.",
  "Você é um médico que descobre uma cura para uma doença mortal, salvando inúmeras vidas.",
  "Você é um hacker de computador."
]
;
