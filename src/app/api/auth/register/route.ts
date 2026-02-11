import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { hashPassword, createSession, getSessionCookieName } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, username, displayName, password } = await req.json();

    if (!email || !username || !displayName || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
      return NextResponse.json({ error: "Username can only contain letters, numbers, hyphens and underscores" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const db = getDb();

    // Check existing
    const existing = db.prepare("SELECT id FROM users WHERE email = ? OR username = ?").get(email, username) as { id: number } | undefined;
    if (existing) {
      return NextResponse.json({ error: "Email or username already taken" }, { status: 409 });
    }

    // First user gets admin role
    const userCount = (db.prepare("SELECT COUNT(*) as count FROM users").get() as { count: number }).count;
    const role = userCount === 0 ? "admin" : "user";

    const passwordHash = await hashPassword(password);

    const result = db
      .prepare("INSERT INTO users (email, username, display_name, password_hash, role) VALUES (?, ?, ?, ?, ?)")
      .run(email.toLowerCase(), username, displayName, passwordHash, role);

    const { token, expires } = createSession(Number(result.lastInsertRowid));

    const response = NextResponse.json({ success: true, role });
    response.cookies.set(getSessionCookieName(), token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(expires),
    });

    return response;
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
