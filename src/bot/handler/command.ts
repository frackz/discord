import { ChatInputCommandInteraction, Client, CommandInteraction, Routes } from "discord.js"
import { REST } from '@discordjs/rest'

import { Token, ID, Guild} from '../../config.js'
import { Command, Subcommand } from "../types.js"

var Commands = {}
var Subs = {}

export const Path = 'bot/commands/'
export const Event = 'interactionCreate'
export const Executor = (bot: Client, interaction: ChatInputCommandInteraction) => {
    if (!interaction.isCommand()) return
    const command = interaction.commandName
    if (!Subs[command]) {
        if (!Commands[command]) return
        Commands[command](
            interaction,
            bot
        )
    }

    var sub
    try {
        sub = interaction.options.getSubcommand()
    } catch {
        sub = null
    }

    if (Subs[command] == null) return interaction.reply("No sub-command is registered")

    Subs[command].forEach(e => {
        if (e.sub == sub) {
            e.executor(interaction, bot)
        }
    })
}

export const Init = (bot: Client, files: Array<any>) => {
    var commands: Command[] = []

    // @ts-ignore
    files.forEach(e => commands.push(e.Field))

    const Rest = new REST({
        version: '10'
    }).setToken(Token)
    const data = []

    commands.forEach(file => {
        if(!file.sub) {
            data.push(file.builder)
            Commands[file.builder.name] =  file.executor
            return
        }

        const values = file.sub.split('.')
        if (values.length < 2) return console.log("Sub attribute under length 2")

        if(!Subs[values[0]]) Subs[values[0]] = []
        Subs[values[0]].push({
            sub: values[1],
            executor: file.executor
        })
    })

    Rest.put(
        Routes.applicationGuildCommands(ID, Guild), {
            body: data
        }).catch(console.error)
}