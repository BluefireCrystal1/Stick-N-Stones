const { MessageEmbed } = require('discord.js')
const { GuildMember } = require('discord.js')

module.exports = {
    name: 'guildMemberRemove',
    once: false,
    /**
     * @param {GuildMember} member 
     */
    async execute(member) {
        const embed = new MessageEmbed()
        .setTitle("Leave...")
        .setDescription(`**${member.user.username}** has left our server... 👋`)
        .setColor("RED")
        .setImage("https://i.imgur.com/6vuUgWD.png")
        .setAuthor({ name: member.user.username, iconURL: member.displayAvatarURL() })
        .setThumbnail("https://i.imgur.com/rfrPCei.png")

        const channel = member.client.channels.cache.get("966586956874145822")
        channel.send({ embeds: [embed] })
    }
}