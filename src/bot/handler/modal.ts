import { Client, Interaction } from "discord.js"

import { Modal } from "../types.js"

var Modals = {}

export const Path = 'bot/modals/'
export const Event = 'interactionCreate'
export const Executor = (bot: Client, interaction: Interaction) => {
    if (!interaction.isModalSubmit()) return
    if (!Modals[interaction.customId]) return
    Modals[interaction.customId](
        interaction,
        bot
    )
}

export const Init = (bot: Client, files: Array<any>) => {
    var modals: Modal[] = []

    // @ts-ignore
    files.forEach(e => modals.push(e.Field))

    modals.forEach(button => {
        Modals[button.id] = button.executor
    })
}