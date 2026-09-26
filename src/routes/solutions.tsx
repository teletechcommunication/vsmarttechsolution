import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand, Eyebrow } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { usePageMeta } from "@/hooks/use-page-meta";
import { OUTCOMES, INDUSTRIES } from "@/lib/site";

export const Route = createFileRoute("/solutions")({
  component: Solutions,
});

function Solutions() {
  usePageMeta(
    "Solutions — IT & Telecom Outcomes",
    "Tailored IT and Telecom solutions: Business Internet deployment, Cloud VoIP migration, enterprise networks, custom software, AI automation, and system connectivity.",
  );

  return (
    <>
      <PageHero
        eyebrow="Targeted Solutions"
        title="Solutions organized around outcomes, not technology."
        lead="These are the operational and communications challenges businesses bring to us most often. Each is solved through custom software, AI automation, high-speed fiber internet, and cloud voice systems."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {OUTCOMES.map((o, i) => (
            <Reveal key={o.title} delay={i * 40}>
              <div className="h-full bg-background p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-primary uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="border border-border px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                    {o.category}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold">{o.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <Eyebrow>Where This Applies</Eyebrow>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] font-semibold">
              Sectors these solutions apply to.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 50}>
                <div className="h-full bg-background p-7">
                  <h3 className="font-display text-lg font-semibold">{ind.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a Software or Telecom Challenge in Mind?"
        body="Describe what's slowing your team down, your voice/network needs, or what you're trying to build. We'll tell you plainly how it can be solved."
      />
    </>
  );
}

