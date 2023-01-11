import { createPool } from 'mysql2/promise'
import { Database } from './config.js'

export const MySQL = createPool(Database)