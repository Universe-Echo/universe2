const cooldown = new Set();

module.exports = {
    name: 'gm',
    timeout: 10000,
    execute(message) {
        if (cooldown.has(message.author.id)) {
            message.channel.send('Pls wait 1 min').then(msg=>msg.delete({timeout:"2000"/*Time until delete in milliseconds*/})
           
            )}
        else {
            message.channel.send('https://tenor.com/view/cat-peek-a-boo-kitty-white-cat-cute-cat-gif-16415828')
        }
        cooldown.add(message.author.id);
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, 60000);


    }
}