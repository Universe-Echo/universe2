const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'utility',
    description: 'Displays a message embed',
    execute(message) {
        const logo = 'https://cdn.discordapp.com/attachments/862995158794371083/877510609569206302/3457_Pikaluv.png'
        const Embed = new MessageEmbed()
            .setTitle('Prefix = p!')
            .setDescription('** Utility commands :-**')
            .addField('p!purge (amount)', 'Purges messages')
            .addField('p!kick', 'Kicks a member from the server')
            .addField('p!ban', 'Bans a member from the server')
            .addField('Mute Commands', 'p!mute, p!tmute (time), p!unmute')
            .addField('p!create <channel-name>', 'creates a text channel')
            .addField('p!delete <channel-name>', 'deletes the mentioned channel')
            .addField('p!serverinfo', 'for server info')
            .addField('p!servers', 'for the list of servers the bot has joined')
            .addField('p!membercount', 'for member count of the server')
            .addField('p!ping', 'to see the latency of the bot')
            
            .setFooter('Delta <3')
            .setColor('RANDOM')
            .setTimestamp()
        message.channel.send(Embed);
    
    }
}
