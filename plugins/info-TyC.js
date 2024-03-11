const handler = async (m, {conn}) => {
  m.reply(global.terminos);
};
handler.customPrefix = /términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|condições|condiciones|termos|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones/i;
handler.command = new RegExp;
export default handler;

global.terminos = `
*=> O desconhecimento do que é mencionado aqui não isenta o proprietário do Bot, Sub Bot ou usuário do bot das sanções que possam surgir❗*

⚠️ *Termos de Privacidade*
_1.- As informações recebidas pelo Bot NÃO são compartilhadas com terceiros ou com nadie_
_2.- Imagens/vídeos/adesivos/áudios/etc não são compartilhados com nadie_
_3.- Seu número de telefone não é compartilhado_
_4.- Dados do cartão, locais, endereços, etc. são excluídos imediatamente e não são compartilhados_
_5.- Todas as conversas são excluídas de tempos em tempos e nenhuma informação é armazenada (não salva) de qualquer tipo de informação/conversação_

⚠️ *Termos de Uso*
_1.- Não nos responsabilizamos por qualquer uso indevido do Bot_
_2.- Não nos responsabilizamos por desconhecimento e/ou desconhecimento da tema_
_3.- O Bot não fica ativo 24 horas, a menos que o proprietário decida o contrário_
_4.- A "empresa" não se responsabiliza pelo uso de um Sub Bot ou Bot não oficial, pois são pessoas (terceiros) e não temos controle sobre ell@s_
_5.- Não nos responsabilizamos pelos números que possam ir para suporte devido ao uso do Bot, é sempre aconselhável utilizar números virtuais para Bots_
_6.- Os áudios/notas de voz/imagens/vídeos ou qualquer outro arquivo multimídia que sejam de propriedade do The Spy - Bot são única e exclusivamente deste Bot, se outro Bot for detectado com um ou alguns dos arquivos multimídia acima mencionados, ação será tomada no asunto._

*➤ Mensagem do número do bot?*
_- Se em algum momento você receber uma mensagem do número do Bot e não for um comando, possivelmente é do dono do Bot ou do dono do número, esta é uma pessoa real, então você é solicitado a não perder o respeito_

*➤ Base usada para este Bot:*
*- https://github.com/SpyHackera/games-wabot-md*

*➤ Agradecimentos:*
*- Spy*
*- SpyHacker*
*- BochilGame*
*- Unnxteam*
*- Bochilteam*
*- ConfMods*
*- SpyCris*
*- HiroSH*
*- The.sad.boy*
*- botstylee*
*- CristianoA*
*- FatihArridho*
*- Adiwajshing*
*- MaurícioSpy*
*- Etc.*

*! ?️ Ficou com alguma dúvida?*
_- Se você ainda tiver alguma dúvida ou reclamação sobre o que é mencionado aqui ou sobre o Bot, entre em contato comigo no meu número pessoal ao qual responderei o mais breve possível para lhe fornecer uma solução e/ou assumir a responsabilidade por qualquer reclamação_ 

> wa.me/554884702848
> SpyHacker
> livepix.gg/luizaa

*∆ THE SPY - BOT - MD ∆*`;
