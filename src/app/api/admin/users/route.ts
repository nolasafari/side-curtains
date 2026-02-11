import { NextRequest, NextResponse } from "next/server";
import { validateSession, getSessionCookieName } from "@/lib/auth";
import { getDb } from "@/lib/db";

export async function GET(req: NextRequest) {
  const token = req.cookies.get(getSessionCookieName())?.value;
  const user = validateSession(token);

  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const db = getDb();
  const users = db
    .prepare("SELECT id, email, username, display_name, role, avatar_url, bio, created_at, updated_at FROM users ORDER BY created_at DESC")
    .all();

  return NextResponse.json({ users });
}

export async function PATCH(req: NextRequest) {
  const token = req.cookies.get(getSessionCookieName())?.value;
  const user = validateSession(token);

  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { userId, role } = await req.json();

  if (!userId || !["admin", "moderator", "user"].includes(role)) {
    return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
  }

  if (userId === user.id) {
    return NextResponse.json({ error: "Cannot change your own role" }, { status: 400 });
  }

  const db = getDb();
  db.prepare("UPDATE users SET role = ?, updated_at = datetime('now') WHERE id = ?").run(role, userId);

  return NextResponse.json({ success: true });
}
