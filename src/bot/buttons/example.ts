import { ActionRowBuilder, ButtonInteraction, Client, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";
import { Button } from "../types.js";

const ExampleModal = new ModalBuilder()
    .setTitle("Example Modal")
    .setCustomId('example')
    .addComponents(
        new ActionRowBuilder<TextInputBuilder>()
            .addComponents(
                new TextInputBuilder()
                    .setLabel("Example Text")
                    .setRequired(true)
                    .setCustomId('Bob')
                    .setStyle(TextInputStyle.Short)
            )
    )

export const Field: Button = <Button> {
    id: 'example',
    executor: function(interaction: ButtonInteraction, bot: Client) {
        interaction.showModal(ExampleModal)
    },
}