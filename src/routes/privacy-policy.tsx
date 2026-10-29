import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/anim";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — customeragent." },
      { name: "description", content: "How customeragent. collects, uses and protects your information." },
      { property: "og:title", content: "Privacy Policy — customeragent." },
      { property: "og:description", content: "How customeragent. handles your data." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  { h: "Who we are", p: "customeragent. (customeragent.si) is a digital growth agency offering SEO, AEO, website design, social media content and AI agent development. Contact: hello@customeragent.si." },
  { h: "Information we collect", p: "We only collect what you choose to share: your name, email, company details and project information when you email us or book a meeting. We may also collect anonymous usage data (pages visited, device type) to improve the site." },
  { h: "How we use it", p: "To reply to your enquiry, schedule calls, deliver our services, and improve our website. We never sell your personal data." },
  { h: "Third-party services", p: "We use Calendly for meeting scheduling and may use analytics providers. These services process data under their own privacy policies." },
  { h: "Cookies", p: "We use essential cookies to make the site work and may use analytics cookies to understand traffic. You can disable cookies in your browser settings." },
  { h: "Data retention", p: "We keep enquiry data only as long as needed to respond and maintain our business relationship, or as required by law." },
  { h: "Your rights", p: "Under GDPR you may request access to, correction of, or deletion of your personal data, and object to its processing. Email hello@customeragent.si and we'll respond within 30 days." },
  { h: "Changes", p: "We may update this policy from time to time. The latest version is always on this page." },
];

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-44">
      <Reveal>
        <p className="eyebrow text-muted-foreground">Legal</p>
        <h1 className="headline mt-4 text-5xl md:text-6xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: October 2026</p>
      </Reveal>
      <div className="mt-14 flex flex-col gap-10">
        {SECTIONS.map((s, i) => (
          <Reveal key={s.h} delay={i * 0.04}>
            <h2 className="font-display text-2xl font-bold">{s.h}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.p}</p>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
