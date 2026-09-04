import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
});

function ServicesIndex() {
  usePageMeta(
    "Services",
    "Custom software development, SaaS development, AI solutions, workflow automation, integrations, IT consulting and ongoing support.",
  );

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Eight core services, one delivery standard."
        lead="Every engagement starts from how your business actually operates and ends with software your team can rely on."
      />

      <section className="container-x py-16 md:py-24">
        <div className="border-t border-border">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group grid grid-cols-12 items-baseline gap-4 border-b border-border py-8 transition-colors hover:bg-surface"
              >
                <span className="col-span-2 font-mono text-xs text-muted-foreground md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="col-span-10 font-display text-xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1.5 md:col-span-4 md:text-2xl">
                  {s.title}
                </h2>
                <p className="col-span-12 text-sm leading-relaxed text-muted-foreground md:col-span-6">
                  {s.short}
                </p>
                <span className="col-span-12 flex justify-end md:col-span-1">
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
