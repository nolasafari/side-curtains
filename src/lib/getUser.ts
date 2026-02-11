import { cookies } from "next/headers";
import { validateSession, getSessionCookieName, SessionUser } from "./auth";

export async function getUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  return validateSession(token);
}
