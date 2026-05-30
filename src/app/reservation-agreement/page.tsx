import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Reservation Agreement",
  description:
    "Review Crown Puppy Boutique reservation guidance, availability confirmation, health records, and homecoming expectations."
};

export default function ReservationAgreementPage() {
  return (
    <>
      <PageHero eyebrow="Reservation guidance" title="Puppy Reservation Agreement">
        Reservations are handled directly after availability is confirmed and
        the family has reviewed the puppy's details, timing, and next steps.
      </PageHero>

      <section className="section">
        <SectionIntro
          eyebrow="Before reserving"
          title="A clear agreement protects the puppy and the family"
        >
          This page gives families a polished overview before they contact us.
          Final reservation terms are confirmed directly for the specific puppy.
        </SectionIntro>
        <div className="policy-grid">
          <div className="policy-item">
            <strong>Availability confirmation</strong>
            <p>
              A puppy is not considered reserved until our team confirms
              availability and the reservation step has been completed.
            </p>
          </div>
          <div className="policy-item">
            <strong>Reservation commitment</strong>
            <p>
              Reservation details are reviewed before payment or final
              scheduling so families understand the timeline.
            </p>
          </div>
          <div className="policy-item">
            <strong>Health records</strong>
            <p>
              Eligible placements include vaccination records and health
              guarantee information discussed before homecoming.
            </p>
          </div>
          <div className="policy-item">
            <strong>Pickup and delivery timing</strong>
            <p>
              Homecoming is scheduled around puppy readiness, family location,
              and the option approved during reservation.
            </p>
          </div>
          <div className="policy-item">
            <strong>Family responsibility</strong>
            <p>
              Families should be ready for food, safe rest space, veterinary
              follow-up, and a patient transition period.
            </p>
          </div>
          <div className="policy-item">
            <strong>Direct communication</strong>
            <p>
              Questions should be sent before reserving so expectations are
              clear for everyone involved.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="section">
          <div>
            <h2>Found a puppy you love?</h2>
            <p>
              Send an inquiry first. We will confirm status, timing, and the
              next reservation step.
            </p>
          </div>
          <Link href="/available-puppies" className="button button--gold">
            View Puppies
          </Link>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Reservation inquiry"
          title="Ask about the next reservation step"
        />
        <div className="inquiry-panel">
          <div className="inquiry-panel__inner">
            <InquiryForm type="Reservation" />
          </div>
        </div>
      </section>
    </>
  );
}
