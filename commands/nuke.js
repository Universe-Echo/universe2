const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "nuke",

  run:  async (client, message, args) => {
        if (!message.member.roles.cache.find(r => r.id == '882012269481951242')) {
         return message.channel.send('nu.... you dumb -_-')
        }
      
        message.channel.clone().then(channel => {
          channel.setPosition(message.channel.position)
          const embed = new MessageEmbed()
          .setTitle(`Channel nuked by ${message.author.tag}`)
          .setImage('https://tenor.com/view/explode-blast-blow-nuclear-boom-gif-15025770')
          .setTimestamp()
          
          channel.send('https://tenor.com/view/explode-blast-blow-nuclear-boom-gif-15025770')
          channel.send(`**Nuked! by ${message.author.tag}**`)
        })
        message.channel.delete()
      
      },
  }
 //

 
