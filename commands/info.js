const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const { CommandInteraction } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription("Info about Stick N Stones"),
    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setAuthor({ name: "BluefireCrystal, Ibraycat" })
        .setTitle("Stick N Stones Info/Guide!")
        .setDescription("Coming Soon...\n (Also check out the title below)")
        .setImage("https://i.imgur.com/6vuUgWD.png")
        .setColor("#00B4FF")

        interaction.reply({ content: "Stick N Stones INFO", embeds: [embed] });
    }
}