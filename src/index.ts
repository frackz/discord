import { GatewayIntentBits } from 'discord.js'
import { Bot } from './bot/bot.js'

new Bot({
    intents: [
        // @ts-expect-error
        GatewayIntentBits.Guilds,
        // @ts-expect-error
		GatewayIntentBits.GuildMessages,
        // @ts-expect-error
		GatewayIntentBits.MessageContent,
        // @ts-expect-error
		GatewayIntentBits.GuildMembers,
    ]
})