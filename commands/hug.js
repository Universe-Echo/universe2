const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'hug',
    async execute(client, message, args) {
        let huggedperson = message.mentions.members.first()
        let hugperson = message.author || await message.guild.members.fetch(args[0]);
        if (!huggedperson) return message.channel.send('Tell a person to hug re .__.') 
        try {
            
       huggedperson.send(`You got a hug from ${message.author.tag} `)
      
      message.channel.send(`**${message.author.username} hugs ${huggedperson.user.username}, cute uwu**`)
      message.channel.send('https://tenor.com/view/hug-anime-gif-15793126')
      
     
        }
        catch (e) {
            return message.channel.send(`there was an error:\n${e.message}`)
      }
      }
    }
