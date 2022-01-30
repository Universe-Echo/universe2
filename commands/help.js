const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays a message embed',
    execute(message) {
        
        const Embed = new MessageEmbed()
            
        
            .setTitle('Prefix = un!')
            .addField('__Utility Commands__', ' \`\`\`\ un!purge, un!kick, un!ban, un!warn, un!serverinfo, un!ping, un!whois, un!cinfo, un!lock/unlock \`\`\`\ ')
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .addField('__Fun Commands__', ' \`\`\`\ un!poll, un!avatar, un!emoji, un!8ball \`\`\`\ ')
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            
            .setColor('GREY')
            .setTimestamp()
        message.channel.send(Embed);
    
    }
}
