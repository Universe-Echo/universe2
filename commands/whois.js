const Discord = module.require('discord.js');
const moment = require('moment');
const { MessageEmbed } = require('discord.js')

module.exports = {
     name: 'whois',

    async execute(client, message, args)  {

        var permissions = [];
        var acknowledgements = 'None';
    let user = message.mentions.users.first() || message.author;
    const member = message.guild.member(user);
    const joinDiscord = moment(user.createdAt).format('llll');
    const joinServer = moment(user.joinedAt).format('llll');
    const roles = member.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());


    if(member.hasPermission("KICK_MEMBERS")){
        permissions.push("Kick Members");
    }
    
    if(member.hasPermission("BAN_MEMBERS")){
        permissions.push("Ban Members");
    }
    
    if(member.hasPermission("ADMINISTRATOR")){
        acknowledgements = 'Administrator';
        permissions.push("Administrator");
    }

    if(member.hasPermission("MANAGE_MESSAGES")){
        if(member.hasPermission("ADMINISTRATOR"))
        permissions.push("Administrator");
        acknowledgements = 
        permissions.push("Manage Messages");
    }
    
    if(member.hasPermission("MANAGE_CHANNELS")){
        permissions.push("Manage Channels");
    }
    
    if(member.hasPermission("MENTION_EVERYONE")){
        permissions.push("Mention Everyone");
    }

    if(member.hasPermission("MANAGE_NICKNAMES")){
        permissions.push("Manage Nicknames");
    }

    if(member.hasPermission("MANAGE_ROLES")){
        permissions.push("Manage Roles");
    }

    if(member.hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("Manage Webhooks");
    }

    if(member.hasPermission("MANAGE_EMOJIS")){
        permissions.push("Manage Emojis");
    }

    if(permissions.length == 0){
        permissions.push("No Key Permissions Found");
    }

    if(member.user.id == message.guild.ownerID){
        acknowledgements = 'Server Owner';
    }

    const status = {
        online: "Online",
        idle: "Idle",
        dnd: "Do Not Disturb",
        offline: "Offline/Invisible"
    };


    let whois = new MessageEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
        .setDescription(`${user}`)
        .setColor(`RANDOM`)
        // .setThumbnail(user.user.displayAvatarURL)
        .addField('__Joined at:__ ',` \`\`\`\ ${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} \`\`\`\ `, true)
        .addField("Account Created On:", ` \`\`\`\ ${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} \`\`\`\ ` , true) 
        .addField("Nickname:", ` \`\`\`\ ${member.nickname !== null ? `${member.nickname}` : 'None'} \`\`\`\ `)
        // .addField(`__Presence:__ `,`${message.guild.member.presence || `offline`}`,true)
       .addField(`__Roles [${roles.length}]__`, roles.length < 15 ? roles.join(' ') : roles.length > 15 ? `${roles.slice(0, 15).join(' ')}\n+${roles.length-15} roles...` : 'None')
        // .addField("\n__Permissions:__ ", `${permissions.join(` | `)}`, true);
      .addField("\n__Permissions:__ ", `${permissions.join(' | ')}`)
        //  .addField("__Status__",`${status[member.user.presence.status]}`, true)
        //  .addField("__Playing__", member.presence.activities[0] ? member.presence.activities[0].state : `User isn't have a custom status!`, true)
      .addField("\n__Acknowledgements:__ ", `${acknowledgements}`, true)
        //.addField("Roles", `${member.roles.cache.map(r => r).join(' ').replace('@everyone', ' ')}`)


       .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
       .setTimestamp();

    message.channel.send(whois);
    return;
}
}