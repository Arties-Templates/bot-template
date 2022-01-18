import '@sapphire/plugin-editable-commands/register'
import 'reflect-metadata'
import { inspect } from 'util'

process.env.NODE_ENV ??= 'development'

inspect.defaultOptions.depth = 1
