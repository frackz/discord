import { readdirSync } from "fs"
import { URL } from 'url'

const __filename = new URL('', import.meta.url).pathname.replace('bot/handler.js', '').replace('/C:', 'C:')

export class Handler {
    file: string
    constructor(file: string) {
        this.file = __filename+'/'+file
    }

    find(load: Function, path?: string) {
        const cpath = path || this.file
        readdirSync(cpath).forEach(f => {
            if (f.endsWith('.map')) return
            if (!f.endsWith(".js")) this.find(load, cpath+f+'/')
            else load(cpath+f)
        })
    }
}