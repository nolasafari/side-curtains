"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", username: "", displayName: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(form.username)) {
      setError("Username can only contain letters, numbers, hyphens and underscores");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed");
        return;
      }

      router.push(data.role === "admin" ? "/admin" : "/");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const fields = [
    { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { id: "username", label: "Username", type: "text", placeholder: "roadster_fan" },
    { id: "displayName", label: "Display Name", type: "text", placeholder: "John Smith" },
    { id: "password", label: "Password", type: "password", placeholder: "••••••••" },
    { id: "confirmPassword", label: "Confirm Password", type: "password", placeholder: "••••••••" },
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-brg text-center mb-2">Join the Club</h1>
        <p className="text-center text-gray-500 mb-8">Create your Side Curtains account</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="block text-sm font-medium text-gray-700 mb-1">
                {f.label}
              </label>
              <input
                id={f.id}
                type={f.type}
                required
                value={form[f.id as keyof typeof form]}
                onChange={(e) => update(f.id, e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brg focus:border-transparent outline-none transition text-gray-900"
                placeholder={f.placeholder}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brg text-cream py-2.5 rounded-lg font-semibold hover:bg-brg-light transition-colors disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-brg font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
