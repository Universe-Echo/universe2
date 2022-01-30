const Discord = module.require('discord.js');
const moment = require('moment');
const { MessageEmbed } = require('discord.js')
module.exports = {
     name: 'whois',

    async execute(client, message, args)  {

      
    let user = message.mentions.users.first() || message.author;
    const member = message.guild.member(user);
    const joinDiscord = moment(user.createdAt).format('llll');
    const joinServer = moment(user.joinedAt).format('llll');
    const roles = member.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
    let whois = new MessageEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
        .setDescription(`${user}`)
        .setColor(`RANDOM`)
        // .setThumbnail(user.user.displayAvatarURL)
        .addField('__Joined at:__ ',` \`\`\`\ ${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} \`\`\`\ `, true)
        .addField("Account Created On:", ` \`\`\`\ ${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")} \`\`\`\ ` , true) 
        .addField("Nickname:", ` \`\`\`\ ${member.nickname !== null ? `${member.nickname}` : 'None'} \`\`\`\ `)
       // .addField(`__Presence:__ `,`${message.guild.member.presence || `offline`}`,true)
       .addField(`Roles [${roles.length}]`, roles.length < 15 ? roles.join(' ') : roles.length > 15 ? `${roles.slice(0, 15).join(' ')}\n+${roles.length-15} roles...` : 'None')
      
       //.addField("Roles", `${member.roles.cache.map(r => r).join(' ').replace('@everyone', ' ')}`)
       .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

    message.channel.send(whois);
    return;
}
}