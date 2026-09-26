import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PROCESS } from "@/lib/site";

export const Route = createFileRoute("/how-we-work")({
  component: HowWeWork,
});

function HowWeWork() {
  usePageMeta(
    "How We Work — IT & Telecom Delivery Process",
    "Our 7-stage engineering and deployment process for custom software, SaaS products, VoIP systems, enterprise networks, and fiber infrastructure.",
  );

  return (
    <>
      <PageHero
        eyebrow="Delivery Process"
        title="A structured process for software engineering & telecom deployment."
        lead="Seven stages keep every engagement predictable — from initial audit and architecture planning through installation, testing, launch, and 24/7 managed care."
      />

      <section className="container-x py-16 md:py-24">
        <div className="border-t border-border">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 40}>
              <div className="grid grid-cols-12 gap-4 border-b border-border py-9">
                <span className="col-span-3 font-mono text-sm text-primary md:col-span-1">
                  {p.step}
                </span>
                <h2 className="col-span-9 font-display text-xl font-semibold tracking-tight md:col-span-3">
                  {p.title}
                </h2>
                <p className="col-span-12 text-sm leading-relaxed text-muted-foreground md:col-span-8">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Ready to Start Discovery?"
        body="The first step costs nothing but a conversation. Tell us about your software or telecom needs."
      />
    </>
  );
}

