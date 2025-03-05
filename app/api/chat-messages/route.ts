// Next.jsのAPIルート
import { client, getInfo } from '@/app/api/utils/common'

export async function POST(request: any) {
  try {
    const body = await request.json()
    const {
      inputs,
      query,
      files,
      conversation_id: conversationId,
      response_mode: responseMode,
    } = body
    const { user } = getInfo(request)
    const res = await client.createChatMessage(inputs, query, user, responseMode, conversationId, files)
    return new Response(res.data as any, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error: any) {
    console.error('Chat message error:', error)
    return new Response(
      JSON.stringify({
        error: error.message || 'Internal server error',
        status: 500
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}
