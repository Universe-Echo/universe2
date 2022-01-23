
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');





client.login('OTM0MDM0NzkxNzAyMDgxNTQ2.YeqNrw.CUQEzLNpw0iHGsC-EwTepFU52DA');




client.on('message', gotmessage);

async function gotmessage(message) {
  if (message.content === 'hlo') {
    message.reply('hlu')
}

  else if (message.content === 'sup') {
  message.reply('Just doing my job, wbu?')
}

else if (message.content === 'hi') {
    message.channel.send('hello');
}

else if (message.content === 'moonie') {
  message.channel.send('idk')
}
else if (message.mentions.has(client.user)) {
  const prefix = new MessageEmbed()
  .addDescription('Prefix:`un!`')
  
  return message.channel.send(prefix)
}

}


const fs = require('fs');
const message = require('./events/message');
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
    
    
}

{


}


