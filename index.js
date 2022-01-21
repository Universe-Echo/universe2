
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');





let prefix = ('!')
client.login('OTM0MDM0NzkxNzAyMDgxNTQ2.YeqNrw.CUQEzLNpw0iHGsC-EwTepFU52DA');



const replies = [
  'yes?',
  'hello',
  'How are you',
  'heyo'
]


client.on('message', gotmessage);

async function gotmessage(msg) {

  if (msg.content =='hi') {

    const r = Math.floor(Math.random() * replies.length);

    msg.reply(replies[r]);

  
  }
  else if (msg.content == 'sup') {
    msg.reply('nothing much, you say')
  }

}


const fs = require('fs');
const message = require('./events/message');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
const EventFiles = fs.readdirSync('./events/').filter(f => f.endsWith('.js'));

client.slashCommands = new Discord.Collection();

//https://discord.com/oauth2/authorize?client_id=873147009580826624&permissions=8&scope=bot%20applications.commandst

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
//

