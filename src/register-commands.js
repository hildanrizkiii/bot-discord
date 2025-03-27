const {REST, Routes} = require('discord.js');
require('dotenv').config();


const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
    {
        name:'bio',
        description: 'Replies with your konto',
    },
    {
        name: 'sahur',
        description: 'tung tung tung sahur',
    },
    {
        name: 'gempa',
        description: 'gempa terkini',
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN_DISCORD);

(async() => {
    console.log("register slash commands");

    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }, 
        )
        console.log("Slash commands were registered successfully");
        
    }catch (error) {
        console.error("Error registering slash commands: ", error);
    }
})();