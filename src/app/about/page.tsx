import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brg mb-3">About Side Curtains</h1>
        <p className="text-leather italic text-lg">
          Why we&apos;re here, and why it matters (to us, anyway)
        </p>
        <div className="w-16 h-1 bg-leather mx-auto mt-4 rounded" />
      </div>

      {/* The Story */}
      <div className="bg-white rounded-xl shadow-md p-8 md:p-10 mb-8">
        <h2 className="text-2xl font-bold text-brg mb-4">The Story</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Side Curtains started the way most things in the British car world start — with
            enthusiasm, a vague plan, and the quiet certainty that it would take longer than expected.
          </p>
          <p>
            The idea is simple: create a welcoming place on the internet for people who love
            post-war British roadsters. Not a commercial venture, not a slick media platform — just
            a spot where enthusiasts and restorers can share stories, swap advice, and appreciate
            these wonderful, maddening, beautiful machines together.
          </p>
          <p>
            The name? If you&apos;ve ever fumbled with a set of side curtains in a sudden downpour,
            you know. They&apos;re flimsy, fiddly, and never quite keep the rain out. But they&apos;re
            part of the experience — part of the deal you make when you choose a car that prioritises
            joy over practicality.
          </p>
          <p>
            That&apos;s what this site is about. The joy.
          </p>
        </div>
      </div>

      {/* What We Cover */}
      <div className="bg-white rounded-xl shadow-md p-8 md:p-10 mb-8">
        <h2 className="text-2xl font-bold text-brg mb-4">What We Cover</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: "🔴", label: "MG", detail: "T-Series, MGA, MGB, Midget" },
            { icon: "🏁", label: "Triumph", detail: "TR line, Spitfire, GT6" },
            { icon: "💪", label: "Austin-Healey", detail: "100, 3000, Sprite" },
            { icon: "🐆", label: "Jaguar", detail: "XK series, E-Type" },
            { icon: "🪶", label: "Lotus", detail: "Elan, Seven, Europa" },
            { icon: "🪵", label: "Morgan", detail: "Plus 4, 4/4, Plus 8" },
            { icon: "☀️", label: "Sunbeam", detail: "Alpine, Tiger" },
            { icon: "🔧", label: "And More", detail: "Jensen-Healey, TVR, etc." },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-3 bg-cream rounded-lg"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <span className="font-bold text-brg">{item.label}</span>
                <span className="text-sm text-leather ml-2">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-foreground mt-4 italic">
          Roughly 1945 to 1980 — from post-war optimism to the end of the chrome bumper era.
        </p>
      </div>

      {/* The Spirit */}
      <div className="bg-gradient-to-r from-brg to-brg-light rounded-xl p-8 md:p-10 text-cream mb-8">
        <h2 className="text-2xl font-bold mb-4">The Spirit of the Thing</h2>
        <div className="space-y-4 text-cream-dark leading-relaxed">
          <p>
            <strong className="text-cream">Fun.</strong> These cars make us happy. The site should too.
          </p>
          <p>
            <strong className="text-cream">Welcoming.</strong> Whether you&apos;ve owned British cars for
            40 years or you&apos;re just starting to look — you&apos;re welcome here.
          </p>
          <p>
            <strong className="text-cream">Helpful.</strong> The British car community has always been
            generous with knowledge. We carry that forward.
          </p>
          <p>
            <strong className="text-cream">No snobbery.</strong> A well-loved daily driver is just as
            welcome as a concours trailer queen. It&apos;s all about the love of the car.
          </p>
        </div>
      </div>

      {/* Get in Touch */}
      <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
        <h2 className="text-2xl font-bold text-brg mb-4">Get in Touch</h2>
        <p className="text-foreground leading-relaxed mb-6">
          Side Curtains is a personal project, built with care and fuelled by tea.
          If you&apos;d like to get involved, share a story, submit photos, or just say hello —
          we&apos;d love to hear from you.
        </p>
        <div className="bg-cream rounded-lg p-6 text-center">
          <p className="text-brg font-bold text-lg mb-2">hello@sidecurtains.com</p>
          <p className="text-leather text-sm italic">
            (Not a real email yet — but it will be soon!)
          </p>
        </div>
        <div className="text-center mt-6">
          <Link
            href="/forum"
            className="inline-block px-6 py-3 bg-brg text-cream font-bold rounded-lg hover:bg-brg-light transition-colors"
          >
            Or Join the Forum →
          </Link>
        </div>
      </div>
    </div>
  );
}
