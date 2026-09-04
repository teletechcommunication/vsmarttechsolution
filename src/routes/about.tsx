import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand, Eyebrow } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { usePageMeta } from "@/hooks/use-page-meta";
import { VALUES, COMPANY_DESCRIPTION, SERVICE_STATEMENT, ADDRESS_LINES } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  usePageMeta(
    "About",
    "VSMART TECH SOLUTIONS LLC is a Wyoming-registered software and technology company building custom software, SaaS, AI and automation.",
  );

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A technology partner that starts with your business, not a template."
        lead={COMPANY_DESCRIPTION}
      />

      <section className="container-x py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Who We Are</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] font-semibold">
                Practical software, built by people who ask why first.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {SERVICE_STATEMENT} We work as an embedded technical partner rather than an outside
                vendor — learning how a business runs before proposing what to build.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Our team combines software engineering, product thinking and applied AI to deliver
                systems that hold up in daily use, not just in a demo.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <address className="mt-10 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground not-italic">
                <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                  Business Mailing Address
                </p>
                <p className="mt-2">
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </address>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <Eyebrow>What We Stand For</Eyebrow>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] font-semibold">
              Values that shape how we work, not just what we say.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 50}>
                <div className="h-full bg-background p-7">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-primary uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
