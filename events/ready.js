module.exports = (client) => {
    
    

   const arrayOfStatus = [
   `${client.guilds.cache.size} servers`,
   `${client.channels.cache.size} channels`,
   
   'p!help',
   `Made by NEPTUNE`

   
   ];

   let index = 0;
    setInterval(() => {
if(index === arrayOfStatus.length) index = 0;

const status = arrayOfStatus[index];

client.user.setActivity(status);
index++;

 
    }, 5000)
}
