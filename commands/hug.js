const cooldown = new Set();
const fetch = require('node-fetch')
module.exports = {
    name: 'hug',
    async execute(client, message, args) {

      //  const gifs = ["https://tenor.com/view/hug-anime-gif-15793126",
      //               "https://tenor.com/view/anime-cute-sweet-hug-gif-12668681",
      //               "https://tenor.com/view/hug-anime-gif-4898650",
      //               "https://tenor.com/view/hug-anime-gif-19674705"]

      //  const randomMessage = gifs[Math.floor(Math.random() * gifs.length)];
      if (cooldown.has(message.author.id)) {
        message.channel.send('Pls wait 10 secs before using that command....').then(msg=>msg.delete({timeout:"1000"/*Time until delete in milliseconds*/})
       
        )}
        let url = 'https://g.tenor.com/v1/search?q=anime_hug&key=EURH7SHHRLJW&limit=8'
        
      let response = await fetch(url);
  
      let json = await response.json();
     // console.log(json);
  
      const index = Math.floor(Math.random() * json.results.length);
   


        let huggedperson = message.mentions.members.first()
        let hugperson = message.author || await message.guild.members.fetch(args[0]);
        if (!huggedperson) return message.channel.send('**Tell a person to hug re .__.**') 
        if (huggedperson === message.member) return message.channel.send('You wanna hug yourself ._.');
      //  if (huggedperson === bot) return message.channel.send('You cannot a bot -__-');
        try {
            
       huggedperson.send(`**You got a hug from ${message.author.username} :)**`)
      
      message.channel.send(`**${message.author.username} hugs ${huggedperson.user.username}, cute uwu**`)
      message.channel.send(json.results[index].url)
      
     
        }
        catch (e) {
            return message.channel.send(`there was an error:\n${e.message}`)
      }
      }
    }
