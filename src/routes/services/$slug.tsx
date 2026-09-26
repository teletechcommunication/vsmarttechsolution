import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { CtaBand, Eyebrow } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  usePageMeta(service.title, service.short);

  const sameCategoryServices = SERVICES.filter(
    (s) => s.category === service.category && s.slug !== service.slug,
  );
  const otherCategoryServices = SERVICES.filter(
    (s) => s.category !== service.category && s.slug !== service.slug,
  );
  const otherServices = [...sameCategoryServices, ...otherCategoryServices].slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border pt-36 pb-16 md:pt-44 md:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="container-x relative">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                ← All Services
              </Link>
              <span className="text-border">•</span>
              <span className="inline-block border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-primary uppercase">
                {service.category}
              </span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <Eyebrow className="mt-4">Service Detail</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] font-semibold">
              {service.title}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {service.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>What's Included</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] font-semibold">
                Built around your requirements, not a fixed package.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-sm font-medium text-ink-foreground transition-colors hover:bg-primary"
                >
                  Discuss This Service
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="space-y-4">
              {service.points.map((point, i) => (
                <Reveal key={point} delay={i * 50}>
                  <li className="flex gap-4 border-t border-border pt-5">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span className="text-sm leading-relaxed text-foreground/85">{point}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow>Explore More</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 text-2xl font-semibold">Related services</h2>
          </Reveal>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
            {otherServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex h-full flex-col justify-between bg-background p-7 transition-colors hover:bg-surface"
                >
                  <div>
                    <span className="mb-2 block font-mono text-[10px] tracking-widest text-primary uppercase">
                      {s.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {s.short}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

