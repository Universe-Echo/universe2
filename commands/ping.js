const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ping',
    execute(client, message) {

        message.channel.send('Calculating ping.......').then(m => {
            const apiPing = client.ws.ping
            const botPing = m.createdTimestamp - message.createdTimestamp
            
            
        const ping = new MessageEmbed()
        .setTitle("Ping")
        .addField(`API Ping:`, ` \`\`\`\js ${apiPing} \`\`\`\ `)
        .addField(`Bot Ping:`,` \`\`\`\js ${botPing} \`\`\`\ `)
        message.channel.send(ping)
            m.edit(`Api Latency: ${apiPing}ms\nBot Latency: ${botPing}ms`)
            m.delete();
        }

        )

    }
}