const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays a message embed',
    execute(message) {
        
        const Embed = new MessageEmbed()
            
        
            .setTitle('Prefix = un!')
            .addField('**Utility Commands', ' \`\`\`\ un!purge, un!kick, un!ban, un!warn, un!serverinfo, un!ping, un!whois, un!cinfo, un!lock/unlock \`\`\`\ ')

            .addField('**Fun Commands**', ' \`\`\`\ un!poll, un!avatar, un!emoji, un!8ball \`\`\`\ ')
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            
            .setColor('GREY')
            .setTimestamp()
        message.channel.send(Embed);
    
    }
}
