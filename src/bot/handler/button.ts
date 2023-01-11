import { Client, Interaction } from "discord.js"

import { Button } from "../types.js"

var Buttons = {}

export const Path = 'bot/buttons/'
export const Event = 'interactionCreate'
export const Executor = (bot: Client, interaction: Interaction) => {
    if (!interaction.isButton()) return
    if (!Buttons[interaction.customId]) return
    Buttons[interaction.customId](
        interaction,
        bot
    )
}

export const Init = (bot: Client, files: Array<any>) => {
    var buttons: Button[] = []

    // @ts-ignore
    files.forEach(e => buttons.push(e.Field))

    buttons.forEach(button => {
        Buttons[button.id] = button.executor
    })
}