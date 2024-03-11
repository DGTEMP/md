import fs from "fs"
async function handler(m, {usedPrefix}) {
    const user = m.sender.split("@")[0]
    if (fs.existsSync("./jadibts/" + user + "/creds.json")) {
        let token = Buffer.from(fs.readFileSync("./jadibts/" + user + "/creds.json"), "utf-8").toString("base64")
        await m.reply(`Token te permite iniciar sesion em outros bots.\n\n*Teu token é:*`)
        await m.reply(token)
    } else {
        await m.reply(`*Não tens token ativo, use ${usedPrefix}serbot para criar um.*`)
    }
  }
  handler.command = handler.help = ['token', 'gettoken', 'serbottoken'];
  handler.tags = ['jadibot'];
  handler.private = true
  export default handler;
  
