const { Client, IntentsBitField ,ActivityType} = require('discord.js');
require('dotenv').config();
const registerCommands = require('./register-commands');
const fetch = require('node-fetch');
const dataBmkg = 'https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json';
const urlBmkg = 'https://data.bmkg.go.id/DataMKG/TEWS/';




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
        if(interaction.commandName === 'bio') {
            interaction.reply('BIO KONTOLLLLLLL');
        }
    }
    if(interaction.isChatInputCommand()) {
        if(interaction.commandName === 'sahur') {
            interaction.reply('tung tung tung sahur');
        }
    }
    if(interaction.isChatInputCommand()) {
        if(interaction.commandName === 'gempa') {
            fetch(dataBmkg)
            .then(res => res.json())
            .then(dagem => { console.log(dagem);
                const embed = {
                    color: 0x0099ff,
                    image: {
                        url: urlBmkg + dagem.Infogempa.gempa.Shakemap,
                    },
                    title: 'Gempa Terkini',
                    description: `
                    Tanggal: ${dagem.Infogempa.gempa.Tanggal}
                    Lokasi: ${dagem.Infogempa.gempa.Wilayah}
                    Magnitudo: ${dagem.Infogempa.gempa.Magnitude}
                    `,
                    timestamp: new Date(),
                    author: {
                        name: 'BMKG',
                    },
                    footer: {
                        text: 'Hildan BOT 2025',
                    }
                }
                interaction.reply({ embeds: [embed] });
            })
        }
    }
    if(interaction.isChatInputCommand()) {
        if(interaction.commandName === 'help') {
            interaction.reply(
                {
                    content: 'List Commands',
                    embeds: [
                        {
                            color: 0x0099ff,
                            title: 'Commands',
                            description: `
                            /bio
                            /sahur
                            /gempa
                            /help
                            `,
                            timestamp: new Date(),
                            author: {
                                name: 'Hildan',
                            },
                            footer: {
                                text: 'Hildan BOT 2025',
                            }
                        }
                    ]
                }
            );
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