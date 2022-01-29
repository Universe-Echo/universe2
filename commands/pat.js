

module.exports = {
    name: 'pat',
    async execute(client, message, args) {
       


            let url = 'https://g.tenor.com/v1/search?q=animepat&key=EURH7SHHRLJW&limit=8'
        
            let response = await fetch(url);
        
            let json = await response.json();
            console.log(json);
        
            const index = Math.floor(Math.random() * json.results.length);
        
        
        
            

        let huggedperson = message.mentions.members.first()
        let hugperson = message.author || await message.guild.members.fetch(args[0]);
        if (!huggedperson) return message.channel.send('**Tell a person to pat re .__.**') 
        if (huggedperson === message.member)
         message.channel.send('You wanna pat yourself fine');
        try {
            
       huggedperson.send(`**You got a hug from ${message.author.username} :)**`)
      
      message.channel.send(`**${message.author.username} hugs ${huggedperson.user.username}, cute uwu**`)
      message.channel.send(json.results[index].url)
      
     
        }
        catch (e) {
            return message.channel.send(`there was an error:\n${e.message}`)
      }
      }
    }
