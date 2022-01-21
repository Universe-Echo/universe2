const { Message } = require('discord.js') 

module.exports = {
    name: 'unban',
    
    /**
     * @param {Message} message
    */
    run : async(client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You dont have the perms to do this!')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

if (!Member) return message.channel.send('Member not valid.')

const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'Muted');

await Member.roles.remove(role)
message.channel.send(`${Member.displayName} is now unmuted.`)
    }
}