import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { usePageMeta } from "@/hooks/use-page-meta";
import { LegalSection } from "@/components/site/LegalSection";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicy,
});

function CookiePolicy() {
  usePageMeta(
    "Cookie Policy",
    "How VSMART TECH SOLUTIONS LLC uses cookies and similar technologies.",
  );

  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie Policy" lead="Last updated: January 1, 2026" />
      <LegalSection>
        <h2>What Cookies Are</h2>
        <p>
          Cookies are small text files stored on your device that help websites function and
          remember information about your visit.
        </p>

        <h2>How We Use Cookies</h2>
        <p>
          This website uses only the cookies and local storage strictly necessary for it to function
          correctly — for example, to remember basic display preferences during your session. We do
          not use cookies for advertising or cross-site tracking.
        </p>

        <h2>Third-Party Cookies</h2>
        <p>
          If we add analytics or other third-party tools in the future, this policy will be updated
          to describe what is used and how it can be controlled.
        </p>

        <h2>Managing Cookies</h2>
        <p>
          Most browsers let you refuse or delete cookies through their settings. Restricting cookies
          may affect how parts of this website behave.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy as our use of cookies changes. Material changes will be
          reflected by updating the date at the top of this page.
        </p>

        <h2>Contact</h2>
        <p>Questions about this policy can be sent through our Contact page.</p>
      </LegalSection>
    </>
  );
}
