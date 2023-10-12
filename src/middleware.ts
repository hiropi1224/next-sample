import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const locales = ['ja', 'en'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/ja/${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
