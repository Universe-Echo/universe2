const { MessageEmbed } = require('discord.js')
const cooldown = new Set();
module.exports = {
    name: 'ping',
    execute(client, message) {
        if (cooldown.has(message.author.id)) {
            message.channel.send('Pls wait 10 secs before using that command....').then(msg=>msg.delete({timeout:"1000"/*Time until delete in milliseconds*/})
           
            )}
        else {
            message.channel.send('Calculating ping.......').then(m => {
                const apiPing = client.ws.ping
                const botPing = m.createdTimestamp - message.createdTimestamp
                
                
            const ping = new MessageEmbed()
            .setTitle("Ping")
            .addField(`API Ping:`, ` \`\`\`\py\n ${apiPing} \`\`\`\ `)
            .addField(`Bot Ping:`,` \`\`\`\py\n ${botPing} \`\`\`\ `)
            message.channel.send(ping)
                m.edit(`Api Latency: ${apiPing}ms\nBot Latency: ${botPing}ms`)
                m.delete();
            }
    
            )
    
        }
        cooldown.add(message.author.id);
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, 10000);


    }
}

        