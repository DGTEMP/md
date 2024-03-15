import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const fs = require('fs');
const imagen4 = fs.readFileSync('./pp'); // substitua isso pelo caminho da sua imagem
const pp = imagen4;

    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == ativa).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = ` 🤖 *丂ｱﾘ-乃oｲ* 🤖

 ▢ *Salve,* ${taguser}

_*Spy domina*_

*Número: 554884702848*
*Server: livepix.gg/luizaa*


 _*< TUAS ESTATÍSTICAS />*_

 ▢ *Nivel:* ${level}
 ▢ *Experiência:* ${exp}
 ▢ *Patente:* ${role}
 ▢ *Grana:* ${limit}
 ▢ *SpyCoins:* ${money}
 ▢ *Tokens:* ${joincount}
 ▢ *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}

 _*< BOT />*_

  ▢ _${usedPrefix}termos_
  ▢ _${usedPrefix}grupos_
  ▢ _${usedPrefix}estado_
  ▢ _${usedPrefix}infobot_
  ▢ _${usedPrefix}speedtest_
  ▢ _${usedPrefix}doar_
  ▢ _${usedPrefix}owner_
  ▢ _${usedPrefix}script_
  ▢ _${usedPrefix}reporte *<txt>*_
  ▢ _${usedPrefix}join *<wagp_url>*_
  ▢ _${usedPrefix}fixmsgespera_
  ▢ _bot_ (sem prefixo)


 _*< SUB-BOTS />*_

  ▢ _${usedPrefix}serbot --code_
  ▢ _${usedPrefix}serbot_
  ▢ _${usedPrefix}deletebot_
  ▢ _${usedPrefix}token_
  ▢ _${usedPrefix}stop_
  ▢ _${usedPrefix}bots_
  ▢
  ▢ _${usedPrefix}ativa restrict_
  ▢ _${usedPrefix}desativa restrict_
  ▢ _${usedPrefix}ativa autoread_
  ▢ _${usedPrefix}desativa autoread_
  ▢ _${usedPrefix}ativa antispam_
  ▢ _${usedPrefix}desativa antispam_
  ▢ _${usedPrefix}ativa anticall_
  ▢ _${usedPrefix}desativa anticall_
  ▢ _${usedPrefix}ativa modoia_
  ▢ _${usedPrefix}desativa modoia_
  ▢ _${usedPrefix}ativa audios_bot_
  ▢ _${usedPrefix}desativa audios_bot_
  ▢ _${usedPrefix}ativa antiprivado_
  ▢ _${usedPrefix}desativa antiprivado_
  

 _*< DOWNLOADS  />*_

 ▢ _${usedPrefix}play *<txt>*_
 ▢ _${usedPrefix}play2 *<txt>*_
 ▢ _${usedPrefix}play.1 *<txt>*_
 ▢ _${usedPrefix}play.2 *<txt>*_
 ▢ _${usedPrefix}playdoc *<txt>*_
 ▢ _${usedPrefix}playdoc2 *<txt>*_
 ▢ _${usedPrefix}playlist *<txt>*_
 ▢ _${usedPrefix}ytshort *<url>*_
 ▢ _${usedPrefix}ytmp3 *<url>*_
 ▢ _${usedPrefix}ytmp3doc *<url>*_
 ▢ _${usedPrefix}ytmp4 *<url>*_
 ▢ _${usedPrefix}ytmp4doc *<url>*_
 ▢ _${usedPrefix}videodoc *<url>*_
 ▢ _${usedPrefix}spotify *<txt>*_
 ▢ _${usedPrefix}facebook *<url>*_
 ▢ _${usedPrefix}instagram *<url>*_
 ▢ _${usedPrefix}igstory *<usr>*_
 ▢ _${usedPrefix}tiktok *<url>*_
 ▢ _${usedPrefix}tiktokimg *<url>*_
 ▢ _${usedPrefix}pptiktok *<usr>*_
 ▢ _${usedPrefix}mediafire *<url>*_ 
 ▢ _${usedPrefix}pinterest *<txt>*_
 ▢ _${usedPrefix}gitclone *<url>*_
 ▢ _${usedPrefix}gdrive *<url>*_
 ▢ _${usedPrefix}twitter *<url>*_
 ▢ _${usedPrefix}ringtone *<txt>*_
 ▢ _${usedPrefix}soundcloud *<txt>*_
 ▢ _${usedPrefix}stickerpack *<url>*_
 ▢ _${usedPrefix}wallpaper *<txt>*_ 
 ▢ _${usedPrefix}dapk2 *<url>*_
 ▢ _${usedPrefix}xnxxdl *<url>*_ (🔞)
 ▢ _${usedPrefix}xvideosdl *<url>*_ (🔞)


 _*< BUSCADORES />*_

  ▢ _${usedPrefix}previa *<título>*_
  ▢ _${usedPrefix}githubsearch *<txt>*_
  ▢ _${usedPrefix}pelisplus *<txt>*_
  ▢ _${usedPrefix}modapk *<txt>*_
  ▢ _${usedPrefix}stickersearch *<txt>*_
  ▢ _${usedPrefix}stickersearch2 *<txt>*_
  ▢ _${usedPrefix}xnxxsearch *<txt>*_
  ▢ _${usedPrefix}animeinfo *<txt>*_
  ▢ _${usedPrefix}google *<txt>*_
  ▢ _${usedPrefix}letra *<txt>*_
  ▢ _${usedPrefix}wikipedia *<txt>*_
  ▢ _${usedPrefix}ytsearch *<txt>*_
  ▢ _${usedPrefix}playstore *<txt>*_


 _*< GRUPOS />*_
  ▢ _${usedPrefix}adv *<@tag>*_
  ▢ _${usedPrefix}add *num>*_
  ▢ _${usedPrefix}vaza *<@tag>*_
  ▢ _${usedPrefix}kick2 *<@tag>*_
  ▢ _${usedPrefix}listanum *<txt>*_
  ▢ _${usedPrefix}kicknum *<txt>*_
  ▢ _${usedPrefix}grupo *<a/f>*_
  ▢ _${usedPrefix}grouptime *<opc> <tempo>*_
  ▢ _${usedPrefix}promote *<@tag>*_
  ▢ _${usedPrefix}demote *<@tag>*_
  ▢ _${usedPrefix}infogroup_
  ▢ _${usedPrefix}resetlink_
  ▢ _${usedPrefix}link_
  ▢ _${usedPrefix}setname *<txt>*_
  ▢ _${usedPrefix}setdesc *<txt>*_
  ▢ _${usedPrefix}invocar *<txt>*_
  ▢ _${usedPrefix}setwelcome *<txt>*_
  ▢ _${usedPrefix}setbye *<txt>*_
  ▢ _${usedPrefix}@ *<txt>*_
  ▢ _${usedPrefix}hidetag *<audio>*_
  ▢ _${usedPrefix}hidetag *<video>*_
  ▢ _${usedPrefix}hidetag *<img>*_
  ▢ _${usedPrefix}warn *<@tag>*_
  ▢ _${usedPrefix}unwarn *<@tag>*_
  ▢ _${usedPrefix}listwarn_
  ▢ _${usedPrefix}fantasmas_
  ▢ _${usedPrefix}destrava_
  ▢ _${usedPrefix}setpp *<img>*_
  ▢ _admins *<txt>*_ (sem prefixo)


 _*< EFEITOS P. AUDIOS />*_

*- Responda um audio ou nota de voz.*

  ▢ _${usedPrefix}bass_
  ▢ _${usedPrefix}blown_
  ▢ _${usedPrefix}deep_
  ▢ _${usedPrefix}earrape_
  ▢ _${usedPrefix}fast_
  ▢ _${usedPrefix}fat_
  ▢ _${usedPrefix}nightcore_
  ▢ _${usedPrefix}reverse_
  ▢ _${usedPrefix}robot_
  ▢ _${usedPrefix}slow_
  ▢ _${usedPrefix}smooth_
  ▢ _${usedPrefix}tupai_


 _*< CHAT ANÔNIMO />*_

  ▢ _${usedPrefix}start_
  ▢ _${usedPrefix}next_
  ▢ _${usedPrefix}leave_


 _*< FERRAMENTAS />*_
 
  ▢ _${usedPrefix}inspect *<wagc_url>*_
  ▢ _${usedPrefix}chatgpt *<txt>*_
  ▢ _${usedPrefix}delchatgpt
  ▢ _${usedPrefix}gptvoz *<txt>*_
  ▢ _${usedPrefix}dall-e *<txt>*_
  ▢ _${usedPrefix}spamwa *num|txt|cant>*_
  ▢ _${usedPrefix}tamaño *<cant> <img / video>*_
  ▢ _${usedPrefix}readviewonce *<img / video>*_
  ▢ _${usedPrefix}clima *<país> <cidade>*_
  ▢ _${usedPrefix}encuesta *<txt1|txt2>*_
  ▢ _${usedPrefix}afk *<motivo>*_
  ▢ _${usedPrefix}ocr *<responda img>*_
  ▢ _${usedPrefix}hd *<responda img>*_
  ▢ _${usedPrefix}acortar *<url>*_
  ▢ _${usedPrefix}calc *<operação>*_
  ▢ _${usedPrefix}del *<msg>*_
  ▢ _${usedPrefix}whatmusic *<audio>*_
  ▢ _${usedPrefix}readqr *<img>*_
  ▢ _${usedPrefix}qrcode *<txt>*_
  ▢ _${usedPrefix}readmore *<txt1|txt2>*_
  ▢ _${usedPrefix}styletext *<txt>*_
  ▢ _${usedPrefix}trad *<txt>*_
  ▢ _${usedPrefix}nowa *num>*_
  ▢ _${usedPrefix}covid *<pais>*_
  ▢ _${usedPrefix}hora_
  ▢ _${usedPrefix}dropmail_
  ▢ _${usedPrefix}igstalk *<user>*_
  ▢ _${usedPrefix}tiktokstalk *<user>*_
  ▢ _${usedPrefix}img *<txt>*_


 _*< EFEITOS P. AUDIOS />*_

*- Responda um audio ou nota de voz.*

  ▢ _${usedPrefix}bass_
  ▢ _${usedPrefix}blown_
  ▢ _${usedPrefix}deep_
  ▢ _${usedPrefix}earrape_
  ▢ _${usedPrefix}fast_
  ▢ _${usedPrefix}fat_
  ▢ _${usedPrefix}nightcore_
  ▢ _${usedPrefix}reverse_
  ▢ _${usedPrefix}robot_
  ▢ _${usedPrefix}slow_
  ▢ _${usedPrefix}smooth_
  ▢ _${usedPrefix}tupai_


 _*< CHAT ANÔNIMO />*_

  ▢ _${usedPrefix}start_
  ▢ _${usedPrefix}next_
  ▢ _${usedPrefix}leave_


 _*< FERRAMENTAS />*_
 
  ▢ _${usedPrefix}inspect *<wagc_url>*_
  ▢ _${usedPrefix}chatgpt *<txt>*_
  ▢ _${usedPrefix}delchatgpt
  ▢ _${usedPrefix}gptvoz *<txt>*_
  ▢ _${usedPrefix}dall-e *<txt>*_
  ▢ _${usedPrefix}spamwa *num|txt|cant>*_
  ▢ _${usedPrefix}tamaño *<cant> <img / video>*_
  ▢ _${usedPrefix}readviewonce *<img / video>*_
  ▢ _${usedPrefix}clima *<país> <cidade>*_
  ▢ _${usedPrefix}encuesta *<txt1|txt2>*_
  ▢ _${usedPrefix}afk *<motivo>*_
  ▢ _${usedPrefix}ocr *<responda img>*_
  ▢ _${usedPrefix}hd *<responda img>*_
  ▢ _${usedPrefix}acortar *<url>*_
  ▢ _${usedPrefix}calc *<operação>*_
  ▢ _${usedPrefix}del *<msg>*_
  ▢ _${usedPrefix}whatmusic *<audio>*_
  ▢ _${usedPrefix}readqr *<img>*_
  ▢ _${usedPrefix}qrcode *<txt>*_
  ▢ _${usedPrefix}readmore *<txt1|txt2>*_
  ▢ _${usedPrefix}styletext *<txt>*_
  ▢ _${usedPrefix}trad *<txt>*_
  ▢ _${usedPrefix}nowa *num>*_
  ▢ _${usedPrefix}covid *<pais>*_
  ▢ _${usedPrefix}hora_
  ▢ _${usedPrefix}dropmail_
  ▢ _${usedPrefix}igstalk *<user>*_
  ▢ _${usedPrefix}tiktokstalk *<user>*_
  ▢ _${usedPrefix}img *<txt>*_



 _*< CONVERTEDORES />*_

  ▢ _${usedPrefix}toanime *<img>*_
  ▢ _${usedPrefix}togifaud *<video>*_
  ▢ _${usedPrefix}toimg *<sticker>*_
  ▢ _${usedPrefix}tomp3 *<video>*_
  ▢ _${usedPrefix}tomp3 *<nota de voz>*_
  ▢ _${usedPrefix}toptt *<video / audio>*_
  ▢ _${usedPrefix}tovideo *<sticker>*_
  ▢ _${usedPrefix}tourl *<video / img / audio>*_
  ▢ _${usedPrefix}tts *<idioma> <txt>*_
  ▢ _${usedPrefix}tts *<efeito> <txt>*_


 _*< EFEITOS & LOGOS />*_

  ▢ _${usedPrefix}logos *<efeito> <txt>*_
  ▢ _${usedPrefix}logochristmas *<txt>*_
  ▢ _${usedPrefix}logocorazon *<txt>*_
  ▢ _${usedPrefix}ytcomment *<txt>*_
  ▢ _${usedPrefix}hornycard *<@tag>*_
  ▢ _${usedPrefix}simpcard *<@tag>*_
  ▢ _${usedPrefix}lolice *<@tag>*_
  ▢ _${usedPrefix}itssostupid_
  ▢ _${usedPrefix}pixelar_
  ▢ _${usedPrefix}blur_


 _*< FRASES & TEXTOS />*_

  ▢ _${usedPrefix}piropo_
  ▢ _${usedPrefix}conselho_
  ▢ _${usedPrefix}fraseromantica_
  ▢ _${usedPrefix}historiaromantica_


 _*< ALEATORIO />*_

  ▢ _${usedPrefix}kpop *<blackpink/exo/bts>*_
  ▢ _${usedPrefix}cristianoronaldo_
  ▢ _${usedPrefix}messi_
  ▢ _${usedPrefix}cat_
  ▢ _${usedPrefix}dog_
  ▢ _${usedPrefix}meme_
  ▢ _${usedPrefix}itzy_
  ▢ _${usedPrefix}blackpink_
  ▢ _${usedPrefix}navidad_
  ▢ _${usedPrefix}wpmontaña_
  ▢ _${usedPrefix}pubg_
  ▢ _${usedPrefix}wpgaming_
  ▢ _${usedPrefix}wpaesthetic_
  ▢ _${usedPrefix}wpaesthetic2_
  ▢ _${usedPrefix}wprandom_
  ▢ _${usedPrefix}wallhp_
  ▢ _${usedPrefix}wpvehiculo_
  ▢ _${usedPrefix}wpmoto_
  ▢ _${usedPrefix}coffee_
  ▢ _${usedPrefix}pentol_
  ▢ _${usedPrefix}caricatura_
  ▢ _${usedPrefix}ciberespacio_
  ▢ _${usedPrefix}technology_
  ▢ _${usedPrefix}doraemon_
  ▢ _${usedPrefix}hacker_
  ▢ _${usedPrefix}planeta_
  ▢ _${usedPrefix}randomprofile_


 _*< ECONÔMIA />*_

  ▢ _${usedPrefix}adventure_
  ▢ _${usedPrefix}cazar_
  ▢ _${usedPrefix}cofre_
  ▢ _${usedPrefix}balance_
  ▢ _${usedPrefix}claim_
  ▢ _${usedPrefix}heal_
  ▢ _${usedPrefix}lb_
  ▢ _${usedPrefix}levelup_
  ▢ _${usedPrefix}myns_
  ▢ _${usedPrefix}perfil_
  ▢ _${usedPrefix}work_
  ▢ _${usedPrefix}minar_
  ▢ _${usedPrefix}minar2_
  ▢ _${usedPrefix}buy_
  ▢ _${usedPrefix}buyall_
  ▢ _${usedPrefix}verificar_
  ▢ _${usedPrefix}robar *<cant> <@tag>*_
  ▢ _${usedPrefix}crime
  ▢ _${usedPrefix}transfer *<tipo> <cant> <@tag>*_
  ▢ _${usedPrefix}unreg *<sn>*_


 _*< STICKERS />*_

  ▢ _${usedPrefix}sticker *<responder img ou video>*_
  ▢ _${usedPrefix}sticker *<url>*_
  ▢ _${usedPrefix}sticker2 *<responder img ou video>*_
  ▢ _${usedPrefix}sticker2 *<url>*_
  ▢ _${usedPrefix}s *<responder img ou video>*_
  ▢ _${usedPrefix}s *<url>*_
  ▢ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
  ▢ _${usedPrefix}scircle *<img>*_
  ▢ _${usedPrefix}sremovebg *<img>*_
  ▢ _${usedPrefix}semoji *<tipo> <emoji>*_
  ▢ _${usedPrefix}qc *<txt>*_
  ▢ _${usedPrefix}attp *<txt>*_
  ▢ _${usedPrefix}attp2 *<txt>*_
  ▢ _${usedPrefix}attp3 *<txt>*_
  ▢ _${usedPrefix}ttp *<txt>*_
  ▢ _${usedPrefix}ttp2 *<txt>*_
  ▢ _${usedPrefix}ttp3 *<txt>*_
  ▢ _${usedPrefix}ttp4 *<txt>*_
  ▢ _${usedPrefix}ttp5 *<txt>*_
  ▢ _${usedPrefix}pat *<@tag>*_
  ▢ _${usedPrefix}slap *<@tag>*_
  ▢ _${usedPrefix}kiss *<@tag>*_
  ▢ _${usedPrefix}dado_
  ▢ _${usedPrefix}wm *<packname> <autor>*_
  ▢ _${usedPrefix}stickermarker *<efeito> <img>*_
  ▢ _${usedPrefix}stickerfilter *<efeito> <img>*_

  
 _*< JOGOS />*_

  ▢ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
  ▢ _${usedPrefix}fake *<txt1> <@tag> <txt2>*_
  ▢ _${usedPrefix}ppt *<papel / tijera /piedra>*_
  ▢ _${usedPrefix}prostituto *<nome / @tag>*_
  ▢ _${usedPrefix}prostituta *<nome / @tag>*_
  ▢ _${usedPrefix}gay2 *<nombre / @tag>*_
  ▢ _${usedPrefix}lesbica *<nome / @tag>*_
  ▢ _${usedPrefix}pajero *<nome / @tag>*_
  ▢ _${usedPrefix}pajera *<nome / @tag>*_
  ▢ _${usedPrefix}puto *<nome / @tag>*_
  ▢ _${usedPrefix}puta *<nome / @tag>*_
  ▢ _${usedPrefix}manco *<nome / @tag>*_
  ▢ _${usedPrefix}manca *<nome / @tag>*_
  ▢ _${usedPrefix}rata *<nome / @tag>*_
  ▢ _${usedPrefix}love *<nome / @tag>*_
  ▢ _${usedPrefix}spynevd *<nome / @tag>*_
  ▢ _${usedPrefix}pergunta *<txt>*_
  ▢ _${usedPrefix}sera *<txt>*_
  ▢ _${usedPrefix}suitpvp *<@tag>*_
  ▢ _${usedPrefix}slot *<aposta>*_
  ▢ _${usedPrefix}ttt *<nome sala>*_
  ▢ _${usedPrefix}delttt_
  ▢ _${usedPrefix}acertijo_
  ▢ _${usedPrefix}simi *<txt>*_
  ▢ _${usedPrefix}top *<txt>*_
  ▢ _${usedPrefix}topgays_
  ▢ _${usedPrefix}topotakus_
  ▢ _${usedPrefix}formarcasal_
  ▢ _${usedPrefix}verdade_
  ▢ _${usedPrefix}reto_
  ▢ _${usedPrefix}cancion_
  ▢ _${usedPrefix}pista_
  ▢ _${usedPrefix}akinator_
  ▢ _${usedPrefix}roleta
  ▢ _${usedPrefix}sorte
  ▢ _${usedPrefix}wordfind_


 _*< ATV./DST. FUNC. />*_

  ▢ _${usedPrefix}ativa *welcome*_
  ▢ _${usedPrefix}desativa *welcome*_
  ▢ _${usedPrefix}ativa *modohorny*_
  ▢ _${usedPrefix}desativa *modohorny*_
  ▢ _${usedPrefix}ativa *antilink*_
  ▢ _${usedPrefix}desativa *antilink*_
  ▢ _${usedPrefix}ativa *antilink2*_
  ▢ _${usedPrefix}desativa *antilink2*_
  ▢ _${usedPrefix}ativa *detect*_
  ▢ _${usedPrefix}desativa *detect*_
  ▢ _${usedPrefix}ativa *audios*_
  ▢ _${usedPrefix}desativa *audios*_
  ▢ _${usedPrefix}ativa *autosticker*_
  ▢ _${usedPrefix}desativa *autosticker*_
  ▢ _${usedPrefix}ativa *antiviewonce*_
  ▢ _${usedPrefix}desativa *antiviewonce*_
  ▢ _${usedPrefix}ativa *antitoxic*_
  ▢ _${usedPrefix}desativa *antitoxic*_
  ▢ _${usedPrefix}ativa *antitraba*_
  ▢ _${usedPrefix}desativa *antitraba*_
  ▢ _${usedPrefix}ativa *antiarabes*_
  ▢ _${usedPrefix}desativa *antiarabes*_
  ▢ _${usedPrefix}ativa *modoadmin*_
  ▢ _${usedPrefix}desativa *modoadmin*_
  ▢ _${usedPrefix}ativa *antidelete*_
  ▢ _${usedPrefix}desativa *antidelete*_


  _*< LISTA DE MENUS />*_
  
  ▢ _${usedPrefix}menuaudios_
  ▢ _${usedPrefix}menuanimes_
  ▢ _${usedPrefix}labiblia_ (🔞)

 
 _*< SPY & MODS. />*_

  ▢ _> *<função>*_
  ▢ _=> *<função>*_
  ▢ _$ *<função>*_
  ▢ _${usedPrefix}dsowner_
  ▢ _${usedPrefix}setprefix *<prefixo>*_
  ▢ _${usedPrefix}resetprefix_
  ▢ _${usedPrefix}seradmin_
  ▢ _${usedPrefix}grouplist_
  ▢ _${usedPrefix}chetar_
  ▢ _${usedPrefix}leavegc_
  ▢ _${usedPrefix}cajafuerte_
  ▢ _${usedPrefix}blocklist_
  ▢ _${usedPrefix}addowner *<@tag / num>*_
  ▢ _${usedPrefix}delowner *<@tag / num>*_
  ▢ _${usedPrefix}block *<@tag / num>*_
  ▢ _${usedPrefix}unblock *<@tag / num>*_
  ▢ _${usedPrefix}ativa *restrict*_
  ▢ _${usedPrefix}desativa *restrict*_
  ▢ _${usedPrefix}ativa *autoread*_
  ▢ _${usedPrefix}desativa *autoread*_
  ▢ _${usedPrefix}ativa *public*_
  ▢ _${usedPrefix}desativa *public*_
  ▢ _${usedPrefix}ativa *pconly*_
  ▢ _${usedPrefix}desativa *pconly*_
  ▢ _${usedPrefix}ativa *gconly*_
  ▢ _${usedPrefix}desativa *gconly*_
  ▢ _${usedPrefix}ativa *anticall*_
  ▢ _${usedPrefix}desativa *anticall*_
  ▢ _${usedPrefix}ativa *antiprivado*_
  ▢ _${usedPrefix}desativa *antiprivado*_
  ▢ _${usedPrefix}ativa *modejadibot*_
  ▢ _${usedPrefix}desativa *modejadibot*_
  ▢ _${usedPrefix}ativa *audios_bot*_
  ▢ _${usedPrefix}desativa *audios_bot*_
  ▢ _${usedPrefix}ativa *antispam*_
  ▢ _${usedPrefix}desativa *antispam*_
  ▢ _${usedPrefix}msg *<txt>*_
  ▢ _${usedPrefix}banchat_
  ▢ _${usedPrefix}unbanchat_
  ▢ _${usedPrefix}resetuser *<@tag>*_
  ▢ _${usedPrefix}banuser *<@tag>*_
  ▢ _${usedPrefix}unbanuser *<@tag>*_
  ▢ _${usedPrefix}dardiamantes *<@tag> <cant>*_
  ▢ _${usedPrefix}añadirxp *<@tag> <cant>*_
  ▢ _${usedPrefix}banuser *<@tag>*_
  ▢ _${usedPrefix}bc *<txt>*_
  ▢ _${usedPrefix}bcchats *<txt>*_
  ▢ _${usedPrefix}bcgc *<txt>*_
  ▢ _${usedPrefix}bcgc2 *<aud>*_
  ▢ _${usedPrefix}bcgc2 *<vid>*_
  ▢ _${usedPrefix}bcgc2 *<img>*_
  ▢ _${usedPrefix}bcbot *<txt>*_
  ▢ _${usedPrefix}cleartpm_
  ▢ _${usedPrefix}restart_
  ▢ _${usedPrefix}update_
  ▢ _${usedPrefix}banlist_
  ▢ _${usedPrefix}addprem *<@tag> <tempo>*_
  ▢ _${usedPrefix}addprem2 *<@tag> <tempo>*_
  ▢ _${usedPrefix}addprem3 *<@tag> <tempo>*_
  ▢ _${usedPrefix}addprem4 *<@tag> <tempo>*_
  ▢ _${usedPrefix}delprem *<@tag>*_
  ▢ _${usedPrefix}listcmd_
  ▢ _${usedPrefix}setppbot *<responder img>*_
  ▢ _${usedPrefix}addcmd *<txt>*_
  ▢ _${usedPrefix}delcmd_
  ▢ _${usedPrefix}saveimage_
  ▢ _${usedPrefix}viewimage_`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, ativa, { type: 'audioMessage', ptt: ativa})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': desativa, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, ativa, { type: 'audioMessage', ptt: ativa})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': desativa, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Vai pedir menu na casa do caralho comédia, vou mandar porra nenhuma, fdsss.*', m);
  }
};
handler.command = /^(menu|..|memu|help|info|mandapramim|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
handler.register = true
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}