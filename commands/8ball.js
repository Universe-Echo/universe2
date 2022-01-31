const { MessageEmbed } = require('discord.js')

module.exports = {
    name: '8ball',


async execute(client, message) {
const args = message.content.split(' ').slice(1);
    const replys = [
        "I think so",
        "I dont think so",
        "Maybe",
        "Yes",
        "No",
        "Without a doubt",
        "For Sure",
        "maybe, maybe not"
    ];

    let result = Math.floor(Math.random() * replys.length);
    let question = args.join(" ");
    if(!question) return message.channel.send('pls provide a question')
    const embed = new MessageEmbed()
    .setColor("#00000")
    .addField(`**${message.author.username}'s question**`, question)
    .addField('**the 8ball says**' ,replys[result])
    .setThumbnail(message.author.displayAvatarURL ())

  message.channel.send(embed);
  
}
} 