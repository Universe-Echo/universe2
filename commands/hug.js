const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'hug',
    async execute(client, message, args) {

        const gifs = ["https://tenor.com/view/hug-anime-gif-15793126",
                     "https://tenor.com/view/anime-cute-sweet-hug-gif-12668681",
                     "https://tenor.com/view/hug-anime-gif-4898650",
                     "https://tenor.com/view/hug-anime-gif-19674705"]

        const randomMessage = gifs[Math.floor(Math.random() * gifs.length)];
        


        let huggedperson = message.mentions.members.first()
        let hugperson = message.author || await message.guild.members.fetch(args[0]);
        if (!huggedperson) return message.channel.send('**Tell a person to hug re .__.**') 
        if (hugperson === message.member) return message.channel.send('You wanna hug yourself ._.');
        try {
            
       huggedperson.send(`**You got a hug from ${message.author.username} :)**`)
      
      message.channel.send(`**${message.author.username} hugs ${huggedperson.user.username}, cute uwu**`)
      message.channel.send(randomMessage)
      
     
        }
        catch (e) {
            return message.channel.send(`there was an error:\n${e.message}`)
      }
      }
    }
