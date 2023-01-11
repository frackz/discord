import { GatewayIntentsString, SlashCommandBuilder, SlashCommandSubcommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "discord.js";

export interface Options {
    intents: Array<GatewayIntentsString>
}

export interface Command {
    executor: Function,
    builder?: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder,
    sub?: string
}

export interface Subcommand {
    executor: Function,
    builder: SlashCommandBuilder,
    sub?: string
}


export interface Button {
    id: string,
    executor: Function
}

export interface Event {
    handler: string,
    type: boolean,
    executor: Function
}

export interface Modal {
    id: string,
    executor: Function
}

export interface Select {
    id: string,
    executor: Function
}