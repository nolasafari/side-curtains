import { getDb } from "./db";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const SESSION_COOKIE = "sc_session";
const SESSION_EXPIRY_DAYS = 30;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function createSession(userId: number): { token: string; expires: string } {
  const db = getDb();
  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + SESSION_EXPIRY_DAYS * 24 * 60 * 60 * 1000).toISOString();

  db.prepare("INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)").run(token, userId, expires);

  return { token, expires };
}

export interface SessionUser {
  id: number;
  email: string;
  username: string;
  display_name: string;
  role: "admin" | "moderator" | "user";
  avatar_url: string | null;
  bio: string | null;
  created_at: string;
}

export function validateSession(token: string | undefined): SessionUser | null {
  if (!token) return null;

  const db = getDb();
  const row = db
    .prepare(
      `SELECT u.id, u.email, u.username, u.display_name, u.role, u.avatar_url, u.bio, u.created_at
       FROM sessions s JOIN users u ON s.user_id = u.id
       WHERE s.id = ? AND s.expires_at > datetime('now')`
    )
    .get(token) as SessionUser | undefined;

  return row ?? null;
}

export function destroySession(token: string): void {
  const db = getDb();
  db.prepare("DELETE FROM sessions WHERE id = ?").run(token);
}

export function getSessionCookieName(): string {
  return SESSION_COOKIE;
}
