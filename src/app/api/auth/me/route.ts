import { NextRequest, NextResponse } from "next/server";
import { validateSession, getSessionCookieName } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const token = req.cookies.get(getSessionCookieName())?.value;
  const user = validateSession(token);

  if (!user) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({ user });
}
