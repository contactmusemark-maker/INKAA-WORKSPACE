import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/dashboard','/leads','/messages','/calls','/analytics','/tasks','/documents','/calendar','/settings','/pipeline','/billing','/team','/chat'];

export function middleware(request: NextRequest) {
  const hasSession = request.cookies.has('inkaa_session');
  const { pathname } = request.nextUrl;
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !hasSession) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'] };
