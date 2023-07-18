import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const cookie = req.cookies.get('token');
  const token = cookie?.value;

  if (req?.nextUrl?.pathname === '/admin' || req?.nextUrl?.pathname === '/admin/') {
    return NextResponse.redirect(
      new URL('/admin/login', process.env.NEXT_PUBLIC_BASE_URI)
    );
  }

  if (req?.nextUrl?.pathname === '/admin/login' && token) {
    return NextResponse.redirect(
      new URL(`/admin/dashboard`, process.env.NEXT_PUBLIC_BASE_URI)
    );
  }

  if (
    req?.nextUrl?.pathname.startsWith('/admin') &&
    req?.nextUrl.pathname !== '/admin/login'
  ) {
    if (!token) {
      return NextResponse.redirect(
        new URL('/admin/login', process.env.NEXT_PUBLIC_BASE_URI)
      );
    }
  }

  return NextResponse.next();
}
