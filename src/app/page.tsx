import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";

export default function Home() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const latestPosts = blogPosts.filter((p) => !p.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-cream overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <Image
          src="/images/hero-goodwood-race-web.jpg"
          alt="A field of vintage British sports cars at the start of a race, Goodwood Revival"
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          priority
          quality={85}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/50" />
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 text-center w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg">
            Side Curtains
          </h1>
          <p className="text-xl md:text-2xl text-cream-dark italic mb-2 drop-shadow-md">
            Getting back on the road again — one British roadster at a time
          </p>
          <div className="w-24 h-1 bg-leather mx-auto my-8 rounded" />
          <p className="text-lg max-w-2xl mx-auto text-cream-dark leading-relaxed drop-shadow-md">
            A curated community for enthusiasts and restorers of post-war British roadsters.
            MG, Triumph, Austin-Healey, Jaguar, Lotus, Morgan, and all the wonderful machines
            that make us smile — oil leaks and all.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="px-8 py-3 bg-cream text-brg font-bold rounded-lg hover:bg-cream-dark transition-colors duration-200 shadow-lg"
            >
              Read the Blog
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-3 border-2 border-cream text-cream font-bold rounded-lg hover:bg-white/10 transition-colors duration-200 shadow-lg"
            >
              Browse the Gallery
            </Link>
          </div>
          {/* Photo credit */}
          <p className="absolute bottom-3 right-4 text-xs text-cream/40">
            Photo: Nigel Cox · Goodwood Revival · CC BY-SA 2.0
          </p>
        </div>
      </section>

      {/* Featured Car Spotlight */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brg mb-2">Featured Car of the Month</h2>
          <p className="text-leather italic">February 2026</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-cream-dark">
          <div className="md:flex">
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px]">
              <Image
                src="/images/bugeye-sprite-featured.jpg"
                alt="Austin-Healey Bugeye Sprite (Frogeye) at Zandvoort — the happiest car ever made"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-cream text-lg font-bold">1959 Austin-Healey Bugeye Sprite</p>
                <p className="text-cream-dark text-sm italic">The happiest car ever made</p>
                <p className="text-cream-dark text-xs mt-1">Photo: Alf van Beem · CC0 Public Domain</p>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-brg mb-4">The Bugeye Sprite</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Is there a more joyful car in existence? With its cheeky headlamp &quot;eyes&quot; and
                irrepressible grin, the Bugeye Sprite (or Frogeye, if you&apos;re British) has been
                making people smile since 1958.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Designed by Gerry Coker, the Sprite was meant to be an affordable, fun sports car
                that anyone could enjoy. With just 43 horsepower and a kerb weight of around 1,500 lbs,
                it proved that you don&apos;t need power to have fun — you need lightness, responsiveness,
                and a willingness to get rained on occasionally.
              </p>
              <p className="text-leather font-medium italic">
                &quot;It&apos;s not about the destination. It&apos;s about the grin on the way there.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest from the Blog */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brg mb-2">Latest from the Blog</h2>
            <p className="text-leather italic">Stories, tips, and the occasional tall tale</p>
          </div>

          {featuredPost && (
            <div className="bg-white rounded-xl shadow-md p-8 mb-8 border-l-4 border-brg">
              <span className="inline-block bg-brg text-cream text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                FEATURED
              </span>
              <h3 className="text-2xl font-bold text-brg mb-2">
                <Link href={`/blog/${featuredPost.slug}`} className="hover:text-brg-light transition-colors">
                  {featuredPost.title}
                </Link>
              </h3>
              <p className="text-sm text-leather mb-3">{featuredPost.date} · {featuredPost.category}</p>
              <p className="text-foreground leading-relaxed">{featuredPost.excerpt}</p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-block mt-4 text-brg font-semibold hover:text-brg-light transition-colors"
              >
                Read more →
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <div key={post.slug} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <span className="inline-block bg-cream-dark text-leather text-xs px-3 py-1 rounded-full mb-3 font-medium">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-brg mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-brg-light transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-leather mb-3">{post.date}</p>
                <p className="text-foreground text-sm leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-3 text-brg text-sm font-semibold hover:text-brg-light transition-colors"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-brg text-cream font-bold rounded-lg hover:bg-brg-light transition-colors duration-200"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Join the Community CTA */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-brg to-brg-light rounded-2xl p-8 md:p-12 text-center text-cream">
          <h2 className="text-3xl font-bold mb-4">Join the Conversation</h2>
          <p className="text-cream-dark text-lg max-w-2xl mx-auto mb-6">
            Whether you&apos;re elbow-deep in a restoration, just bought your first British roadster,
            or simply love these cars from afar — there&apos;s a place for you here.
          </p>
          <Link
            href="/forum"
            className="inline-block px-8 py-3 bg-cream text-brg font-bold rounded-lg hover:bg-cream-dark transition-colors duration-200"
          >
            Visit the Forum
          </Link>
        </div>
      </section>

      {/* Quick Marques Bar */}
      <section className="bg-brg-dark text-cream py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium">
            {["MG", "Triumph", "Austin-Healey", "Jaguar", "Lotus", "Morgan", "Sunbeam", "Jensen-Healey"].map(
              (marque) => (
                <span key={marque} className="text-cream-dark hover:text-cream transition-colors cursor-default">
                  {marque}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
