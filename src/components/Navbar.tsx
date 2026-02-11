"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface AuthUser {
  username: string;
  display_name: string;
  role: string;
}

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => setUser(d.user))
      .catch(() => {})
      .finally(() => setAuthLoaded(true));
  }, []);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push("/");
    router.refresh();
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/events", label: "Events" },
    { href: "/forum", label: "Forum" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="bg-brg text-cream shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🏎️</span>
            <div>
              <span className="font-bold text-xl tracking-wide">Side Curtains</span>
              <span className="hidden sm:inline text-cream-dark text-xs ml-2 italic">
                Getting back on the road again
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-md text-cream hover:bg-brg-light transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Auth section */}
            {authLoaded && (
              <>
                {user ? (
                  <>
                    {user.role === "admin" && (
                      <Link
                        href="/admin"
                        className="px-4 py-2 rounded-md text-amber-300 hover:bg-brg-light transition-colors duration-200 font-medium"
                      >
                        Admin
                      </Link>
                    )}
                    <span className="px-3 py-2 text-cream/70 text-sm">
                      {user.display_name}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 rounded-md text-cream hover:bg-brg-light transition-colors duration-200 font-medium"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="px-4 py-2 rounded-md text-cream hover:bg-brg-light transition-colors duration-200 font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="px-4 py-1.5 rounded-md bg-cream text-brg hover:bg-cream-dark transition-colors duration-200 font-semibold text-sm"
                    >
                      Register
                    </Link>
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 rounded-md text-cream hover:bg-brg-light transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {authLoaded && (
              <>
                {user ? (
                  <>
                    {user.role === "admin" && (
                      <Link
                        href="/admin"
                        className="block px-4 py-2 rounded-md text-amber-300 hover:bg-brg-light transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        Admin
                      </Link>
                    )}
                    <div className="px-4 py-2 text-cream/70 text-sm">{user.display_name}</div>
                    <button
                      onClick={() => { handleLogout(); setIsOpen(false); }}
                      className="block w-full text-left px-4 py-2 rounded-md text-cream hover:bg-brg-light transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="block px-4 py-2 rounded-md text-cream hover:bg-brg-light transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="block px-4 py-2 rounded-md text-cream hover:bg-brg-light transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
