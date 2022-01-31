const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'purge',
    async execute(Client, message, args) {
        
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send('you dont have the perms to do this!')
        }
        
        
        let amount = args[0];

        if (!args[0])
        return message.channel.send(`Please Give Me Amounts Of Messages!`);
  
      if (isNaN(args[0]))
        return message.channel.send(`Please Give Me Number Value!`);
  
      if (args[0] < 1)
        return message.channel.send(
          `You Can Delete ${args[0]} By Your Self Its Not Too Many Messages!`
        );
  
      if (args[0] > 100)
        return message.channel.send(
          `I Can't Delete ${args[0]} Because Of Discord Limit!`
        );
        let Reason = args.slice(1).join(" ") || "No Reason Provided!";

        try {
            
            message.channel.bulkDelete(parseInt(amount), true).then(Message => {
                let embed = new MessageEmbed()
                  .setColor(`#00ffcc`)
                  .setTitle(`Messages Deleted!`)
                  .addField(`Moderator`, ` \`\`\`\css\n${message.author.tag} (${message.author.id}) \`\`\`\ `)
                  .addField(`Channel`, ` \`\`\`\css\n${message.channel.name} (${message.channel.id}) \`\`\`\ `)
                  .addField(`Deleted Messages`, ` \`\`\`\css\n${Message.size}\`\`\`\ `)
                  .addField(`Reason`, ` \`\`\`\css\n [ ${Reason} ] \`\`\`\ `)
                  .setFooter(`Requested by ${message.author.username}`)
                  .setTimestamp();
                return message.channel
                  .send(embed)
                  .then(msg => msg.delete({ timeout: 5000 }));
              });
        
            
        } catch (e) {
            return message.channel.send(`there was an error:\n${e.message}`)
        }
    }
}
