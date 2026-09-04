import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { usePageMeta } from "@/hooks/use-page-meta";
import { LegalSection } from "@/components/site/LegalSection";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsOfService,
});

function TermsOfService() {
  usePageMeta(
    "Terms of Service",
    "The terms governing use of the VSMART TECH SOLUTIONS LLC website and engagement of our services.",
  );

  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" lead="Last updated: January 1, 2026" />
      <LegalSection>
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing this website or engaging VSMART TECH SOLUTIONS LLC for services, you agree to
          be bound by these terms. If you do not agree, please do not use this website or our
          services.
        </p>

        <h2>Services</h2>
        <p>
          Specific project scope, deliverables, timelines and fees are agreed separately in a
          proposal or statement of work between VSMART TECH SOLUTIONS LLC and the client. These
          terms govern general use of the website and provide the baseline for any such agreement.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          Unless otherwise agreed in writing, ownership of custom deliverables transfers to the
          client upon full payment. VSMART TECH SOLUTIONS LLC retains rights to general methods,
          tools, and pre-existing components used in delivering the work.
        </p>

        <h2>Client Responsibilities</h2>
        <p>
          Clients are responsible for providing timely information, feedback and access required to
          complete a project, and for the accuracy of information supplied to us.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, VSMART TECH SOLUTIONS LLC is not liable for
          indirect, incidental or consequential damages arising from the use of our website or
          services.
        </p>

        <h2>Termination</h2>
        <p>
          Either party may terminate an engagement in accordance with the terms set out in the
          applicable project agreement. Website access may be suspended for violations of these
          terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of the State of Wyoming, United States, without
          regard to conflict of law principles.
        </p>

        <h2>Contact</h2>
        <p>Questions about these terms can be sent through our Contact page.</p>
      </LegalSection>
    </>
  );
}
