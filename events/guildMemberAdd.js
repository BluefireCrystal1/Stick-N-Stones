const { MessageEmbed } = require('discord.js')
const { GuildMember } = require('discord.js')

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    /**
     * @param {GuildMember} member 
     */
    async execute(member) {
        const embed = new MessageEmbed()
        .setTitle("Welcome!")
        .setDescription(`Hey **${member.user.username}**! Welcome to Stick N Stones Development server.`)
        .setColor("#00B4FF")
        .setFooter({ text: "User created at" })
        .setTimestamp(member.user.createdTimestamp)
        .setImage("https://i.imgur.com/6vuUgWD.png")
        .setAuthor({ name: member.user.username, iconURL: member.displayAvatarURL() })
        .setThumbnail("https://i.imgur.com/rfrPCei.png")

        const channel = member.client.channels.cache.get("966568185857974272")
        channel.send({ embeds: [embed] })
    }
}