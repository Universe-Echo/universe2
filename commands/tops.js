module.exports = {
    name: 'tops',

    async execute(client, message, args) {

        const guild = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(50);

        const description = guild.map((guild, index) => `#${index + 1}  ${guild.name} | ${guild.memberCount} Members`).join('\n');
        
        message.channel.send({ content: ` \`\`\`\css\n${description} \`\`\`\ ` });

    }
}
