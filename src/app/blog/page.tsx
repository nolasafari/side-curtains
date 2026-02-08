import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brg mb-3">The Blog</h1>
        <p className="text-leather italic text-lg">
          Stories, history, tips, and the occasional excuse for buying another parts car
        </p>
        <div className="w-16 h-1 bg-leather mx-auto mt-4 rounded" />
      </div>

      {/* Category Filter (static for now) */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {["All", "News", "History", "Technical", "Fun"].map((cat) => (
          <span
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-default transition-colors ${
              cat === "All"
                ? "bg-brg text-cream"
                : "bg-cream-dark text-brg hover:bg-brg hover:text-cream"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Posts List */}
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow border-l-4 border-brg"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="bg-cream-dark text-leather text-xs px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <span className="text-sm text-leather">{post.date}</span>
              {post.featured && (
                <span className="bg-brg text-cream text-xs px-3 py-1 rounded-full font-semibold">
                  FEATURED
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold text-brg mb-3">
              <Link href={`/blog/${post.slug}`} className="hover:text-brg-light transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-foreground leading-relaxed mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-brg font-semibold hover:text-brg-light transition-colors"
            >
              Read the full article →
            </Link>
          </article>
        ))}
      </div>

      {/* Coming Soon Note */}
      <div className="text-center mt-12 p-8 bg-cream-dark rounded-xl">
        <p className="text-leather italic">
          More stories coming soon. Got a tale to tell about your British roadster?
          <br />
          We&apos;d love to hear it in the{" "}
          <Link href="/forum" className="text-brg font-semibold hover:text-brg-light">
            forum
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
