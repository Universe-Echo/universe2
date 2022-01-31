const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays a message embed',
    execute(client, message) {
        
        const Embed = new MessageEmbed()
            
        
            .setTitle('Prefix = >')
            .addField('__Utility Commands__', ' \`\`\`\ >purge, >kick, >ban, >warn, >serverinfo, >ping, >whois, >cinfo, >lock/unlock \`\`\`\ ')
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .addField('__Fun Commands__', ' \`\`\`\ >poll, >avatar, >emoji, >8ball \`\`\`\ ')
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            
            .setColor('GREY')
            .setTimestamp()
        message.channel.send(Embed);
    
    }
}
