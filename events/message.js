const { TIMEOUT } = require("dns");
const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);

const { Collection } = require('discord.js')
    
    const Timeout = new Collection();
    
module.exports = (client, message) => {
    const Prefix = '>';
    //command handler and event
   
    if (!message.content.startsWith(Prefix)) return;
    if (message.author.bot) return;

    const args = message.content.slice(Prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();  

if (command === 'ping') {
    client.commands.get('ping').execute(client, message);
}   
else if (command === 'embed') {
    client.commands.get('embed').execute(message); 
}
else if (command === 'help') {
    client.commands.get('help').execute(client, message); 
}
else if (command === 'poll') {
    client.commands.get('poll').run(client, message, args);
}
else if (command === 'puppy') {
    client.commands.get('puppy').execute(message); 
}
else if (command === 'happy') {
    client.commands.get('happy').execute(message); 
}
else if (command === 'sad') {
    client.commands.get('sad').execute(message);
}
else if (command === 'purge') {
    client.commands.get('purge').execute(client, message, args);
}
else if (command === 'aa') {
    client.commands.get('aa').execute(message);
}
else if (command === 'serverinfo') {
    client.commands.get('serverinfo').run(client, message, args);
}
else if (command === 'ban') {
    client.commands.get('ban').execute(client, message, args);
}
else if (command === 'kick') {
    client.commands.get('kick').execute(client, message, args);
}
else if (command === 'avatar') {
    client.commands.get('avatar').execute(client, message, args);
}
else if (command === 'mute') {
    client.commands.get('mute').execute(client, message, args);
}
else if (command === 'tmute') {
    client.commands.get('tmute').execute(client, message, args);
}
else if (command === 'unmute') {
    client.commands.get('unmute').execute(client, message, args);
}
else if (command === 'unban') {
    client.commands.get('unban').execute(client, message, args);
}
else if (command === 'emoji') {
    client.commands.get('emoji').run(client, message, args);
}
else if (command === 'dm') {
    client.commands.get('dm').execute(client, message, args);
}
else if (command === 'gm') {
    client.commands.get('gm').execute(message);
}
else if (command === 'gn') {
    client.commands.get('gn').execute(message);
}
else if (command === 'angry') {
    client.commands.get('angry').execute(message);
}
else if (command === 'create') {
    client.commands.get('create').run(client, message, args);
}
else if (command === 'delete') {
    client.commands.get('delete').run(client, message, args);
}
else if (command === 'fun') {
    client.commands.get('fun').execute(message);
}
else if (command === 'utility') {
    client.commands.get('utility').execute(message);
}
else if (command === '8ball') {
    client.commands.get('8ball').execute(client, message);
}
else if (command === 'servers') {
    client.commands.get('servers').execute(client, message);
}
else if (command === 'membercount') {
    client.commands.get('membercount').execute(message, args);
}
else if (command === 'mc') {
    client.commands.get('mc').execute(message, args);
}
else if (command === 'nuke') {
    client.commands.get('nuke').run(client, message, args);
}
else if (command === 'warn') {
    client.commands.get('warn').execute(client, message, args);
}

else if (command === 'whois') {
    client.commands.get('whois').execute(client, message, args);

}
else if (command === 'play') {
    client.commands.get('play').execute(client, message, args);


}
else if (command === 'cinfo') {
    client.commands.get('cinfo').execute(client, message, args);

}
else if (command === 'lock') {
    client.commands.get('lock').execute(client, message, args);

}
else if (command === 'unlock') {
    client.commands.get('unlock').execute(client, message, args);

}
else if (command === 'hug') {
    client.commands.get('hug').execute(client, message, args);
}
else if (command === 'pat') {
    client.commands.get('pat').execute(client, message, args);
}
else if (command === 'uptime') {
    client.commands.get('uptime').execute(client, message, args);
}
else if (command === 'role') {
    client.commands.get('role').execute(client, message, args);
}
else if (command === 'weather') {
    client.commands.get('weather').execute(client, message, args);


}
/**else if (command === 'nick') {
    client.commands.get('nick').execute(client, message, args);
}
**/
else if (command === 'tops') {
    client.commands.get('tops').execute(client, message, args);
}
else if (command === 'av') {
    client.commands.get('av').execute(client, message, args);
}
}