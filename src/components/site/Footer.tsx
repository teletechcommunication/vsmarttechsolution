import { Link } from "@tanstack/react-router";
import { ADDRESS_LINES, COMPANY_DESCRIPTION, SERVICES, SERVICE_STATEMENT } from "@/lib/site";

export function Footer() {
  const telecomServices = SERVICES.filter((s) => s.category === "Telecom Services");
  const itServices = SERVICES.filter((s) => s.category === "IT Services");

  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="font-display text-sm font-bold tracking-tight uppercase">
                VSMART Tech Solutions LLC
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/65">
              {COMPANY_DESCRIPTION}
            </p>
            <p className="mt-6 font-mono text-[11px] tracking-[0.18em] text-ink-foreground/45 uppercase">
              Business Mailing Address
            </p>
            <address className="mt-2 text-sm leading-relaxed text-ink-foreground/70 not-italic">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-ink-foreground/45 uppercase">
              Telecom Services
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {telecomServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-ink-foreground/45 uppercase">
              IT Services
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {itServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-ink-foreground/45 uppercase">
              Company & Legal
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/solutions", label: "Solutions" },
                { to: "/how-we-work", label: "How We Work" },
                { to: "/faqs", label: "FAQs" },
                { to: "/contact", label: "Contact" },
                { to: "/privacy-policy", label: "Privacy Policy" },
                { to: "/terms-of-service", label: "Terms of Service" },
                { to: "/cookie-policy", label: "Cookie Policy" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-foreground/12 pt-7 text-xs text-ink-foreground/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 VSMART TECH SOLUTIONS LLC. All rights reserved.</p>
          <p>{SERVICE_STATEMENT}</p>
        </div>
      </div>
    </footer>
  );
}

