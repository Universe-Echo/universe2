const { Message } = require('discord.js') 
const { MessageEmbed } = require('discord.js');
const message = require('../events/message');
module.exports = {
    name: 'unban',
    
  
    async execute(client, message, args)  {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You dont have the perms to do this!')

        const reason = args.slice(1).join(' ');
        if (!args[0]) return message.channel.send("Please provide a valid user..")
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        const bannedMemberInfo = await message.guild.fetchBans();
        const bannedMember = bannedMemberInfo.get(args[0]);
        if (!bannedMember) return message.channel.send(`That user isn't banned -__-`)

        try {
             await message.guild.members.unban(bannedMember.user.id, reason)

             const banned = new MessageEmbed()
             .setTitle("**User Unbanned**")
             .addField('User', bannedMember.user.tag, true)
             .addField('Reason', reason || 'No reason provided!')
             .setColor('BLUE')

             message.channel.send(banned)

         } 
         catch (e) {
return message.channel.send(e)
         }

            
        




        }
}