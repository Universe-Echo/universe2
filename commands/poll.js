const Discord = require('discord.js')

module.exports = {
    name: 'poll',
    run : async (client, message, args) => {
        const pollchannel = message.mentions.channels.first()
        if(!pollchannel)  { return message.channel.send('Please provide a channel for the poll') 
    }
const question = args.join(' ').slice(21)
if(!question) {
    return message.channel.send('Please provide a message to poll')


}
const embed = new Discord.MessageEmbed()
.setTitle('Poll')
.addField('Author', message.author)
.setDescription(`${question}`)
.setColor('BLACK')

let msg = await pollchannel.send(embed)
await msg.react('👍')
await msg.react('👎')
message.channel.send('Poll Created!')



    }




}