const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'utility',
    description: 'Displays a message embed',
    execute(message) {
        const logo = 'https://cdn.discordapp.com/attachments/862995158794371083/877510609569206302/3457_Pikaluv.png'
        const Embed = new MessageEmbed()
            .setTitle('Prefix = un!')
            .setDescription('** Utility commands :-**')
            .addField('un!purge (amount)', 'Purges messages')
            .addField('un!kick', 'Kicks a member from the server')
            .addField('un!ban', 'Bans a member from the server')
            .addField('Mute Commands', 'un!mute, un!tmute (time), un!unmute')
            .addField('un!warn', 'to warn a member in the server')
            .addField('un!serverinfo', 'for server info')
            .addField('un!servers', 'for the list of servers the bot has joined')
            .addField('un!membercount', 'for member count of the server')
            .addField('un!ping', 'to see the latency')
            .addField('un!whois', 'for user userinfo')
            .addField('un!cinfo', 'for channel info')
            .addField('un!lock/unlock', 'to lock/unlock a channel')
            .setFooter('Universe OP')
            .setColor('GREY')
            .setTimestamp()
        message.channel.send(Embed);
    
    }
}
