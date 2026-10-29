import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/anim";
import { getPost } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — customeragent.` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Article not found — customeragent." }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-40 text-center">
      <h1 className="headline text-4xl">Article not found</h1>
      <Link to="/blog" className="btn-outline mt-8 inline-flex">Back to blog</Link>
    </main>
  ),
  component: PostPage,
});

function PostPage() {
  const post = Route.useLoaderData();
  return (
    <main>
      <section className="aurora grain relative overflow-hidden pb-12 pt-32 md:pt-44">
        <div className="relative z-[2] mx-auto max-w-3xl px-5 md:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <Reveal y={16}>
            <p className="eyebrow mt-8 text-signal-deep">{post.category} · {post.readTime} read</p>
            <h1 className="headline mt-4 text-4xl md:text-6xl">{post.title}</h1>
            <p className="mt-5 text-sm text-muted-foreground">{post.date}</p>
          </Reveal>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-5 pb-20 md:px-8">
        {post.body.map((p, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p className="mb-6 text-lg leading-relaxed text-foreground/85">{p}</p>
          </Reveal>
        ))}
        <Reveal>
          <div className="mt-12 rounded-3xl bg-ink p-8 text-ink-fg">
            <p className="headline text-2xl">Want this working for your business?</p>
            <Link to="/contact" className="btn-signal mt-6 inline-flex">Book a free call <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </article>
    </main>
  );
}
