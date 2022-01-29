const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    aliases: ['si', 's', 'server-info'],
    run: (client, message, args) => {
        const { guild } = message
        
    const { name, region, memberCount, afkTimeout } = guild
    const icon = guild.iconURL()

    const verificationLevels = {
      NONE: 'None',
      LOW: 'Low',
      MEDIUM: 'Medium',
      HIGH: 'High',
      VERY_HIGH: 'Very High'
  };
    const channels = message.guild.channels.cache;
    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for`)
      .setThumbnail(guild.iconURL({ dynamic: true, size: 512 }))
      .addField("Owner", `${message.guild.owner}`)
      
      .addField("⮞Member Count", ` \`\`\`\ ${message.guild.memberCount} \`\`\`\ `)
      
      .addField("⮞Emojis", ` \`\`\`\ ${message.guild.emojis.cache.size} \`\`\`\ `, true)
      .addField(`Animated`, ` \`\`\`\ ${message.guild.emojis.cache.filter(emoji => emoji.animated).size.toString()} \`\`\`\ `, true)
      .addField("⮞Created On", ` \`\`\`\ ${message.guild.createdAt.toDateString()} \`\`\`\ `,)
      
      .addField('⮞Verification level', ` \`\`\`\ ${verificationLevels[message.guild.verificationLevel]} \`\`\`\ `)
     // .addField(`no. of Text Channel\'s:`, ` \`\`\`\ ${message.guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size.toString()} \`\`\`\ ` )
     //.addField(`no. of Voice Channel\'s:`, ` \`\`\`\ ${message.guild.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size.toString()} \`\`\`\ ` , true ) 
     .addField('⮞Channels', ` \`\`\`\ ${message.guild.channels.cache.size} \`\`\`\ `, true)
      
      .addField(" Roles", ` \`\`\`\ ${message.guild.roles.cache.size} \`\`\`\ `, true)
      .addField('Boosts', ` \`\`\`\ ${message.guild.premiumSubscriptionCount || '0'} \`\`\`\ `, true)
      .addField(`⮞Boost Level`,` \`\`\`\ ${message.guild.premiumTier.toString()} \`\`\`\ `)
      .setTimestamp()
      .setFooter(`Id - ${message.guild.id}`)

    message.channel.send(embed)
  
    }}


    
