const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays a message embed',
    execute(message) {
        
        const Embed = new MessageEmbed()
            
        
            .setTitle('Prefix = un!')
            .setDescription('**Command categories :-**')
            .addField('un!utility', 'for utility commands menu')
            .addField('un!fun', 'for fun commands menu')
           
            .setFooter('Universe OP')
            .setColor('GREY')
            .setTimestamp()
        message.channel.send(Embed);
    
    }
}
