import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Radio, Cpu, Layers } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SERVICES, ServiceCategory } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
});

export function ServicesIndex() {
  const [activeCategory, setActiveCategory] = useState<"All" | ServiceCategory>("All");

  usePageMeta(
    "Services — IT & Telecom Solutions",
    "Complete IT development and Telecom solutions: Custom Software, SaaS, AI, Automation, Business Internet, VoIP Phone Systems, Network Connectivity, Telecom Infrastructure & Communications.",
  );

  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  const telecomCount = SERVICES.filter((s) => s.category === "Telecom Services").length;
  const itCount = SERVICES.filter((s) => s.category === "IT Services").length;

  return (
    <>
      <PageHero
        eyebrow="Integrated Services"
        title="Full-spectrum IT Development & Enterprise Telecom."
        lead="From custom software and AI automation to high-speed dedicated internet, VoIP phone systems, and physical fiber infrastructure — we build and connect modern business technology."
      />

      <section className="container-x py-16 md:py-24">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className={cn(
                "inline-flex items-center gap-2 border px-5 py-2.5 text-xs font-mono tracking-wider uppercase transition-all",
                activeCategory === "All"
                  ? "border-primary bg-primary text-primary-foreground font-semibold"
                  : "border-border bg-card text-muted-foreground hover:border-foreground hover:text-foreground",
              )}
            >
              <Layers className="size-3.5" />
              All Services ({SERVICES.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("Telecom Services")}
              className={cn(
                "inline-flex items-center gap-2 border px-5 py-2.5 text-xs font-mono tracking-wider uppercase transition-all",
                activeCategory === "Telecom Services"
                  ? "border-primary bg-primary text-primary-foreground font-semibold"
                  : "border-border bg-card text-muted-foreground hover:border-foreground hover:text-foreground",
              )}
            >
              <Radio className="size-3.5" />
              Telecom Services ({telecomCount})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("IT Services")}
              className={cn(
                "inline-flex items-center gap-2 border px-5 py-2.5 text-xs font-mono tracking-wider uppercase transition-all",
                activeCategory === "IT Services"
                  ? "border-primary bg-primary text-primary-foreground font-semibold"
                  : "border-border bg-card text-muted-foreground hover:border-foreground hover:text-foreground",
              )}
            >
              <Cpu className="size-3.5" />
              IT Services ({itCount})
            </button>
          </div>

          <span className="font-mono text-xs text-muted-foreground">
            Showing {filteredServices.length} solutions
          </span>
        </div>

        {/* Services List */}
        <div className="mt-4">
          {filteredServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 30}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group grid grid-cols-12 items-baseline gap-4 border-b border-border py-8 transition-colors hover:bg-surface"
              >
                <span className="col-span-2 font-mono text-xs text-muted-foreground md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 md:col-span-4">
                  <span className="mb-1 block font-mono text-[10px] tracking-widest text-primary uppercase">
                    {s.category}
                  </span>
                  <h2 className="font-display text-xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1.5 md:text-2xl">
                    {s.title}
                  </h2>
                </div>
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

