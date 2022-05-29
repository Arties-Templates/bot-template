import { ApplyOptions } from '@sapphire/decorators'
import { isMessageInstance } from '@sapphire/discord.js-utilities'
import { Command } from '@sapphire/framework'
import type { Message } from 'discord.js'

@ApplyOptions<Command.Options>({
  description: 'Returns bot latency',
  chatInputCommand: {
    register: true
  }
})
export class Ping extends Command {
  public override async chatInputRun(interaction: Command.ChatInputInteraction): Promise<Message | unknown> {
    const msg = await interaction.reply({ content: 'Pong!', fetchReply: true, ephemeral: true })

    if (isMessageInstance(msg)) {
      const ping = Math.round(this.container.client.ws.ping)
      const apiPing = msg.createdTimestamp - interaction.createdTimestamp
  
      const content = `Pong!\nBot Latency: ${ping}ms\nAPI Latency: ${apiPing}ms`

      return await interaction.editReply(content)
    }

    return interaction.reply('Failed to ping...')
  }
}
