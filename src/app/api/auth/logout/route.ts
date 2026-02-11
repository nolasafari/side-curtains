import { NextRequest, NextResponse } from "next/server";
import { destroySession, getSessionCookieName } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const token = req.cookies.get(getSessionCookieName())?.value;
  if (token) {
    destroySession(token);
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(getSessionCookieName(), "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return response;
}
