import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction, Client, SlashCommandBuilder } from "discord.js";
import { Command } from "../types.js";

export const Field: Command = <Command> {
    sub: "example.test",
    executor: function(interaction: ChatInputCommandInteraction, bot: Client) {
        interaction.reply({
            content: "This does nothing, it's just an example :)",
            components: [new ActionRowBuilder<ButtonBuilder>()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel("Example")
                        .setCustomId("example")
                        .setStyle(ButtonStyle.Primary)
                )]
        })
    },
}