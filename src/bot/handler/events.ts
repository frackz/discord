import { Client } from "discord.js"
import { Event } from '../types.js'

export const Path = 'bot/events/'

export const Init = (bot: Client, files: Array<any>) => {
    var events: Event[] = []

    // @ts-ignore
    files.forEach(e => events.push(e.Field))
    events.forEach(e => {
        var type = 'on'
        if (e.type) type = 'once'
        bot[type](e.handler, (...args) => e.executor(...args, bot))
    })
}