import type { ReactNode } from "react";

export function LegalSection({ children }: { children: ReactNode }) {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="prose prose-neutral mx-auto max-w-3xl [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_h2:first-child]:mt-0 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
