import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { getPuppies } from "@/lib/products";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Learn how Crown Puppy Boutique handles puppy inquiries, availability confirmation, reservation, and homecoming coordination."
};

export const revalidate = 300;

const steps = [
  {
    title: "Choose a puppy or join the waitlist",
    copy:
      "Browse current listings or send a general inquiry if you want help finding the right temperament, timing, or coat."
  },
  {
    title: "Confirm availability",
    copy:
      "Our team reviews your request, confirms the puppy's status, and answers questions before any reservation step."
  },
  {
    title: "Review reservation details",
    copy:
      "We explain the reservation agreement, timing, health records, and what is included before you move forward."
  },
  {
    title: "Plan pickup or delivery",
    copy:
      "Once approved, pickup or delivery is coordinated around the puppy's age, readiness, and the family's location."
  },
  {
    title: "Prepare for homecoming",
    copy:
      "Families receive clear next steps so the first days at home feel organized, calm, and supported."
  },
  {
    title: "Stay connected",
    copy:
      "Questions after pickup are welcome. A premium experience should continue after the puppy goes home."
  }
];

export default async function OurProcessPage() {
  const puppies = await getPuppies();
  const processImages = puppies.flatMap((puppy) => puppy.images.slice(0, 1));

  return (
    <>
      <PageHero eyebrow="Simple and guided" title="Our Process">
        From first inquiry to homecoming, the process is designed to be clear,
        direct, and reassuring for families.
      </PageHero>

      <section className="section">
        <SectionIntro
          eyebrow="Step by step"
          title="A careful path to the right puppy"
        >
          We keep the experience organized so families understand availability,
          reservation timing, and the support included before moving forward.
        </SectionIntro>
        <div className="process-grid">
          {steps.map((step, index) => {
            const image = processImages[index % processImages.length];

            return (
              <div className="process-step" key={step.title}>
                {image ? (
                  <div className="process-step__media">
                    <img src={image.src} alt={image.alt} />
                  </div>
                ) : null}
                <div className="process-step__content">
                  <span className="process-step__number">{index + 1}</span>
                  <strong>{step.title}</strong>
                  <p>{step.copy}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="cta-band">
        <div className="section">
          <div>
            <h2>Ready to start?</h2>
            <p>
              Send an inquiry with your preferred puppy, timeline, and location
              so we can guide the next step.
            </p>
          </div>
          <Link href="/contact" className="button button--gold">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
