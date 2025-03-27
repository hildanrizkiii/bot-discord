const { Client, IntentsBitField ,ActivityType} = require('discord.js');
require('dotenv').config();
const registerCommands = require('./register-commands');


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on('messageCreate', (message) => {
    if(message.content === 'ping') {
        message.reply('pong');
    }
})
client.on('interactionCreate', (interaction) => {
    if(interaction.isChatInputCommand()) {
        if(interaction.commandName === 'ping') {
            interaction.reply('pong');
        }
    }
    if(interaction.isChatInputCommand()) {
        if(interaction.commandName === 'bio') {
            interaction.reply('BIO KONTOLLLLLLL');
        }
    }
    if(interaction.isChatInputCommand()) {
        if(interaction.commandName === 'sahur') {
            interaction.reply('tung tung tung sahur');
        }
    }
})

client.login(process.env.TOKEN_DISCORD);
client.on('ready', (c) => {
    console.log(`Logged in as ${c.user.tag}!`);

    client.user.setActivity({
        name: 'Hildan',
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/live/9UV8UHN3l5U?si=t4tJVpNHBhjH9jPF'
    });
});