/// <reference types="next" />
import { type NextRequest } from 'next/server'
import { client, getInfo } from '@/app/api/utils/common'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const { user } = getInfo(request)
    formData.append('user', user)
    const res = await client.fileUpload(formData)
    return new Response(res.data.id as any, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  catch (e: any) {
    console.error('File upload error:', e)
    return new Response(
      JSON.stringify({
        error: e.message || 'File upload failed',
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
