const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'fun',
    description: 'Displays a message embed',
    execute(message) {
       
        const Embed = new MessageEmbed()
            .setTitle('Prefix = un!')
            .setDescription('**Fun commands :-**')

            
            .addField('un!poll', 'for reaction poll')
            
            .addField('un!avatar', 'For enlarged avatars')
            .addField('un!emoji (emoji)', 'To enlarge emojis')
            .addField('un!8ball', 'To use 8ball')
            
            .setFooter('Universe OP')
            .setColor('RANDOM')
            .setTimestamp()
        message.channel.send(Embed);
    
    }
}
