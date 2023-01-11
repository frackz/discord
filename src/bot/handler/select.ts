import { Client, Interaction } from "discord.js"

import { Select } from "../types.js"

var Selects = {}

export const Path = 'bot/selects/'
export const Event = 'interactionCreate'
export const Executor = (bot: Client, interaction: Interaction) => {
    if (!interaction.isStringSelectMenu()) return
    if (!Selects[interaction.customId]) return
    Selects[interaction.customId](
        interaction,
        bot
    )
}

export const Init = (bot: Client, files: Array<any>) => {
    var selects: Select[] = []

    // @ts-ignore
    files.forEach(e => selects.push(e.Field))

    selects.forEach(button => {
        Selects[button.id] = button.executor
    })
}