import { Interaction, Client } from "discord.js";
import { Event } from "../types.js";

export const Field: Event = <Event> {
    handler: 'interactionCreate',
    type: false, // if false its (bot.on) if true its (bot.once)
    executor: function(interaction: Interaction, bot: Client) {
        console.log("new interaction")
    },
}