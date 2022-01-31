const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'servers',


async execute(client, message) {

    if (message.author.id !== '673846605920600068') return message.channel.send('This command can be only used by my owner')
client.guilds.cache.forEach(guild => {
    message.channel.send(` \`\`\`\css\n [ ${guild.name} ] has a total of ${guild.memberCount} members \`\`\`\ `
    )}
)}
}