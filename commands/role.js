const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'role',

    async execute(client, message, args) {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You dont have the correct perms to use this command!')

        const roleTarget = message.mentions.members.first()
        if(!roleTarget) return message.lineReply('Please provide a member!')
        const role = message.mentions.roles.first()
        if(!role) return message.lineReply('Please provide a role!')
        await roleTarget.roles.add(role)
        
        const roleEmbed = new MessageEmbed()
        .setDescription(`Added ${role} to ${roleTarget.user.username}`)
        .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(roleEmbed)
    } 
}