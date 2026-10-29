import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealWords, Tilt } from "@/components/anim";
import { POSTS } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — customeragent." },
      { name: "description", content: "Insights on SEO, AEO, AI agents, web design and social from the customeragent. team." },
      { property: "og:title", content: "Blog — customeragent." },
      { property: "og:description", content: "Insights on SEO, AEO, AI agents, web design and social." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const featured = POSTS[0]!;
  const rest = POSTS.slice(1);
  return (
    <main>
      <section className="aurora grain relative overflow-hidden pb-14 pt-32 md:pt-44">
        <div className="relative z-[2] mx-auto max-w-6xl px-5 md:px-8">
          <Reveal y={16}><p className="eyebrow text-muted-foreground">Blog</p></Reveal>
          <h1 className="headline mt-5 max-w-4xl text-5xl md:text-7xl">
            <RevealWords text="Notes from the" />
            <span className="text-signal"><RevealWords text=" frontier." delay={0.25} /></span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
        <Reveal>
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group block rounded-4xl bg-ink p-8 text-ink-fg transition-transform duration-500 hover:-translate-y-1 md:p-14"
          >
            <p className="eyebrow text-signal">Featured · {featured.category}</p>
            <h2 className="headline mt-4 max-w-3xl text-3xl transition-colors group-hover:text-signal md:text-5xl">{featured.title}</h2>
            <p className="mt-4 max-w-2xl text-ink-muted">{featured.excerpt}</p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
              Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </p>
          </Link>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Tilt className="h-full">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:border-signal/50 hover:shadow-[var(--shadow-lift)]"
                >
                  <span className="w-fit rounded-full bg-signal-tint px-3 py-1 text-xs font-semibold text-signal-deep">{post.category}</span>
                  <h3 className="mt-5 font-display text-xl font-bold leading-snug">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                  <p className="mt-6 text-xs text-muted-foreground">{post.date} · {post.readTime} read</p>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
