import Client from '@lib/Client'
import { srcDir } from '@lib/Constants'
import { envParseString } from '@lib/env'
import { config } from 'dotenv-cra'
import { join } from 'path'

config({
  path: join(srcDir, '.env')
})

const client = new Client({
  defaultPrefix: envParseString('PREFIX'),
  caseInsensitivePrefixes: true,
  caseInsensitiveCommands: true,
  intents: ['GUILDS', 'GUILD_MESSAGES']
})

void client.start()
