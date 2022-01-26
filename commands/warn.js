const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'warn',
    description: 'warns a member',
    async execute(client, message, args) {
        if (!message.member.guild.me.hasPermission('BAN_MEMBERS')) {
            return message.channel.send('I dont have the perms to do this!')
        }
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send('You dont have the perms to do this!')
        }
        try {
            const reason = args.slice(1).join(' ');

            
            if (!args[0]) return message.channel.send('Please tell me a user to warn!');
            const warnMember = message.mentions.members.first() || await message.guild.members.fetch(args[0]);
            if (!warnMember) return message.channel.send('Please provide a valid member!');
            if (warnMember === message.member) return message.channel.send('You wanna warn yourself nice :)');
            
            await warnMember.send(`You were warned in **${message.guild.name}**\nReason: ${reason}` || 'no reason provided').catch(() => { })

            const warned = new MessageEmbed()
                .setDescription('**User Warned!**')
                .addField(' <:boosted2:872787394112413746>  User', `${warnMember}`, true)
                .addField('Reason', `${reason}` || `no reason provided`, true)
                .setColor('RED')

            message.channel.send(warned)
        }
        catch {
          return message.channel.send(e)
        }
    }

    }