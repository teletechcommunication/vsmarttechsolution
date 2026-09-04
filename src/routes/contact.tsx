import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Eyebrow } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { usePageMeta } from "@/hooks/use-page-meta";
import { ADDRESS_LINES } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  company: z.string().trim().optional(),
  budget: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a bit more — at least 20 characters.")
    .max(4000, "Keep the description under 4000 characters."),
});

type EnquiryValues = z.infer<typeof enquirySchema>;

function Contact() {
  usePageMeta(
    "Contact",
    "Send VSMART TECH SOLUTIONS LLC a project enquiry. We respond with a practical view of how it can be built.",
  );

  const form = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", email: "", company: "", budget: "", message: "" },
  });

  function onSubmit(values: EnquiryValues) {
    console.info("Project enquiry submitted", values);
    toast.success("Enquiry sent", {
      description: "Thanks — we'll review this and get back to you shortly.",
    });
    form.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're trying to build."
        lead="Send a short description of the project or problem. We review every enquiry and reply with a practical next step."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" autoComplete="name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="jane@company.com"
                              autoComplete="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (optional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Company name"
                              autoComplete="organization"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated budget (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. $10,000–$25,000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project description</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={7}
                            placeholder="What are you trying to build, automate or fix?"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending…" : "Send Enquiry"}
                    <ArrowUpRight className="size-4" />
                  </Button>
                </form>
              </Form>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={100}>
              <Eyebrow>Business Mailing Address</Eyebrow>
              <address className="mt-5 text-sm leading-relaxed text-muted-foreground not-italic">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Registered in Wyoming, United States. We work with businesses locally and
                internationally, and respond to every enquiry.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
