// global type declarations
import type { NextRequest, NextResponse } from 'next/server'

declare global {
    // extend global namespace
}

// Module augmentations
declare module 'next/server' {
    export type { NextRequest, NextResponse }
} 