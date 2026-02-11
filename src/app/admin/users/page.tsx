"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  email: string;
  username: string;
  display_name: string;
  role: string;
  created_at: string;
}

export default function AdminUsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadUsers() {
    const res = await fetch("/api/admin/users");
    if (res.status === 403) {
      router.push("/login");
      return;
    }
    const data = await res.json();
    setUsers(data.users || []);
    setLoading(false);
  }

  useEffect(() => {
    loadUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function changeRole(userId: number, role: string) {
    setError("");
    const res = await fetch("/api/admin/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, role }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error);
      return;
    }
    loadUsers();
  }

  const roleColors: Record<string, string> = {
    admin: "bg-red-100 text-red-700",
    moderator: "bg-amber-100 text-amber-700",
    user: "bg-gray-100 text-gray-600",
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-gray-400">Loading users...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brg mb-6">User Management</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">{error}</div>
      )}

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-brg text-cream">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold">User</th>
              <th className="px-6 py-3 text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-sm font-semibold">Role</th>
              <th className="px-6 py-3 text-sm font-semibold">Joined</th>
              <th className="px-6 py-3 text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-cream/30">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-800">{u.display_name}</div>
                  <div className="text-gray-400 text-sm">@{u.username}</div>
                </td>
                <td className="px-6 py-4 text-gray-600 text-sm">{u.email}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${roleColors[u.role] || roleColors.user}`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-400 text-sm">{new Date(u.created_at).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <select
                    value={u.role}
                    onChange={(e) => changeRole(u.id, e.target.value)}
                    className="text-sm border border-gray-300 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-brg text-gray-700"
                  >
                    <option value="user">User</option>
                    <option value="moderator">Moderator</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
