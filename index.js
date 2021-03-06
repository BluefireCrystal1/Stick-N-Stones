const { SlashCommandBuilder } = require('@discordjs/builders');
require('dotenv').config()
const Ascii = require('ascii-table');
const fs = require('node:fs');
const { Client, Intents, Collection, MessageEmbed, GuildMember, MessageAttachment, Message } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_INVITES] });

client.commands = new Collection();

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const EventTable = new Ascii("Events");
const CommandTable = new Ascii("Commands");


// ----
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
    
    EventTable.addRow(event.name)
}
// --
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
    CommandTable.addRow(command.data.name)
}
// ----

console.log(EventTable.toString());
console.log(CommandTable.toString());

client.login(process.env.TOKEN)