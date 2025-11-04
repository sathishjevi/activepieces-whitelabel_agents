import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'

export const aiAgentController: FastifyPluginAsyncTypebox = async (app) => {
  app.post('/run', async (request, reply) => {
    const { input } = request.body as { input?: string }

    if (!input) {
      return reply.status(400).send({ success: false, message: 'Missing input' })
    }

    // Placeholder: integrate AI logic here
    return { success: true, message: `AI Agent received: ${input}` }
  })
}
