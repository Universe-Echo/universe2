const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'fun',
    description: 'Displays a message embed',
    execute(message) {
       
        const Embed = new MessageEmbed()
            .setTitle('Prefix = un!')
            .setDescription('**Fun commands :-**')

            
            .addField('p!poll', 'for reaction poll')
            
            .addField('p!avatar', 'For enlarged avatars')
            .addField('p!emoji (emoji)', 'To enlarge emojis')
            .addField('p!8ball', 'To use 8ball')
            
            .setFooter('Universe OP')
            .setColor('RANDOM')
            .setTimestamp()
        message.channel.send(Embed);
    
    }
}
