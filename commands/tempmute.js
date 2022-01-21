const { Message, MessageEmbed } = require('discord.js');
const ms = require('ms');


module.exports = {
    name: 'tmute',
    /**
     * @param {Message} message
     */

    run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You dont have the perms to do this!')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]

        if (!Member) return message.channel.send('Member not valid')
        if (!time) return message.channel.send('Please give a time!')
        
        
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if (Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} is already muted!`)
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} is now muted for ${time}`)
        setTimeout(async () => {
await Member.roles.remove(role2)
message.channel.send(`${Member.displayName} is now unmuted!`)
        }, ms(time))

    }
}