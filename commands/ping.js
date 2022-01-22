const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ping',
    execute(client, message) {

       
            const apiPing = client.ws.ping
            const botPing = m.createdTimestamp - message.createdTimestamp
            
            
        const ping = new MessageEmbed()
        .setTitle("Bot ping")
        .addField(`API Ping:`, `${apiPing}`)
        .addField(`Bot Ping:`,`${botPing}`)
        message.channel.send(ping)
        }
        

    
}