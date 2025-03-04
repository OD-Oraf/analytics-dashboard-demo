import { NextRequest, NextResponse } from "next/server";
import { analytics } from './utils/analytics'

export default async function middleware(req: NextRequest) {
    // User currently navigating to the home page
    if(req.nextUrl.pathname === '/') {
        // Track analytics event
        try {
            await analytics.track("pageview", {
                page: "/",
                country: req.geo?.country,
            })
        } catch (e) {
            console.error(e)
        }
    }

    return NextResponse.next()
}

export const matcher = {
    matcher: ['/']
}