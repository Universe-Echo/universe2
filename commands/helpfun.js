const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'fun',
    description: 'Displays a message embed',
    execute(message) {
        const logo = 'https://cdn.discordapp.com/attachments/862995158794371083/877510609569206302/3457_Pikaluv.png'
        const Embed = new MessageEmbed()
            .setTitle('Prefix = p!')
            .setDescription('**Fun commands :-**')

            
            .addField('p!poll', 'for reaction poll')
            .addField('gif commands', '$bp, $alan, $bts, $mello, $hi, $bye, $chappal, $sexy, $dance, $sad, $cry, $angry, $alok, $welcome, $kitten, $dog, $gm, $gn', inline = true)
            .addField('p!avatar', 'For enlarged avatars')
            .addField('p!emoji (emoji)', 'To enlarge emojis')
            .addField('p!8ball', 'To use 8ball')
            
            .setFooter('Delta <3')
            .setColor('RANDOM')
            .setTimestamp()
        message.channel.send(Embed);
    
    }
}
