const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'delete',
    
     /**
      * @param {Client} client
      * @param {Message} message
      * @param {String[]} args
      */
run : async(client, message, args) => {
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('You dont have the correct permissions!')

    const channelTarget = message.mentions.channels.first() || message.channel

    channelTarget.delete()
    .then(ch => {
        message.author.send(`Channel deleted!`)
    })
}
}

