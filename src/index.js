const { Client, IntentsBitField} = require('discord.js');
const { dotenv } = require('dotenv').config();
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent
    ]
});


client.login(process.env.TOKEN_DISCORD);
client.on('ready', (c) => {
    console.log(`Logged in as ${c.user.tag}!`);
});