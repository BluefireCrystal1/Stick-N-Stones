const { Client } = require('discord.js')

module.exports = {
    name: 'ready',
    once: true,
    /**
     * @param {Client} client 
     */
    execute(client) {
        console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
        client.user.setPresence({
            status: 'dnd'
        })
        client.user.setActivity(`Stick N Stones`, { type: 'PLAYING' });
    }
}