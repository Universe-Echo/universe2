const ms = require('ms');

const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'gaw',

    async execute(client, message, args) {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You dont have the correct perms to use this command')
        const channel = message.mentions.channels.first() || message.channel;

        if(!channel) return message.lineReply('Please specify a channel for giveaway')

        const duration = args[1]

        if(!duration) return message.channel.send('Please enter a valid duration')

        const winners = args[2]

        if(!winners) return message.channel.send('Please enter the number of winners')

       const prize = args.slice(3).join(' ')

       if(!prize) return message.channel.send('Please enter the prize to win')
       


    }
}  