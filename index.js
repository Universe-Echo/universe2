
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');





let prefix = ('!')
client.login('OTM0MDM0NzkxNzAyMDgxNTQ2.YeqNrw.CUQEzLNpw0iHGsC-EwTepFU52DA');



const replies = [
  'yes?',
  'hi',
  'How are you',
  'heyo'
]


client.on('message', gotmessage);

async function gotmessage(msg) {

  if (msg.content.includes('Hi')) {

    const r = Math.floor(Math.random() * replies.length);

    msg.reply(replies[r]);

  } else if (msg.content == '$bp') {


    let url = 'https://g.tenor.com/v1/search?q=blackpink&key=EURH7SHHRLJW&limit=8'

    let response = await fetch(url);

    let json = await response.json();
    console.log(json);

    const index = Math.floor(Math.random() * json.results.length);



    msg.channel.send(json.results[index].url);


  } else if (msg.content == 'p!invite') {
    msg.channel.send('wanna invite me? If so contact my developer');

  }

  else if (msg.content == '$alan') {


    let url = 'https://g.tenor.com/v1/search?q=alanwalker&key=EURH7SHHRLJW&limit=8'

    let response = await fetch(url);

    let json = await response.json();
    console.log(json);

    const index = Math.floor(Math.random() * json.results.length);



    msg.channel.send(json.results[index].url);


  }

  else if (msg.content == '$bts') {


    let url = 'https://g.tenor.com/v1/search?q=bts&key=EURH7SHHRLJW&limit=8'

    let response = await fetch(url);

    let json = await response.json();
    console.log(json);

    const index = Math.floor(Math.random() * json.results.length);



    msg.channel.send(json.results[index].url);
  }
  else if (msg.content == 'sup') {
    msg.channel.send('nothing much, you say')
  }

  else if (msg.content == 'crown') {
    msg.channel.send('<a:Vile_prince_Crown:872735775303798794>')
  }
  else if (msg.content == 'tag') {
    msg.channel.send('Tags - UN⑊ , 乛ᵁᴺ')
  }
  else if (msg.content == '$hi') {


    let url = 'https://g.tenor.com/v1/search?q=hi&key=EURH7SHHRLJW&limit=8'

    let response = await fetch(url);

    let json = await response.json();
    console.log(json);

    const index = Math.floor(Math.random() * json.results.length);



    msg.channel.send(json.results[index].url);
  }
  else if (msg.content == '$bye') {


    let url = 'https://g.tenor.com/v1/search?q=bye&key=EURH7SHHRLJW&limit=8'

    let response = await fetch(url);

    let json = await response.json();
    console.log(json);

    const index = Math.floor(Math.random() * json.results.length);



    msg.channel.send(json.results[index].url);
  }
  else if (msg.content == '$chappal') {
    msg.channel.send('https://tenor.com/view/carryminati-ajey-nagar-ruk-teri-toh-frustration-anger-gif-17500677');
  }
  else if (msg.content == '$sexy') {
    msg.channel.send('https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825');

  }
  else if (msg.content == '$dance') {
    msg.channel.send('https://tenor.com/view/happy-dance-happy-yay-dance-cute-gif-19818615');

  }
  else if (msg.content == '$sad') {
    msg.channel.send('https://tenor.com/view/sad-baby-frown-cry-tantrums-gif-4649018');
  }
  else if (msg.content == '$cry') {
    msg.channel.send('https://tenor.com/view/sad-eyes-so-sad-tears-gif-13901135');
  }
  else if (msg.content == '$alok') {


    let url = 'https://g.tenor.com/v1/search?q=alok&key=EURH7SHHRLJW&limit=8'

    let response = await fetch(url);

    let json = await response.json();
    console.log(json);

    const index = Math.floor(Math.random() * json.results.length);



    msg.channel.send(json.results[index].url);
  }
  else if (msg.content == '$welcome') {


    let url = 'https://g.tenor.com/v1/search?q=welcome&key=EURH7SHHRLJW&limit=8'

    let response = await fetch(url);

    let json = await response.json();
    console.log(json);

    const index = Math.floor(Math.random() * json.results.length);



    msg.channel.send(json.results[index].url);
  }
  else if (msg.content == '$kitten') {


    let url = 'https://g.tenor.com/v1/search?q=kitten&key=EURH7SHHRLJW&limit=8'

    let response = await fetch(url);

    let json = await response.json();
    console.log(json);

    const index = Math.floor(Math.random() * json.results.length);



    msg.channel.send(json.results[index].url);
  }
  else if (msg.content == '$dog') {


    let url = 'https://g.tenor.com/v1/search?q=puppy&key=EURH7SHHRLJW&limit=8'

    let response = await fetch(url);

    let json = await response.json();
    console.log(json);

    const index = Math.floor(Math.random() * json.results.length);



    msg.channel.send(json.results[index].url);
  }
  else if (msg.content == '$mello') {


    let url = 'https://g.tenor.com/v1/search?q=marshmello&key=EURH7SHHRLJW&limit=8'

    let response = await fetch(url);

    let json = await response.json();
    console.log(json);

    const index = Math.floor(Math.random() * json.results.length);



    msg.channel.send(json.results[index].url);


  }
  else if (msg.content == '$gm') {
    msg.channel.send('https://tenor.com/view/cat-peek-a-boo-kitty-white-cat-cute-cat-gif-16415828');
  
}
else if (msg.content == '$gn') {
  msg.channel.send('https://tenor.com/view/pukpang-good-night-sweet-dreams-sleep-well-sleep-tight-gif-16285495');
}
else if (msg.content == '$angry') {
  msg.channel.send('https://tenor.com/view/rosycheeks-mochi-peach-mochi-cat-cute-kitty-peach-cat-gif-16992614')
}
else if (msg.content == '$yum') {
  msg.channel.send('https://tenor.com/view/yum-eating-yummy-food-cute-gif-17299231')
}
  else if (msg.content == '$lol') {


    let url = 'https://g.tenor.com/v1/search?q=lol&key=EURH7SHHRLJW&limit=8'

    let response = await fetch(url);

    let json = await response.json();
    console.log(json);

    const index = Math.floor(Math.random() * json.results.length);



    msg.channel.send(json.results[index].url);
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

