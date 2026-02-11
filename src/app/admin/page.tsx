import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";
import { getDb } from "@/lib/db";
import Link from "next/link";

export default async function AdminPage() {
  const user = await getUser();
  if (!user || user.role !== "admin") redirect("/login");

  const db = getDb();
  const { count: userCount } = db.prepare("SELECT COUNT(*) as count FROM users").get() as { count: number };
  const recentUsers = db
    .prepare("SELECT username, display_name, role, created_at FROM users ORDER BY created_at DESC LIMIT 5")
    .all() as { username: string; display_name: string; role: string; created_at: string }[];

  const sections = [
    { title: "User Management", desc: "Manage members and roles", href: "/admin/users", ready: true },
    { title: "Forum Management", desc: "Manage categories and threads", href: "#", ready: false },
    { title: "Gallery Management", desc: "Moderate photo uploads", href: "#", ready: false },
    { title: "Moderation Queue", desc: "Review flagged content", href: "#", ready: false },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brg mb-2">Admin Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome back, {user.display_name}</p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <div className="text-4xl font-bold text-brg">{userCount}</div>
          <div className="text-gray-500 text-sm mt-1">Registered Users</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <div className="text-4xl font-bold text-gray-300">0</div>
          <div className="text-gray-500 text-sm mt-1">Forum Threads</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <div className="text-4xl font-bold text-gray-300">0</div>
          <div className="text-gray-500 text-sm mt-1">Gallery Photos</div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {sections.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className={`bg-white rounded-xl shadow p-6 hover:shadow-lg transition ${!s.ready ? "opacity-50 pointer-events-none" : ""}`}
          >
            <h3 className="font-semibold text-brg text-lg">{s.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
            {!s.ready && <span className="text-xs text-gray-400 mt-2 inline-block">Coming soon</span>}
          </Link>
        ))}
      </div>

      {/* Recent Registrations */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold text-brg text-lg mb-4">Recent Registrations</h2>
        {recentUsers.length === 0 ? (
          <p className="text-gray-400">No users yet.</p>
        ) : (
          <div className="space-y-3">
            {recentUsers.map((u) => (
              <div key={u.username} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <span className="font-medium text-gray-800">{u.display_name}</span>
                  <span className="text-gray-400 text-sm ml-2">@{u.username}</span>
                </div>
                <div className="flex items-center gap-3">
                  <RoleBadge role={u.role} />
                  <span className="text-gray-400 text-xs">{new Date(u.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function RoleBadge({ role }: { role: string }) {
  const colors: Record<string, string> = {
    admin: "bg-red-100 text-red-700",
    moderator: "bg-amber-100 text-amber-700",
    user: "bg-gray-100 text-gray-600",
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors[role] || colors.user}`}>
      {role}
    </span>
  );
}
