import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-block text-brg font-medium hover:text-brg-light transition-colors mb-8"
      >
        ← Back to Blog
      </Link>

      {/* Article */}
      <article>
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-cream-dark text-leather text-xs px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span className="text-sm text-leather">{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold text-brg mb-4">{post.title}</h1>
          <div className="w-16 h-1 bg-leather rounded" />
        </div>

        <div className="prose prose-lg max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <h3 key={index} className="text-xl font-bold text-brg mt-8 mb-2">
                  {paragraph.replace(/\*\*/g, "")}
                </h3>
              );
            }
            if (paragraph.startsWith("**")) {
              const parts = paragraph.split("**");
              return (
                <p key={index} className="text-foreground leading-relaxed mb-4">
                  <strong className="text-brg">{parts[1]}</strong>
                  {parts[2]}
                </p>
              );
            }
            if (/^\d\./.test(paragraph)) {
              return (
                <p key={index} className="text-foreground leading-relaxed mb-2 pl-4">
                  {paragraph}
                </p>
              );
            }
            return (
              <p key={index} className="text-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      {/* Post Footer */}
      <div className="mt-12 pt-8 border-t border-cream-dark">
        <div className="bg-cream-dark rounded-xl p-6 text-center">
          <p className="text-leather italic mb-3">
            Enjoyed this? Got thoughts? Come chat about it.
          </p>
          <Link
            href="/forum"
            className="inline-block px-6 py-2 bg-brg text-cream font-bold rounded-lg hover:bg-brg-light transition-colors"
          >
            Join the Discussion
          </Link>
        </div>
      </div>
    </div>
  );
}
