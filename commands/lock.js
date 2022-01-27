module.exports = {
    name: 'lock',
    async execute(client, message, args) {

    const role = message.guild.roles.cache.find( r => r.name === '@everyone')

    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    
    if (!channel) channel = message.channel;

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.channel.send('You dont have the perms to do this!') 

    }
    try {
        if (channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === false) 
             return message.channel.send(`${channel} is already locked lol`);

    await channel.updateOverwrite(message.guild.id, {SEND_MESSAGES: false}).catch(() => { })

    await channel.updateOverwrite(role, {SEND_MESSAGES: false}).catch(() => { })

    message.channel.send(`🔒Locked ${channel}!`)
  
    } 
    catch (e) {
            return message.channel.send(`there was an error:\n${e.message}`)
        }
    }



} 

