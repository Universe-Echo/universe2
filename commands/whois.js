const Discord = module.require('discord.js');
const moment = require('moment');
const { MessageEmbed } = require('discord.js')
module.exports = {
     name: 'whois',

    async execute(client, message, args)  {

        const status = {
            online: "Online",
            idle: "Idle",
            dnd: "Do Not Disturb",
            offline: "Offline/Invisible"
        };
    let user = message.mentions.users.first() || message.author;
    const member = message.guild.member(user);
    const joinDiscord = moment(user.createdAt).format('llll');
    const joinServer = moment(user.joinedAt).format('llll');
    let whois = new MessageEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
        .setDescription(`${user}`)
        .setColor(`RANDOM`)
       // .setThumbnail(user.user.displayAvatarURL)
        .addField('Joined at:', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
        .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`)
        .addField("__Status__",`${status[member.user.presence.status]}`)
        
        .addField("Roles", `${member.roles.cache.map(r => r).join(' ').replace('@everyone', ' ')}`)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp();

    message.channel.send(whois);
    return;
}
}