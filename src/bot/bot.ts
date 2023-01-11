import { Client } from 'discord.js'
import { Options } from './types.js'
import { Token } from '../config.js'

import { MySQL } from '../database.js'
import { Handler } from './handler.js'

export class Bot extends Client {
    constructor(options: Options) {
        super(options)

        new Handler('bot/handler/').find(async (file: string) => {
            const { Path, Event, Executor, Init } = await import('./'+file.split('dist//bot/')[1])

            if (Event) this.on(Event, (...args) => Executor(this, ...args))

            const Files = []
            new Handler(Path).find(async (File) => {
                Files.push(await import('./'+File.split('dist//bot/')[1]))
            })
            setTimeout(() => Init(this, Files), 50)
        })

        this.login(Token)
    }
}