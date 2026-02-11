import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes
  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get("sc_session")?.value;
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
    // Note: full role validation happens in the page/API itself since middleware
    // can't access SQLite (edge runtime). The cookie presence check is a first gate.
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
