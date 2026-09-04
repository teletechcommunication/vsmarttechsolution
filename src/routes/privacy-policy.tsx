import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { usePageMeta } from "@/hooks/use-page-meta";
import { LegalSection } from "@/components/site/LegalSection";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  usePageMeta(
    "Privacy Policy",
    "How VSMART TECH SOLUTIONS LLC collects, uses and protects information.",
  );

  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" lead="Last updated: January 1, 2026" />
      <LegalSection>
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly, such as your name, email address, company and
          project details submitted through our contact form, as well as basic technical information
          (browser type, device, pages visited) collected automatically when you use this website.
        </p>

        <h2>How We Use Information</h2>
        <p>
          We use the information we collect to respond to enquiries, provide and improve our
          services, communicate about projects, and maintain the security and performance of our
          website.
        </p>

        <h2>Sharing of Information</h2>
        <p>
          We do not sell personal information. We may share information with service providers who
          help us operate our business (such as hosting or email delivery), and only to the extent
          necessary for them to perform those services, or where required by law.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain information for as long as necessary to fulfil the purposes described in this
          policy, respond to your enquiries, and comply with legal obligations.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct or delete the personal
          information we hold about you. To exercise these rights, contact us using the details on
          our Contact page.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect information from
          unauthorised access, loss or misuse. No method of transmission or storage is completely
          secure.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Material changes will be reflected by
          updating the date at the top of this page.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent through our Contact page or by mail to our
          business address listed in the footer.
        </p>
      </LegalSection>
    </>
  );
}
