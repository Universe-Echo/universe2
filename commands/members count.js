const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: 'membercount',
    execute(message, args) {
        
        const membersInServer = message.guild.memberCount;
        
        const messageEmbed = new MessageEmbed()
        .setTitle(`Members in ${message.guild.name}`)
        
        .setDescription(`**${membersInServer}**`)
message.channel.send(messageEmbed)

        
    }
}
