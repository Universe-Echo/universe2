const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'create',
    
     /**
      * @param {Client} client
      * @param {Message} message
      * @param {String[]} args
      */
run : async(client, message, args) => {
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('You dont have the correct permissions!')

    const channelNameQuery = args.join(' ');
    if(!channelNameQuery) return message.channel.send('Please provide a name for the channel')

    message.guild.channels.create(channelNameQuery)
    .then(ch => {
        message.channel.send(`Click ${ch} to go to the new channel`)
    })
}
}

