module.exports = {
    name: 'unlock',
    async execute(client, message, args) {

    const role = message.guild.roles.cache.find( r => r.name === '@everyone')

    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])

    if (!channel) channel = message.channel;

    if (channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true) {
        return message.channel.send(`${channel} is already unlocked lol`);




    }

    await channel.updateOverwrite(message.guild.id, {SEND_MESSAGES: true}).catch(() => { })

    await channel.updateOverwrite(role, {SEND_MESSAGES: true}).catch(() => { })

    message.channel.send(`🔓Unlocked ${channel}!`)
  
    }

}