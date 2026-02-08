import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brg-dark text-cream-dark py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-cream font-bold text-lg mb-2">🏎️ Side Curtains</h3>
            <p className="text-sm italic">
              Getting back on the road again — one British roadster at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-semibold mb-2">Navigate</h4>
            <div className="flex flex-col space-y-1 text-sm">
              <Link href="/" className="hover:text-cream transition-colors">Home</Link>
              <Link href="/blog" className="hover:text-cream transition-colors">Blog</Link>
              <Link href="/gallery" className="hover:text-cream transition-colors">Gallery</Link>
              <Link href="/events" className="hover:text-cream transition-colors">Events</Link>
              <Link href="/forum" className="hover:text-cream transition-colors">Forum</Link>
              <Link href="/about" className="hover:text-cream transition-colors">About</Link>
            </div>
          </div>

          {/* Marques */}
          <div>
            <h4 className="text-cream font-semibold mb-2">Marques We Love</h4>
            <p className="text-sm">
              MG · Triumph · Austin-Healey · Jaguar · Lotus · Morgan · Sunbeam · Jensen-Healey
            </p>
          </div>
        </div>

        <div className="border-t border-brg-light mt-8 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Side Curtains. Made with ❤️ and a bit of Lucas smoke.</p>
        </div>
      </div>
    </footer>
  );
}
