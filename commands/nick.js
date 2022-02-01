const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'nick',
    async execute(client, message, args) {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You dont have the correct perms to use this command')
        const member = message.mentions.members.first() || message.author;

        const argument = args.slice(1).join(' ')

        if(!argument) return message.channel.send('Please specify a nickname....')

        try {
member.setNickname(argument)

const nickEmbed = new MessageEmbed()
.setDescription(`Changed nickname of ${member.user.username} to ${argument}`)      

message.channel.send(nickEmbed)
}
     catch (err)  {

        message.reply(`Error: ${err.message}`)

     }}
    
    }
