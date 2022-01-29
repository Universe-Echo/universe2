const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    aliases: ['si', 's', 'server-info'],
    run: (client, message, args) => {
        const { guild } = message
        
    const { name, region, memberCount, afkTimeout } = guild
    const icon = guild.iconURL()
    const channels = message.guild.channels.cache;
    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for`)
      .setThumbnail(guild.iconURL({ dynamic: true, size: 512 }))
      .addField(" <:PinkMoon925821116608553052:931807859795169331> Owner", `${message.guild.owner}`)
      
      .addField(" <:members:935945505521930271> Member Count", `${message.guild.memberCount}`, true)
      
      .addField(" 🙂Emojis", ` ${message.guild.emojis.cache.size} Emojis`)
      .addField(" 🗓️ Created On", `${message.guild.createdAt.toDateString()}`,)
      
      .addField(' <:channel:935944479150579782> Channels', `${message.guild.channels.cache.size}`, true)
      .addField(" <:role:935946975273160704> Roles", `${message.guild.roles.cache.size} `, true)
      .addField(' <:boost:930008252597551135> Boosts', ` ${message.guild.premiumSubscriptionCount || '0'}`, true)
      
      .setTimestamp()
      .setFooter(`Id - ${message.guild.id}`)

    message.channel.send(embed)
  
    }}