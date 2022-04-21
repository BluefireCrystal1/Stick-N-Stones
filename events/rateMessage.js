const { Message } = require('discord.js')

module.exports = {
    name: 'messageCreate',
    once: false,
    /**
     * @param {Message} message 
     */
    async execute(message) {
        if (message.content.startsWith("-")) return;

        if (message.channel === message.client.channels.cache.get("965604547672285265")) {
            message.react("1️⃣")
            message.react("2️⃣")
            message.react("3️⃣")
            message.react("4️⃣")
            message.react("5️⃣")
        }
    }
}