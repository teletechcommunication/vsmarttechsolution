import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-tech.jpg";
import automationImg from "@/assets/automation.jpg";
import aiImg from "@/assets/ai.jpg";
import workspaceImg from "@/assets/workspace.jpg";
import integrationsImg from "@/assets/integrations.jpg";
import { Reveal, useParallax } from "@/components/site/Reveal";
import RotatingText from "@/components/site/RotatingText";
import { CtaBand, Eyebrow } from "@/components/site/Bits";
import { CAPABILITIES, INDUSTRIES, SERVICES, SHOWCASE } from "@/lib/site";
import { usePageMeta } from "@/hooks/use-page-meta";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const parallax = useParallax(0.06);
  usePageMeta(
    "VSMART TECH SOLUTIONS LLC — IT Development & Enterprise Telecom",
    "Custom software, SaaS, AI solutions, automation, business internet, VoIP phone systems, network connectivity and telecom infrastructure from VSMART TECH SOLUTIONS LLC.",
  );

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-0 md:pt-32">
        <div
          aria-hidden
          className="hairline-grid pointer-events-none absolute inset-0 opacity-[0.09]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-6%] h-[30rem] w-[30rem] rounded-full opacity-50 blur-3xl"
          style={{ background: "var(--gradient-glow)" }}
        />

        {/* Oversized ghost word — decorative type layer */}
        <p
          aria-hidden
          className="pointer-events-none absolute top-16 left-1/2 hidden -translate-x-1/2 -translate-y-6 font-display text-[22vw] leading-none font-extrabold whitespace-nowrap text-foreground/[0.035] select-none md:block"
        >
          VSMART
        </p>

        <div className="container-x relative grid gap-y-12 lg:grid-cols-12">
          {/* Rotated rail label */}
          <div className="hidden lg:col-span-1 lg:flex lg:flex-col lg:items-center lg:gap-6">
            <span className="h-16 w-px bg-border" aria-hidden />
            <span
              className="font-mono text-[11px] whitespace-nowrap text-muted-foreground uppercase"
              style={{ writingMode: "vertical-rl" }}
            >
              Software — Telecom — Automation — AI
            </span>
            <span className="h-full w-px flex-1 bg-border" aria-hidden />
          </div>

          <div className="lg:col-span-6 lg:col-start-2">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 border border-border bg-card px-4 py-1.5">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  Wyoming-Registered · IT & Telecom Partner
                </span>
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-8 text-[clamp(2.4rem,6.4vw,4.6rem)] leading-[0.98] font-extrabold tracking-tight">
                We help businesses
                <br />
                <RotatingText
                  texts={["build.", "connect.", "automate.", "scale."]}
                  mainClassName="mt-1 inline-flex overflow-hidden text-primary"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.02}
                  splitLevelClassName="overflow-hidden pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2200}
                />
              </h1>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                VSMART TECH SOLUTIONS LLC delivers custom software development, AI solutions, high-speed
                business internet, VoIP cloud phone systems, and enterprise telecom infrastructure tailored around how your organization operates.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 bg-ink px-7 py-4 text-sm font-medium text-ink-foreground transition-colors hover:bg-primary"
                >
                  Start a Project
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2.5 border border-input px-7 py-4 text-sm font-medium transition-colors hover:border-foreground"
                >
                  Explore Services
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={220}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -top-3 -right-3 -bottom-3 -left-3 border border-border sm:-top-5 sm:-right-5 sm:-bottom-5 sm:-left-5"
                />
                <div className="relative aspect-4/5 overflow-hidden bg-surface-2">
                  <img
                    src={heroImg}
                    alt="Abstract cinematic visual of server hardware and flowing light representing modern software and telecom infrastructure"
                    width={1200}
                    height={1500}
                    className="size-full object-cover"
                  />
                </div>
                <div className="animate-float absolute -bottom-9 left-1/2 w-[calc(100%-1rem)] -translate-x-1/2 border border-border bg-card p-5 shadow-[var(--shadow-lift)]">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                    Integrated IT & Telecom
                  </p>
                  <div className="mt-3 space-y-2">
                    {[
                      "Dedicated Fiber & VoIP Active",
                      "Cloud Infrastructure Synced",
                      "Automated Workflow Operational",
                      "Zero Trust Security Active",
                    ].map((s, i) => (
                      <div key={s} className="flex items-center gap-2.5 text-xs">
                        <span
                          className="size-1.5 bg-primary"
                          style={{ opacity: 1 - i * 0.18 }}
                          aria-hidden
                        />
                        <span className="text-muted-foreground">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="container-x relative mt-24 grid grid-cols-3 divide-x divide-border border-y border-border">
          {[
            ["14", "Core services"],
            ["7", "Stage delivery process"],
            ["WY", "Registered, US-based"],
          ].map(([stat, label]) => (
            <div key={label} className="px-4 py-6 text-center sm:px-6">
              <p className="font-display text-2xl font-bold text-primary sm:text-3xl">{stat}</p>
              <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* CAPABILITY STRIP */}
        <div className="mt-20 overflow-hidden border-y border-border bg-surface py-5">
          <div className="animate-marquee flex w-max items-center gap-12 whitespace-nowrap">
            {[...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES].map((c, i) => (
              <span key={`${c}-${i}`} className="flex items-center gap-12">
                <span className="font-display text-sm font-medium tracking-tight">{c}</span>
                <span className="size-1 bg-primary" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY BUILT AROUND YOUR BUSINESS */}
      <section className="container-x py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Technology Built Around Your Business</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] font-semibold">
                Unified IT Development & Telecommunications Infrastructure.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Fragmented vendors create friction. We bridge the gap between software development and telecommunication networks — building custom applications while managing your voice, business internet, and connectivity backbone.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
                {[
                  ["Process First", "Requirements derived from your operational workflows."],
                  ["Unified Stack", "Seamless integration between software, VoIP, and internet access."],
                  ["High Reliability", "99.999% SLA-backed connectivity and resilient code."],
                  ["Room to Scale", "Infrastructure engineered to expand as your team grows."],
                ].map(([t, b]) => (
                  <div key={t} className="bg-background p-6">
                    <h3 className="font-display text-base font-semibold">{t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-y border-border bg-surface py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <Reveal>
                <Eyebrow>What We Do</Eyebrow>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] font-semibold">
                  14 core IT & Telecom services, one delivery standard.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-medium"
              >
                All services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 border-t border-border">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 30}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group grid grid-cols-12 items-baseline gap-4 border-b border-border py-7 transition-colors hover:bg-background"
                >
                  <span className="col-span-2 font-mono text-xs text-muted-foreground md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10 md:col-span-4">
                    <span className="mb-1 block font-mono text-[10px] tracking-widest text-primary uppercase">
                      {s.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1.5 md:text-2xl">
                      {s.title}
                    </h3>
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
        </div>
      </section>

      {/* TECHNOLOGY WITH A BUSINESS PURPOSE */}
      <section className="container-x py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div ref={parallax} className="relative aspect-5/4 overflow-hidden bg-surface-2">
              <img
                src={automationImg}
                alt="Minimal render of connected nodes representing an automated business workflow and telecom network"
                loading="lazy"
                width={1408}
                height={1008}
                className="size-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <Eyebrow>Technology With a Business Purpose</Eyebrow>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3.1rem)] leading-[1.02] font-semibold">
                Every system should earn its place.
              </h2>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                We do not add technology for its own sake. Dedicated fiber and VoIP are introduced to eliminate outages and poor voice calls. Automation is implemented where repetitive work wastes time. AI is applied where it removes manual sorting or drafting.
              </p>
            </Reveal>
            <Reveal delay={190}>
              <ul className="mt-9 space-y-4">
                {[
                  "Uninterrupted business internet with automated failover",
                  "HD Cloud VoIP and unified voice/video communications",
                  "Less manual work across daily operations",
                  "Fewer errors from duplicated data entry",
                  "Infrastructure that scales reliably without rework",
                ].map((item) => (
                  <li key={item} className="flex gap-4 border-t border-border pt-4 text-sm">
                    <span className="mt-1.5 size-1.5 shrink-0 bg-primary" aria-hidden />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BUILT FOR MODERN BUSINESSES / INDUSTRIES */}
      <section className="border-y border-border bg-surface py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Built for Modern Businesses</Eyebrow>
              </Reveal>
              <Reveal delay={70}>
                <h2 className="mt-6 text-[clamp(2rem,4vw,3.1rem)] leading-[1.02] font-semibold">
                  Sectors we support.
                </h2>
              </Reveal>
              <Reveal delay={130}>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  Our IT development and enterprise telecom solutions are configured specifically for your industry's connectivity and operational demands.
                </p>
              </Reveal>
              <Reveal delay={190}>
                <div className="mt-10 aspect-4/3 overflow-hidden bg-surface-2">
                  <img
                    src={workspaceImg}
                    alt="Laptop showing an abstract operations dashboard on a light desk"
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="size-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid gap-px bg-border sm:grid-cols-2">
                {INDUSTRIES.map((ind, i) => (
                  <Reveal key={ind.title} delay={i * 50}>
                    <div className="h-full bg-surface p-7 transition-colors hover:bg-background">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-primary uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 font-display text-lg font-semibold">{ind.title}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                        {ind.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE CAN BUILD */}
      <section className="container-x py-24 md:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>What We Build & Deploy</Eyebrow>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] font-semibold">
              Solution examples across IT and Telecommunications.
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              The following examples illustrate our core capabilities across software development, VoIP migration, enterprise fiber networking, and AI automation.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
          {SHOWCASE.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="group relative h-full overflow-hidden bg-background p-8 md:p-10">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-border px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <span
                  className="absolute right-0 bottom-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full"
                  aria-hidden
                />
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          <Reveal>
            <div className="aspect-16/10 overflow-hidden bg-surface-2">
              <img
                src={aiImg}
                alt="Translucent lattice sphere with blue inner glow representing applied AI and network intelligence"
                loading="lazy"
                width={1408}
                height={1008}
                className="size-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="aspect-16/10 overflow-hidden bg-surface-2">
              <img
                src={integrationsImg}
                alt="Precision modules connected by glowing lines representing telecom and API system integrations"
                loading="lazy"
                width={1408}
                height={1008}
                className="size-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

