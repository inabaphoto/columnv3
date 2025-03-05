/// <reference types="next" />
import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { client, getInfo, setSession } from '@/app/api/utils/common'

export async function GET(request: NextRequest) {
  const { sessionId, user } = getInfo(request)
  try {
    const { data } = await client.getApplicationParameters(user)
    return NextResponse.json(data as object, {
      headers: setSession(sessionId),
    })
  }
  catch (error: any) {
    console.error('Parameters API error:', error)
    return NextResponse.json(
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
