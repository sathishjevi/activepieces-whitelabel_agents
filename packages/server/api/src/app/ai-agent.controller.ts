import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import { Type } from '@sinclair/typebox'
import OpenAI from '@ai-sdk/openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export const aiAgentController: FastifyPluginAsyncTypebox = async (app) => {
  app.post('/run', {
    schema: {
      body: Type.Object({
        input: Type.String()
      }),
      response: {
        200: Type.Object({
          success: Type.Boolean(),
          output: Type.String()
        })
      }
    }
  }, async (request, reply) => {
    const { input } = request.body
    try {
      const result = await openai.chat({
        model: 'gpt-4',
        messages: [{ role: 'user', content: input }]
      })
      return { success: true, output: result.choices[0].message.content }
    } catch (err) {
      app.log.error(err)
      return reply.status(500).send({ success: false, output: 'Internal Server Error' })
    }
  })
}

