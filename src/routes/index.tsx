import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight, Check, Sparkles, TrendingUp, Bot } from "lucide-react";
import { Reveal, RevealWords, Counter, Magnetic, Tilt } from "@/components/anim";
import { Marquee } from "@/components/marquee";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "customeragent. — AI-first growth agency" },
      { name: "description", content: "SEO, AEO, website design, social content and custom AI agents — customeragent. is the growth partner that gets you found, chosen and remembered." },
      { property: "og:title", content: "customeragent. — AI-first growth agency" },
      { property: "og:description", content: "SEO, AEO, website design, social content and custom AI agents — one growth engine." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <ServicesMarquee />
      <WhatWeOffer />
      <HowWeWork />
      <ProofSnapshots />
      <ClosingCta />
    </main>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const artOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <section ref={ref} className="aurora grain relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
      {/* slow-drifting green ambient blobs */}
      <div className="aurora-blob -left-24 -top-16 h-[26rem] w-[26rem]" aria-hidden />
      <div
        className="aurora-blob -right-32 top-64 h-[30rem] w-[30rem] [animation-delay:-6s] [animation-duration:24s]"
        aria-hidden
      />

      <div className="relative z-[2] mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-12">
        <div>
          <Reveal y={16}>
            <p className="flex items-center gap-3">
              <span className="pulse-dot" aria-hidden />
              <span className="eyebrow text-muted-foreground">AI-first growth agency · customeragent.si</span>
            </p>
          </Reveal>

          <h1 className="headline mt-6 text-[13vw] leading-[1.0] sm:text-6xl md:text-[4.6rem] lg:text-[5.2rem]">
            <RevealWords text="Be found." />
            <br />
            <RevealWords text="Be chosen." delay={0.25} />
            <br />
            <RevealWords text="Be everywhere." delay={0.5} wordClassName="text-signal-slow" />
          </h1>

          <Reveal delay={0.75} className="mt-8 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              customeragent. is an AI-first growth agency. We get you ranked on Google,
              cited by ChatGPT, wrapped in a brand people remember — and we build the
              agents that turn all that attention into revenue.
            </p>
          </Reveal>

          <Reveal delay={0.9} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic><Link to="/contact" className="btn-signal">
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link></Magnetic>
            <Link to="/services" className="btn-outline">
              See what we do
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Floating answer-card artwork — right column */}
        <motion.div style={{ y: artY, opacity: artOpacity }} className="relative z-[2]">
          <Reveal delay={0.3} y={48}>
            <div className="rounded-3xl border border-border bg-card/80 p-5 shadow-[var(--shadow-lift)] backdrop-blur-xl md:p-7">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-signal" />
                  Where do buyers find you?
                </p>
                <span className="rounded-full bg-signal-tint px-3 py-1 text-xs font-semibold text-signal-deep">
                  live snapshot
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                <MiniStat
                  icon={<TrendingUp className="h-4 w-4" />}
                  label="Google ranking"
                  value={<Counter to={3} prefix="#" />}
                  caption="target keyword"
                />
                <MiniStat
                  icon={<Sparkles className="h-4 w-4" />}
                  label={<Counter to={11} suffix="/42" />}
                  value={null}
                  caption="AI answers citing the brand"
                  big
                />
                <MiniStat
                  icon={<Bot className="h-4 w-4" />}
                  label="Agents on duty"
                  value={<Counter to={24} suffix="/7" />}
                  caption="lead capture & support"
                />
              </div>
              <div className="mt-5 rounded-2xl bg-muted p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  ChatGPT · answer
                </p>
                <p className="mt-2 text-sm leading-relaxed md:text-base">
                  “Based on current results, the strongest options are{" "}
                  <span className="font-semibold text-foreground">your brand</span>
                  <span className="text-signal">.</span> It stands out for both quality and
                  customer response.”
                </p>
              </div>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}

function MiniStat({
  icon,
  label,
  value,
  caption,
  big = false,
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
  value: React.ReactNode;
  caption: string;
  big?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <span className="text-signal">{icon}</span>
        {label}
      </p>
      {value !== null && (
        <p className={`font-display font-bold tracking-tight ${big ? "mt-2 text-3xl" : "mt-2 text-3xl"}`}>
          {value}
        </p>
      )}
      <p className="mt-1 text-xs text-muted-foreground">{caption}</p>
    </div>
  );
}

function ServicesMarquee() {
  return (
    <section className="border-y border-border py-10 md:py-14">
      <Marquee
        slow
        outlined
        className="headline text-4xl md:text-7xl"
        items={SERVICES.map((s) => s.title)}
      />
    </section>
  );
}

