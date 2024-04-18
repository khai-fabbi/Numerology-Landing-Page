import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import {
  ACCESS_TOKEN_KEY,
  PROTECTED_ROUTES,
  REFRESH_TOKEN_KEY,
} from './utils/auth'

// eslint-disable-next-line consistent-return
export function middleware(request: NextRequest) {
  const { url, nextUrl, cookies } = request
  const { pathname } = nextUrl

  // *check middleware
  const accessToken = cookies.get(ACCESS_TOKEN_KEY)?.value

  const isAccessingSensitiveRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  )

  if (!accessToken && isAccessingSensitiveRoute) {
    cookies.delete(ACCESS_TOKEN_KEY)
    cookies.delete(REFRESH_TOKEN_KEY)
    const response = NextResponse.redirect(new URL('/', url))
    return response
  }

  return NextResponse.next()
}

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// }
export const config = {
  matcher: ['/account/:path*', '/danh-sach-goi/:path*', '/check-out/:path*'],
}
