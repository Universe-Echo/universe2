
const { Client, Intents } = require('discord.js');
require('discord-reply');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] }); 
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
require('dotenv').config()
var token = process.env.TOKEN;
const ms = require('ms')
const Timeout = new Discord.Collection();
const { Player } = require('discord-player');
client.player = new Player(client);
const mongoose = require('mongoose')

client.login(process.env.TOKEN); // env se tken lega direct

client.on('ready', () => {
  client.users.fetch('673846605920600068', false).then((user) => {
    user.send(`I'm on!`);
    console.log(`${client.user.tag} is on`)
    
    let activities = [ `${client.guilds.cache.size} servers`, `${client.channels.cache.size} channels`, `3,407 users` ], i = 0;

  setInterval(() => client.user.setActivity(`>help | ${activities[i ++ % activities.length]}`, { type: "WATCHING"}), 5000)
   });
})

client.on('ready', () => {
  client.users.fetch('724874670796570696', false).then((user) => {
    user.send(`I'm on!`);
   });
})

client.on('ready', () => {
  client.users.fetch('843615264805224458', false).then((user) => {
    user.send(`I'm on!`);
   });
})


prefix = 'u'
client.on('message', gotmessage);

async function gotmessage(message) {

  if (message.author.bot) return;
  if (message.content === 'hlo') {
    message.lineReply('hlu')
}

  else if (message.content === 'sup') {
  message.lineReply('Just doing my job, wbu?')
}

else if (message.content === 'hi') {
    message.lineReply('heyy');
}

else if (message.content === 'moonie') {
  message.channel.send('idk')
}
else if (message.content === `<@!934034791702081546> `) {
  return message.channel.send('**Prefix:** `un!`')
}
else if (message.content === 'boom') {
  const user = message.author
  message.channel.send('https://cdn.discordapp.com/emojis/886178531976024094.gif?v=1&size=64')
  message.delete();
}
else if (message.content === 'ping') {
  message.lineReply('Pong!!')
}
 else if(message.content === 'ding') {
   message.lineReply('dongg')
 }
}


client.on('guildMemberAdd', (member) => {
  
  console.log(member)
  
  
  })
const fs = require('fs');
const message = require('./events/message');
const { relativeTimeRounding } = require('moment');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
const EventFiles = fs.readdirSync('./events/').filter(f => f.endsWith('.js'));
client.slashCommands = new Discord.Collection();



for (const EventFile of EventFiles) {
    const event = require('./events/' + EventFile);
    const EventName = EventFile.split('.')[0];
    client.on(EventName, event.bind(null, client));
}


const Files = fs.readdirSync('./commands/').filter(f => f.endsWith('.js'));
for (const File of Files) {
    const command = require('./commands/' + File);
    
    client.commands.set(command.name, command);
    console.log(`✅ Loading command ${command.name}`);
    
    
}
/**const mongooseConnectionString = 'mongodb+srv://echo:echouniverse@universe-bot.s4zfo.mongodb.net/data'
if (!mongooseConnectionString) return;

mongoose
 .connect(mongooseConnectionString, {
 //  userFindAndModify: true,
   useUnifiedTopology: true,
   //userNewUrlParser: true,

 })
 .then(() => console.log('Connected to Mongodb!'))
 **/

