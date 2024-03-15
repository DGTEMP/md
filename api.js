import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

/* Para agregar más APIs asegurate de poner global.apiname = ['APIKey'] */ /* By Skid 🤑 */

global.openai_key = 'sk-0';
/* Obtén tu API Key en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = 'org-3';
/* Obtén tu ID de organización en este enlace: https://platform.openai.com/account/org-settings */


global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2']
global.itsrose = ['4b146102c4d500809da9d1ff'];

global.APIs = {
  CFROSAPI: 'https://api.cafirexos.com',
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',
  vihangayt: 'https://vihangayt.me',
  erdwpe: 'https://api.erdwpe.com',
  xyroinee: 'https://api.xyroinee.xyz',
  nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'GataDios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren',
  'https://api.xyroinee.xyz': 'uwgflzFEh6'
};

/** ************************/
global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    const emot = {
      level: '🧬 Nível',
      limit: '💎 Grana',
      exp: '⚡ Experiencia',
      bank: '🏦 Banco',
      diamond: '💎 Grana',
      health: '❤️ Saúde',
      kyubi: '🌀 Magia',
      joincount: '🪙 Token',
      emerald: '💚 Esmeralda',
      stamina: '✨ Energia',
      role: '💪 Patente',
      premium: '🎟️ Premium',
      pointxp: '📧 Pontos Exp',
      gold: '👑 Ouro',
      trash: '🗑 Lixo',
      crystal: '🔮 Cristal',
      intelligence: '🧠 Inteligência',
      string: '🕸️ Corda',
      keygold: '🔑 Chave de Ouro',
      keyiron: '🗝️ Chave de Ferro',
      emas: '🪅 Piñata',
      fishingrod: '🎣 Vara de Pescar',
      gems: '🍀 Gemas',
      magicwand: '⚕️ Varinha Mágica',
      mana: '🪄 Mágica',
      agility: '🤸‍♂️ Agilidade',
      darkcrystal: '♠️ Cristal Escuro',
      iron: '⛓️ Ferro',
      rock: '🪨 Rocha',
      potion: '🥤 Poção',
      superior: '💼 Superior',
      robo: '🚔 Robo',
      upgrader: '🧰 Aumentar Melhora',
      wood: '🪵 Madeira',
      strength: '🦹‍ ♀️ Força',
      arc: '🏹 Arco',
      armor: '🥼 Armadura',
      bow: '🏹 Super Arco',
      pickaxe: '⛏️ Picareta',
      sword: '⚔️ Espada',
      common: '📦 Caixa Comum',
      uncoommon: '🥡 Caixa Rara',
      mythic: '🗳️ Caixa Mítico',
      legendary: '🎁 Caixa Legendaria Spy',
      petFood: '🍖 Alimento para Mascote',
      pet: '🍱 Caixa para Mascote',
      bibitanggur: '🍇 Sementes de Uva',
      bibitapel: '🍎 Sementes de Maçã',
      bibitjeruk: '🍊 Sementes de Laranja',
      bibitmangga: '🥭 Sementes de Manga',
      bibitpisang: '🍌 Sementes de Banana',
      ayam: '🐓 Galo',
      babi: '🐖 Porco',
      Jabali: '🐗 Javali',
      bull: '🐃 Toro',
      buaya: '🐊 Crocodilo',
      cat: '🐈 Gato',
      centaur: '🐐 Centauro',
      chicken: '🐓 Galinha',
      cow: '🐄 Vaca',
      dog: '🐕 Cachorro',
      dragon: '🐉 Dragão',
      elephant: '🐘 Elefante',
      fox: '🦊 Zorro',
      giraffe: '🦒 Girafa',
      griffin: '🦅 Ave',
      horse: '🐎 Cavalo',
      kambing: '🐐 Cabra',
      kerbau: '🐃 Búfalo',
      lion: '🦁 Leão',
      money: '👾 SpyCoins',
      monyet: '🐒 Macaco',
      panda: '🐼 Panda',
      snake: '🐍 Serpente',
      phonix: '🕊️ Fênix',
      rhinoceros: '🦏 Rinoceronte',
      wolf: '🐺 Lobo',
      tiger: '🐅 Tigre',
      cumi: '🦑 Polvo',
      udang: '🦐 Camarão',
      ikan: '🐟 Peixe',
      fideos: '🍝 Fideos',
      ramuan: '🧪 Ingrediente NOVA',
      knife: '🔪 Cutelo',
    };
    const results = Object.keys(emot).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }};
