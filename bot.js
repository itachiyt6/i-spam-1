const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("531609120537575444")
setInterval(function() {
channel.send(`EbicServer`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
