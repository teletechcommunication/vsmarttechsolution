import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="inline-block h-px w-8 bg-primary" />
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-36 pb-20 md:pt-48 md:pb-28">
      <div
        aria-hidden
        className="hairline-grid pointer-events-none absolute inset-0 opacity-[0.08]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[26rem] w-[26rem] rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="container-x relative">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary" aria-hidden />
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal delay={80} className="lg:col-span-8">
            <h1 className="text-[clamp(2.6rem,7vw,5rem)] leading-[0.94] font-bold tracking-tight">
              {title}
            </h1>
          </Reveal>

          <div className="lg:col-span-4">
            {lead ? (
              <Reveal delay={160}>
                <p className="border-l-2 border-primary/40 pl-5 text-base leading-relaxed text-muted-foreground">
                  {lead}
                </p>
              </Reveal>
            ) : null}
            {children ? (
              <Reveal delay={220} className={lead ? "mt-8" : ""}>
                {children}
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PrimaryLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      className={cn(
        "group inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-sm font-medium text-ink-foreground transition-colors hover:bg-primary",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function GhostLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      className={cn(
        "group inline-flex items-center gap-2.5 border border-input px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function CtaBand({
  title = "Let's Build Something Useful",
  body = "Tell us what you are trying to improve, automate or launch. We will respond with a practical view of how it can be built.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div
        aria-hidden
        className="hairline-grid pointer-events-none absolute inset-0 opacity-[0.07]"
      />
      <div className="container-x relative grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.5vw,3.4rem)] leading-[1] font-semibold">{title}</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/65">{body}</p>
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:justify-self-end">
          <Reveal delay={140}>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 bg-ink-foreground px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Start a Project
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2.5 border border-ink-foreground/25 px-6 py-3.5 text-sm font-medium text-ink-foreground transition-colors hover:border-ink-foreground"
              >
                Explore Services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
