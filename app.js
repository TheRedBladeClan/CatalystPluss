const http = require('http');
const express = require('express');
const app = express();

//
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


const { Client, Collection, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { sep } = require("path");
const { success, error, warning } = require("log-symbols"); 

const client = new Client();


client.on("ready", () => {
  
console.log(`${client.user.tag} | ${client.user.id} | Servers ${client.guilds.cache.size} | Usuuarios ${client.users.cache.size}` )

});
["commands", "aliases"].forEach(x => client[x] = new Collection());
const load = (dir = "./commands") => {

	readdirSync(dir).forEach(dirs => {
	
		const commands = readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));
		for (const file of commands) {
			const pull = require(`${dir}/${dirs}/${file}`);
			if (pull.help && typeof (pull.help.name) === "string" && typeof (pull.help.category) === "string") {
				if (client.commands.get(pull.help.name)) return console.warn(`${warning} existen dos comando con el nombre: ${pull.help.name}.`);
				client.commands.set(pull.help.name, pull);
				console.log(`${success} Comando cargado: ${pull.help.name}.`);

			}
			else {
			
				console.log(`${error} Error loading command in ${dir}${dirs}. you have a missing help.name or help.name is not a string. or you have a missing help.category or help.category is not a string`);
		
				continue;
			}

			if (pull.help.aliases && typeof (pull.help.aliases) === "object") {
				pull.help.aliases.forEach(alias => {
					
					if (client.aliases.get(alias)) return console.warn(`${warning} existen dos comandos con el mismo alias: ${alias}`);
					client.aliases.set(alias, pull.help.name);
				});
			}
		}

	});
};


load();


client.on("ready", () => {
  console.log("Iniciado.")
})


client.on("message", async (message, msg )=> {
  if (message.author.bot || !message.guild) return;
	const prefix = "ls/";
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();

	let command;
  
	//if (!message.member) message.member = await message.guild.fetchMember(message.author);

	if (!message.content.startsWith(prefix)) return;

	if (cmd.length === 0) return;
	if (client.commands.has(cmd)) command = client.commands.get(cmd);
	else if (client.aliases.has(cmd)) command = client.commands.get(client.aliases.get(cmd));

	if (command) command.run(client, message, args, prefix);
});


client.login("NzgxNjA2Mzk5NzcxMTQ4Mjg4.X8AFrw.b2OvOFhmAMlGHR3oyyCUgfVElWU");