// Next.jsのAPIルート
import { client, getInfo, setSession } from '@/app/api/utils/common'

export async function GET(request: any) {
  const { sessionId, user } = getInfo(request)
  try {
    const { data } = await client.getApplicationParameters(user)
    return Response.json(data as object, {
      headers: setSession(sessionId),
    })
  }
  catch (error: any) {
    console.error('Parameters API error:', error)
    return Response.json(
      {
        error: error.message || 'Failed to fetch application parameters',
        status: 500
      },
      {
        status: 500,
        headers: setSession(sessionId)
      }
    )
  }
}
