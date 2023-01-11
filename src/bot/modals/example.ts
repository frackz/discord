import { ModalSubmitInteraction, Client, ActionRowBuilder, StringSelectMenuBuilder } from "discord.js";
import { Modal } from "../types.js";

const ExampleSelect = new ActionRowBuilder<StringSelectMenuBuilder>()
.addComponents(
    new StringSelectMenuBuilder()
        .setCustomId('example')
        .setPlaceholder('Example')
        .addOptions(
            {
                label: "Example 1",
                description: "Baba grill",
                value: "first"
            },
            {
                label: "Example 2",
                description: "Roblox EDating",
                value: "second"
            }
        )
)

export const Field: Modal = <Modal> {
    id: 'example',
    executor: function(interaction: ModalSubmitInteraction, bot: Client) {
        interaction.reply({
            content: "You submitted the example modal!",
            components: [
                ExampleSelect
            ]
        })
    },
}