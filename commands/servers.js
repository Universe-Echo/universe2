const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'servers',


async execute(client, message) {
client.guilds.cache.forEach(guild => {
    message.channel.send(` \`\`\`\ ${guild.name} has a total of ${guild.memberCount} members \`\`\`\ `
    )}
)}
}