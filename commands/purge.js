module.exports = {
    name: 'purge',
    async execute(Client, message, args) {
        
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send('you dont have the perms to do this!')
        }
        
        
        let amount = args[0];

        if (isNaN(amount)) return message.channel.send('Pls enter the number of messages to be purged')
        if (amount < 1) return message.channel.send('Pls provide a number greater than 1')
        if (amount > 99) amount = 99;
        try {
            message.channel.bulkDelete(parseInt(amount) + 1, true).then(m => {
                message.channel.send(`${parseInt(m.size - 1)} messages purged!`).then(m => {
                    m.delete({ timeout: 1000 });
                })
            })
        } catch {
            return message.channel.send('There was a problem while purging, pls try again')
        }
    }

}