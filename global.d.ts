// global type declarations
import type { NextRequest, NextResponse } from 'next/server'

declare global {
    // extend global namespace
}

// Module augmentations
declare module 'next/server' {
    export type { NextRequest, NextResponse }
}

// 必須のNext.js型を直接インポートする代わりにグローバルで宣言
declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_APP_ID: string
        NEXT_PUBLIC_APP_KEY: string
        NEXT_PUBLIC_API_URL: string
    }
}

// NextRequest型の宣言
declare interface NextRequest {
    json(): Promise<any>
    formData(): Promise<FormData>
    cookies: {
        get(name: string): { value: string } | undefined
    }
}

// NextResponse型の宣言
declare namespace NextResponse {
    function json(body: any, init?: ResponseInit): Response
} 