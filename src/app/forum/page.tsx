import Link from "next/link";

const forumCategories = [
  {
    icon: "💬",
    name: "General Chat",
    description: "Anything and everything about British roadsters. Pull up a chair.",
    topics: 12,
    posts: 47,
  },
  {
    icon: "🔴",
    name: "MG",
    description: "T-Series, MGA, MGB, Midget — Safety Fast!",
    topics: 8,
    posts: 23,
  },
  {
    icon: "🏁",
    name: "Triumph",
    description: "TR2 through TR8, Spitfire, GT6, and the Herald family.",
    topics: 6,
    posts: 18,
  },
  {
    icon: "💪",
    name: "Austin-Healey",
    description: "Big Healeys, Sprites, and everything in between.",
    topics: 4,
    posts: 11,
  },
  {
    icon: "🐆",
    name: "Jaguar",
    description: "XK series, E-Type, and the grand tourers.",
    topics: 5,
    posts: 14,
  },
  {
    icon: "🏎️",
    name: "Other Marques",
    description: "Lotus, Morgan, Sunbeam, Jensen-Healey, TVR, and friends.",
    topics: 3,
    posts: 8,
  },
  {
    icon: "🔧",
    name: "Workshop & Tech",
    description: "Mechanical advice, electrical gremlins, restoration tips, and SU carb therapy.",
    topics: 15,
    posts: 52,
  },
  {
    icon: "🏷️",
    name: "For Sale / Wanted",
    description: "Cars, parts, literature, and the occasional barn find lead.",
    topics: 7,
    posts: 19,
  },
];

export default function ForumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brg mb-3">The Forum</h1>
        <p className="text-leather italic text-lg">
          Where the conversation happens — grab a cuppa and join in
        </p>
        <div className="w-16 h-1 bg-leather mx-auto mt-4 rounded" />
      </div>

      {/* Coming Soon Banner */}
      <div className="bg-gradient-to-r from-brg to-brg-light rounded-xl p-6 md:p-8 text-cream text-center mb-10">
        <h2 className="text-2xl font-bold mb-2">Coming Soon!</h2>
        <p className="text-cream-dark max-w-xl mx-auto">
          The forum is currently being set up. We&apos;re building a proper place for conversation —
          not just a comments section, but a real community space where you can share, ask, and help
          each other out.
        </p>
        <p className="text-cream mt-4 font-medium">
          Want to be among the first to join? Drop us a note on the{" "}
          <Link href="/about" className="underline hover:text-cream-dark">
            About page
          </Link>
          .
        </p>
      </div>

      {/* Preview of Forum Categories */}
      <h3 className="text-xl font-bold text-brg mb-4">Planned Categories</h3>
      <div className="space-y-3">
        {forumCategories.map((cat) => (
          <div
            key={cat.name}
            className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition-shadow border border-cream-dark"
          >
            <span className="text-3xl">{cat.icon}</span>
            <div className="flex-1">
              <h4 className="font-bold text-brg">{cat.name}</h4>
              <p className="text-sm text-foreground">{cat.description}</p>
            </div>
            <div className="hidden sm:flex gap-4 text-xs text-leather">
              <div className="text-center">
                <span className="block font-bold text-brg text-lg">{cat.topics}</span>
                topics
              </div>
              <div className="text-center">
                <span className="block font-bold text-brg text-lg">{cat.posts}</span>
                posts
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ground Rules Preview */}
      <div className="mt-12 bg-cream-dark rounded-xl p-6 md:p-8">
        <h3 className="text-xl font-bold text-brg mb-4">Forum Ground Rules</h3>
        <p className="text-foreground mb-4 italic">
          Simple rules for a happy community:
        </p>
        <ul className="space-y-2 text-foreground">
          <li className="flex items-start gap-2">
            <span className="text-brg font-bold">1.</span>
            <span><strong>Be kind.</strong> We&apos;re all here because we love these cars. Disagreements are fine — just keep it friendly.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brg font-bold">2.</span>
            <span><strong>Share what you know.</strong> Your experience might save someone a weekend of frustration.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brg font-bold">3.</span>
            <span><strong>Photos welcome!</strong> We never get tired of seeing British roadsters. Ever.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brg font-bold">4.</span>
            <span><strong>No gatekeeping.</strong> Whether you drive a concours winner or a daily-driven beater, you belong here.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brg font-bold">5.</span>
            <span><strong>Lucas jokes are always acceptable.</strong> It&apos;s tradition.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
