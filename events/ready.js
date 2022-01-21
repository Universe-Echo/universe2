module.exports = (client) => {
    
    

   const arrayOfStatus = [
   
   `${client.channels.cache.size} channels`,
   'Made for The Universe',
   'un!',
   

   
   ];

   let index = 0;
    setInterval(() => {
if(index === arrayOfStatus.length) index = 0;

const status = arrayOfStatus[index];

client.user.setActivity(status);
index++;

 
    }, 5000)
}