function WhatWeOffer() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-32">
      <Reveal>
        <p className="eyebrow text-signal">What we offer</p>
        <h2 className="headline mt-4 max-w-3xl text-4xl md:text-6xl">
          One agency for every way <span className="text-signal">.</span>
          <br />
          customers find you.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal key={service.id} delay={i * 0.06}><Tilt className="h-full">
            <Link
              to="/services"
              className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-signal/50 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-muted-foreground">
                  {service.index}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
              </div>
              <h3 className="headline mt-6 text-2xl">{service.title}</h3>
              <p className="mt-1 text-sm font-semibold text-signal-deep">{service.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description.split(".")[0]}.
              </p>
            </Link></Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  {
    index: "01",
    title: "Discover",
    text: "We map how customers search, ask and decide today — on Google, in AI chats, on social and on your site. Every gap becomes an opportunity.",
  },
  {
    index: "02",
    title: "Strategize",
    text: "One growth plan across all six services: what we rank for, what AI cites us for, what we publish, and what agents we automate first.",
  },
  {
    index: "03",
    title: "Build & launch",
    text: "Pages, posts, agents and content go live — designed, written and wired by our team, with tracking on every click and conversation.",
  },
  {
    index: "04",
    title: "Compound",
    text: "Monthly reporting on rankings, citations, followers and qualified leads — and the next round of improvements shipped every sprint.",
  },
];

function HowWeWork() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-20 text-ink-fg md:py-32">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow text-signal">How we work</p>
          <h2 className="headline mt-4 max-w-3xl text-4xl md:text-6xl">
            A process built for momentum.
          </h2>
        </Reveal>

        <div className="mt-16">
          {STEPS.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.05}>
              <div className="group grid gap-4 border-t border-ink-border py-8 md:grid-cols-[120px_1fr_1.4fr] md:items-baseline md:py-10">
                <span className="font-display text-5xl font-bold tracking-tight text-ink-muted transition-colors duration-300 group-hover:text-signal md:text-6xl">
                  {step.index}
                </span>
                <h3 className="headline text-2xl md:text-3xl">{step.title}</h3>
                <p className="text-base leading-relaxed text-ink-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofSnapshots() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-32">
      <Reveal>
        <p className="eyebrow text-signal">Proof, not promises</p>
        <h2 className="headline mt-4 max-w-3xl text-4xl md:text-6xl">
          What working with us looks like.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Illustrative snapshots of the reporting you get — rankings, AI citations and agent
          conversations, all in one view.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        <Reveal delay={0}>
          <SnapshotCard
            title="AI visibility"
            icon={<Sparkles className="h-4 w-4" />}
            rows={[
              { engine: "ChatGPT", score: "4/42 prompts" },
              { engine: "Perplexity", score: "5/11" },
              { engine: "AI Overviews", score: "10/42" },
            ]}
            footer="Citations tracked monthly, per engine."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <SnapshotCard
            title="Search performance"
            icon={<TrendingUp className="h-4 w-4" />}
            chart
            rows={[]}
            footer="Clicks, impressions and position — trending up."
          />
        </Reveal>
        <Reveal delay={0.16}>
          <SnapshotCard
            title="Agent conversations"
            icon={<Bot className="h-4 w-4" />}
            chat={[
              { from: "visitor", text: "Do you offer same-day service?" },
              { from: "agent", text: "We do — shall I book you in for tomorrow 10:00?" },
              { from: "visitor", text: "Yes please!" },
            ]}
            rows={[]}
            footer="Qualified lead captured while you slept."
          />
        </Reveal>
      </div>
    </section>
  );
}

function SnapshotCard({
  title,
  icon,
  rows = [],
  chat = [],
  chart = false,
  footer,
}: {
  title: string;
  icon: React.ReactNode;
  rows?: { engine: string; score: string }[];
  chat?: { from: string; text: string }[];
  chart?: boolean;
  footer: string;
}) {
  const bars = [34, 48, 42, 60, 72, 68, 88];
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
      <p className="flex items-center gap-2 text-sm font-semibold">
        <span className="text-signal">{icon}</span>
        {title}
      </p>
      <div className="mt-5 flex flex-1 flex-col gap-3">
        {rows.map((row) => (
          <div
            key={row.engine}
            className="flex items-center justify-between rounded-xl bg-muted px-4 py-3 text-sm"
          >
            <span className="font-medium">{row.engine}</span>
            <span className="flex items-center gap-2 font-semibold text-signal-deep">
              <Check className="h-3.5 w-3.5" />
              {row.score}
            </span>
          </div>
        ))}
        {chat.map((bubble, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
              bubble.from === "agent"
                ? "self-end bg-signal text-accent-foreground"
                : "self-start bg-muted"
            }`}
          >
            {bubble.text}
          </div>
        ))}
        {chart && (
          <div className="flex h-36 flex-1 items-end gap-2">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-md bg-signal/80"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
        )}
      </div>
      <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">{footer}</p>
    </div>
  );
}

function ClosingCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl bg-signal-tint px-6 py-16 text-center md:py-24">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal/20 blur-3xl"
            aria-hidden
          />
          <p className="eyebrow text-signal-deep">Ready when you are</p>
          <h2 className="headline mx-auto mt-4 max-w-2xl text-4xl md:text-6xl">
            Your customers are already asking. <span className="text-signal">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us where you want to be found — we'll map the fastest route there.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-ink">
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/work" className="btn-outline">
              See what we ship
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
