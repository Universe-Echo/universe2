const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ping',
    execute(client, message) {

        const ping = new MessageEmbed()
        .setTitle("Bot ping")
        .addField(`API Ping: ${apiPing}`)
        .addField(`Bot Ping: ${botPing}`)
        message.channel.send(ping)
        message.channel.send('Calculating ping.......').then(m => {
            const apiPing = client.ws.ping
            const botPing = m.createdTimestamp - message.createdTimestamp
            
            
            m.edit(`Api Latency: ${apiPing}ms\nBot Latency: ${botPing}ms`)
        }

        )

    }
}