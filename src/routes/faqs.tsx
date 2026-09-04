import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { usePageMeta } from "@/hooks/use-page-meta";
import { FAQS } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faqs")({
  component: Faqs,
});

function Faqs() {
  usePageMeta(
    "FAQs",
    "Answers to common questions about our services, process, pricing and support.",
  );

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Common questions, answered plainly."
        lead="If your question isn't covered here, send it through the contact page and we'll answer it directly."
      />

      <section className="container-x py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Accordion type="single" collapsible className="border-t border-border">
              {FAQS.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-border">
                  <AccordionTrigger className="text-left font-display text-base font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
