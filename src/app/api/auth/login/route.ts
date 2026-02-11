import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { verifyPassword, createSession, getSessionCookieName } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const db = getDb();
    const user = db.prepare("SELECT id, password_hash, role FROM users WHERE email = ?").get(email.toLowerCase()) as
      | { id: number; password_hash: string; role: string }
      | undefined;

    if (!user || !(await verifyPassword(password, user.password_hash))) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const { token, expires } = createSession(user.id);

    const response = NextResponse.json({ success: true, role: user.role });
    response.cookies.set(getSessionCookieName(), token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(expires),
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
