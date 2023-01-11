import { Client, AnySelectMenuInteraction } from "discord.js";
import { Select } from "../types.js";

export const Field: Select = <Select> {
    id: 'example',
    executor: function(interaction: AnySelectMenuInteraction, bot: Client) {
        interaction.reply("You submitted the example select menu!")
    },
}