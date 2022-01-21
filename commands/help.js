const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays a message embed',
    execute(message) {
        const logo = 'https://cdn.discordapp.com/attachments/862995158794371083/877510609569206302/3457_Pikaluv.png'
        const Embed = new MessageEmbed()
            
        
            .setTitle('Prefix = p!')
            .setDescription('**Command categories :-**')
            .addField('p!utility', 'for utility commands menu')
            .addField('p!fun', 'for fun commands menu')
           
            .setFooter('Delta <3')
            .setColor('RANDOM')
            .setTimestamp()
        message.channel.send(Embed);
    
    }
}
