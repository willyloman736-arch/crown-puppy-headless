import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Pickup and Delivery",
  description:
    "Pickup and delivery guidance for Crown Puppy Boutique families, including appointment timing and coordinated homecoming support."
};

export default function PickupDeliveryPage() {
  return (
    <>
      <PageHero eyebrow="Homecoming support" title="Pickup and Delivery">
        Pickup and delivery details are coordinated directly with each approved
        family so the puppy's transition is calm, safe, and well planned.
      </PageHero>

      <section className="section">
        <SectionIntro
          eyebrow="How it works"
          title="Clear coordination before homecoming day"
        >
          The best option depends on your location, the puppy's readiness, and
          the timing confirmed during reservation.
        </SectionIntro>
        <div className="policy-grid">
          <div className="policy-item">
            <strong>Private pickup by appointment</strong>
            <p>
              Local pickup is scheduled in advance after the reservation and
              readiness details are confirmed.
            </p>
          </div>
          <div className="policy-item">
            <strong>Delivery coordination</strong>
            <p>
              Delivery options can be discussed for families outside the local
              area and are confirmed case by case.
            </p>
          </div>
          <div className="policy-item">
            <strong>Preparation guidance</strong>
            <p>
              We help families prepare for food, rest, first-night comfort, and
              a smoother transition at home.
            </p>
          </div>
        </div>
      </section>

      <section className="split-band">
        <div className="section">
          <SectionIntro
            eyebrow="Before travel"
            title="What we confirm before pickup or delivery"
          />
          <div className="feature-grid">
            <div className="feature-tile">
              <strong>Puppy readiness</strong>
              <p>
                Age, health, timing, and transition details are reviewed before
                a homecoming date is finalized.
              </p>
            </div>
            <div className="feature-tile">
              <strong>Family details</strong>
              <p>
                Your location, preferred timing, and contact information help us
                coordinate the smoothest option.
              </p>
            </div>
            <div className="feature-tile">
              <strong>Final instructions</strong>
              <p>
                Families receive practical next steps before pickup or delivery
                so the first day feels organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="section">
          <div>
            <h2>Need delivery guidance before reserving?</h2>
            <p>
              Send your city, state, and preferred puppy so we can discuss what
              may be possible before you make a decision.
            </p>
          </div>
          <Link href="/contact" className="button button--gold">
            Ask About Delivery
          </Link>
        </div>
      </section>
    </>
  );
}
