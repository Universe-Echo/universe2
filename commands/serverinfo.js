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
      
      .addField("⮞Member Count", ` \`\`\`\ ${message.guild.memberCount} \`\`\`\ `, true)
      
      .addField("⮞Emojis", ` \`\`\`\ ${message.guild.emojis.cache.size} \`\`\`\ `)
      .addField("⮞Created On", ` \`\`\`\ ${message.guild.createdAt.toDateString()} \`\`\`\ `,)
      .addField('⮞Verification level', ` \`\`\`\ ${verificationLevels[message.guild.verificationLevel]} \`\`\`\ `)
      .addField('⮞Channels', ` \`\`\`\ ${message.guild.channels.cache.size} \`\`\`\ `, true)
      .addField(" Roles", ` \`\`\`\ ${message.guild.roles.cache.size} \`\`\`\ `, true)
      .addField('Boosts', ` \`\`\`\ ${message.guild.premiumSubscriptionCount || '0'} \`\`\`\ `, true)
      
      .setTimestamp()
      .setFooter(`Id - ${message.guild.id}`)

    message.channel.send(embed)
  
    }}


    
