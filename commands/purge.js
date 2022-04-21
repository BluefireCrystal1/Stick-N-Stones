const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const { CommandInteraction } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription("Clear an amount of messages")
        .addIntegerOption(option =>
            option.setName("amount")
                .setDescription("Enter an amount")
                .setRequired(true)
        ),
    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const amount = interaction.options.get("amount").value
        const noPermissionsEmbed = new MessageEmbed()
            .setTitle("Error!")
            .setDescription("You do not have enough permissions")
            .setColor("RED")

        if (!interaction.member.permissions.has("MANAGE_MESSAGES")) return interaction.reply({ embeds: [noPermissionsEmbed] })

        const maximumErrorEmbed = new MessageEmbed()
            .setTitle("Error!")
            .setDescription("You cannot delete more than 100 messages")
            .setColor("RED")

        if (amount > 100) return interaction.reply({ embeds: [maximumErrorEmbed] });

        interaction.channel.bulkDelete(amount, true).then(messages => {
            const successfulEmbed = new MessageEmbed()
                .setTitle("Successful!")
                .setDescription(`Deleted \`${messages.size}\` messages`)
                .setColor("GREEN")
            interaction.reply({ embeds: [successfulEmbed] })
        })
    }
}