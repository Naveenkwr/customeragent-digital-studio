export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "what-is-aeo",
    title: "What is AEO — and why SEO alone is no longer enough",
    excerpt: "ChatGPT, Perplexity and Google AI Overviews now answer before anyone clicks. Here's how to become the answer.",
    category: "AEO",
    date: "Oct 20, 2026",
    readTime: "6 min",
    body: [
      "Answer Engine Optimization (AEO) is the practice of structuring your content so AI assistants quote, cite and recommend your brand when people ask questions.",
      "Classic SEO still matters — AI engines lean heavily on pages that already rank. But they reward clear answers, strong entities, structured data and trustworthy sources.",
      "Start with the questions your customers really ask. Answer each one in the first two sentences of a dedicated section, back it with proof, and mark it up with schema.",
      "Then measure: track how often you're cited in ChatGPT, Perplexity and Gemini for your core topics, and iterate monthly.",
    ],
  },
  {
    slug: "ai-agents-for-small-business",
    title: "5 AI agents every growing business should run in 2026",
    excerpt: "From lead qualification to support triage — the agents that pay for themselves in weeks.",
    category: "AI Agents",
    date: "Oct 8, 2026",
    readTime: "5 min",
    body: [
      "AI agents are no longer demos. Well-scoped agents now handle real work 24/7 and hand off to humans when it matters.",
      "1. Lead qualifier — answers questions on your site and books meetings. 2. Support triage — resolves common tickets instantly. 3. Content repurposer — turns one article into a week of social posts.",
      "4. Sales follow-up — drafts personalised emails from CRM notes. 5. Reporting agent — sends a plain-language weekly summary of your numbers.",
      "The trick is narrow scope, clean data and clear escalation rules. Start with one, prove ROI, then expand.",
    ],
  },
  {
    slug: "websites-that-convert",
    title: "The anatomy of a website that actually converts",
    excerpt: "Beautiful is table stakes. Here's the structure we use to turn visitors into booked calls.",
    category: "Web Design",
    date: "Sep 24, 2026",
    readTime: "4 min",
    body: [
      "A converting website answers three questions in five seconds: what is this, is it for me, and what do I do next.",
      "Lead with an outcome-driven headline, show proof early (logos, numbers, testimonials), and keep one primary action visible on every screen.",
      "Speed is design. Every extra second of load time costs conversions — and rankings.",
      "Finally, make booking effortless: an embedded calendar beats a contact form for high-intent visitors.",
    ],
  },
  {
    slug: "social-posts-that-rank",
    title: "Social posts that feed search — not just the feed",
    excerpt: "How to make every post work twice: for your audience today and for search engines tomorrow.",
    category: "Social",
    date: "Sep 10, 2026",
    readTime: "4 min",
    body: [
      "Social platforms are now search engines. People search TikTok, Instagram and LinkedIn for answers, and AI tools index public posts.",
      "Use clear keyword-rich captions, on-screen text, and consistent topics so platforms understand what you're an expert in.",
      "Repurpose your best blog answers into carousels and short videos — and link them back to build authority loops.",
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