global.rpgg = { // Solo emojis
  emoticon(string) {
    string = string.toLowerCase();
    const emott = {
      level: '🧬',
      limit: '💎',
      exp: '⚡',
      bank: '🏦',
      diamond: '💎+',
      health: '❤️',
      kyubi: '🌀',
      joincount: '🪙',
      emerald: '💚',
      stamina: '✨',
      role: '💪',
      premium: '🎟️',
      pointxp: '📧',
      gold: '👑',
      trash: '🗑',
      crystal: '🔮',
      intelligence: '🧠',
      string: '🕸️',
      keygold: '🔑',
      keyiron: '🗝️',
      emas: '🪅',
      fishingrod: '🎣',
      gems: '🍀',
      magicwand: '⚕️',
      mana: '🪄',
      agility: '🤸‍♂️',
      darkcrystal: '♠️',
      iron: '⛓️',
      rock: '🪨',
      potion: '🥤',
      superior: '💼',
      robo: '🚔',
      upgrader: '🧰',
      wood: '🪵',
      strength: '🦹‍ ♀️',
      arc: '🏹',
      armor: '🥼',
      bow: '🏹',
      pickaxe: '⛏️',
      sword: '⚔️',
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      legendary: '🎁',
      petFood: '🍖',
      pet: '🍱',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      ayam: '🐓',
      babi: '🐖',
      Jabali: '🐗',
      bull: '🐃',
      buaya: '🐊',
      cat: '🐈',
      centaur: '🐐',
      chicken: '🐓',
      cow: '🐄',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      fox: '🦊',
      giraffe: '🦒',
      griffin: '🦅',
      horse: '🐎',
      kambing: '🐐',
      kerbau: '🐃',
      lion: '🦁',
      money: '👾',
      monyet: '🐒',
      panda: '🐼',
      snake: '🐍',
      phonix: '🕊️',
      rhinoceros: '🦏',
      wolf: '🐺',
      tiger: '🐅',
      cumi: '🦑',
      udang: '🦐',
      ikan: '🐟',
      fideos: '🍝',
      ramuan: '🧪',
      knife: '🔪',
    };
    const results = Object.keys(emott).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }};
