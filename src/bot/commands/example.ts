import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction, Client, SlashCommandBuilder } from "discord.js";
import { Command } from "../types.js";

export const Field: Command = <Command> {
    builder: new SlashCommandBuilder()
        .setName('example')
        .setDescription('This is a example command')
        .addSubcommand(sub => sub
            .setName('test')
            .setDescription('123')
        ),
}