global.rpgshop = { // Tienda
  emoticon(string) {
    string = string.toLowerCase();
    const emottt = {
      exp: '⚡ Experiência',
      limit: '💎 Grana',
      diamond: '💎 Grana',
      joincount: '🪙 Token',
      emerald: '💚 Esmeralda',
      berlian: '♦️ Jóia',
      kyubi: '🌀 Magia',
      gold: '👑 Ouro',
      money: '👾 SpyCoins',
      tiketcoin: '🎫 Spy Tickers',
      stamina: '✨ Energía',
      potion: '🥤 Poción',
      aqua: '💧 Agua',
      trash: '🗑 Lixo',
      wood: '🪵 Madeira',
      rock: '🪨 Rocha',
      batu: '🥌 Pedra',
      string: '🕸️ Corda',
      iron: '⛓️ Ferro',
      coal: '⚱️ Carbono',
      botol: '🍶 Botella',
      kaleng: '🥫 Lata',
      kardus: '🪧 Cartón',
      eleksirb: '💡 Eletricidade',
      emasbatang: '〽️ Barra de Ouro',
      emasbiasa: '🧭 Ouro Común',
      rubah: '🦊🌫️ Zorro Grande',
      sampah: '🗑🌫️ Super Basura',
      serigala: '🐺🌫️ Super Lobo',
      kayu: '🛷 Super Madeira',
      sword: '⚔️ Espada',
      umpan: '🪱 Carnada',
      healtmonster: '💵 Bilhetes',
      emas: '🪅 Piñata',
      pancingan: '🪝 Gancho',
      pancing: '🎣 Vara de Pescar',
      common: '📦 Caixa Comum',
      uncoommon: '🥡 Caixa Rara',
      mythic: '🗳️ Caixa Mítica',
      pet: '📫 Caixa de Mascotes', // ?
      gardenboxs: '💐 Caixa de Jardineiro', // ?
      legendary: '🎁 Caixa Legendaria Spy',
      anggur: '🍇 Uva',
      apel: '🍎 Maçã',
      jeruk: '🍊 Laranja',
      mangga: '🥭 Manga',
      pisang: '🍌 Banana',
      bibitanggur: '🌾🍇 Sementes de Uva',
      bibitapel: '🌾🍎 Sementes de Maçã',
      bibitjeruk: '🌾🍊 Sementes de Laranja',
      bibitmangga: '🌾🥭 Sementes de Mango',
      bibitpisang: '🌾🍌 Sementes de Banana',
      centaur: '🐐 Centauro',
      griffin: '🦅 Ave',
      kucing: '🐈 Gato',
      naga: '🐉 Dragão',
      fox: '🦊 Zorro',
      kuda: '🐎 Cavalo',
      phonix: '🕊️ Fénix',
      wolf: '🐺 Lobo',
      anjing: '🐶 Cachorro',
      petFood: '🍖 Alimento para Mascote', // ?
      makanancentaur: '🐐🥩 Comida de Centauro',
      makanangriffin: '🦅🥩 Comida de Ave',
      makanankyubi: '🌀🥩 Comida Mágica',
      makanannaga: '🐉🥩 Comida de Dragão',
      makananpet: '🍱🥩 Alimentos de mascotes',
      makananphonix: '🕊️🥩 Comida de Fénix',
    };
    const results = Object.keys(emottt).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emottt[results[0][0]];
  }};
global.rpgshopp = { // Tienda
  emoticon(string) {
    string = string.toLowerCase();
    const emotttt = {
      exp: '⚡',
      limit: '💎',
      diamond: '💎+',
      joincount: '🪙',
      emerald: '💚',
      berlian: '♦️',
      kyubi: '🌀',
      gold: '👑',
      money: '👾',
      tiketcoin: '🎫',
      stamina: '✨',
      potion: '🥤',
      aqua: '💧',
      trash: '🗑',
      wood: '🪵',
      rock: '🪨',
      batu: '🥌',
      string: '🕸️',
      iron: '⛓️',
      coal: '⚱️',
      botol: '🍶',
      kaleng: '🥫',
      kardus: '🪧',
      eleksirb: '💡',
      emasbatang: '〽️',
      emasbiasa: '🧭',
      rubah: '🦊🌫️',
      sampah: '🗑🌫️',
      serigala: '🐺🌫️',
      kayu: '🛷',
      sword: '⚔️',
      umpan: '🪱',
      healtmonster: '💵',
      emas: '🪅',
      pancingan: '🪝',
      pancing: '🎣',
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      pet: '📫', // ?
      gardenboxs: '💐', // ?
      legendary: '🎁',
      anggur: '🍇',
      apel: '🍎',
      jeruk: '🍊',
      mangga: '🥭',
      pisang: '🍌',
      bibitanggur: '🌾🍇',
      bibitapel: '🌾🍎',
      bibitjeruk: '🌾🍊',
      bibitmangga: '🌾🥭',
      bibitpisang: '🌾🍌',
      centaur: '🐐',
      griffin: '🦅',
      kucing: '🐈',
      naga: '🐉',
      fox: '🦊',
      kuda: '🐎',
      phonix: '🕊️',
      wolf: '🐺',
      anjing: '🐶',
      petFood: '🍖', // ?
      makanancentaur: '🐐🥩',
      makanangriffin: '🦅🥩',
      makanankyubi: '🌀🥩',
      makanannaga: '🐉🥩',
      makananpet: '🍱🥩',
      makananphonix: '🕊️🥩',
    };
    const results = Object.keys(emotttt).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emotttt[results[0][0]];
  }};

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'api.js\''));
  import(`${file}?update=${Date.now()}`);
});