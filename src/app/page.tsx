import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { PuppyCard } from "@/components/PuppyCard";
import { SectionIntro } from "@/components/SectionIntro";
import { getPuppies } from "@/lib/products";
import { site } from "@/lib/site";

export const revalidate = 300;

export default async function HomePage() {
  const puppies = await getPuppies();
  const available = puppies.filter((puppy) => puppy.available);
  const heroPuppy =
    available.find((puppy) => puppy.name === "Lola") || available[0] || puppies[0];
  const featured = available.slice(0, 6);

  return (
    <>
      <section className="hero">
        {heroPuppy?.images[0] ? (
          <img className="hero__image" src={heroPuppy.images[0].src} alt={heroPuppy.images[0].alt} />
        ) : null}
        <div className="hero__content">
          <div className="hero__copy">
            <p className="eyebrow">Boutique puppy adoption in {site.location}</p>
            <h1>Crown Puppy Boutique</h1>
            <p>
              A polished, family-first adoption experience for carefully raised
              Mini Dachshund puppies with clear reservation support from inquiry
              to homecoming.
            </p>
            <div className="hero__actions">
              <Link href="/available-puppies" className="button button--gold">
                View Available Puppies
              </Link>
              <Link href="/reservation-agreement" className="button button--light">
                Reservation Details
              </Link>
            </div>
          </div>
          <div className="hero__stats" aria-label="Store highlights">
            <div>
              <strong>{available.length}</strong>
              <span>available puppies</span>
            </div>
            <div>
              <strong>2-year</strong>
              <span>health guarantee</span>
            </div>
            <div>
              <strong>Direct</strong>
              <span>pickup and delivery guidance</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Available now"
          title="Meet the puppies currently ready for reservation"
        >
          Browse the newest listings pulled from the Shopify catalog, then send
          a direct inquiry for availability, pickup timing, and reservation
          details.
        </SectionIntro>
        <div className="puppy-grid">
          {featured.map((puppy) => (
            <PuppyCard key={puppy.id} puppy={puppy} />
          ))}
        </div>
        <div className="section-actions">
          <Link href="/available-puppies" className="button button--dark">
            See All Puppies
          </Link>
        </div>
      </section>

      <section className="split-band">
        <div className="section split">
          <div className="split-media">
            {available[1]?.images[0] ? (
              <img src={available[1].images[0].src} alt={available[1].images[0].alt} />
            ) : null}
          </div>
          <div className="content-block">
            <p className="eyebrow">Premium adoption process</p>
            <h2>Clear guidance, thoughtful placement, and a smoother homecoming.</h2>
            <p>
              Families should not have to guess what happens next. Crown Puppy
              Boutique keeps the process organized with availability checks,
              reservation guidance, health records, and pickup or delivery
              coordination.
            </p>
            <ul className="check-list">
              <li>Current photos and details on every puppy listing</li>
              <li>Reservation review before any final placement</li>
              <li>Vaccination records and health guarantee information</li>
              <li>Direct support through pickup, delivery, and transition</li>
            </ul>
            <Link href="/our-process" className="button button--dark">
              View Our Process
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro eyebrow="Why families choose us" title="A boutique standard from first message to forever home" />
        <div className="feature-grid">
          <div className="feature-tile">
            <strong>Carefully presented listings</strong>
            <p>
              Each puppy page gives families photos, pricing, availability,
              key details, and a simple inquiry path.
            </p>
          </div>
          <div className="feature-tile">
            <strong>Health-first communication</strong>
            <p>
              Vaccination records, health guarantee details, and next steps are
              discussed before reservation.
            </p>
          </div>
          <div className="feature-tile">
            <strong>Appointment-based experience</strong>
            <p>
              Pickup and delivery timing are handled directly so every
              homecoming feels calm and organized.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="section">
          <div>
            <h2>Want help choosing the right puppy?</h2>
            <p>
              Tell us about your home, timeline, and the puppy you are
              interested in. Every form on this site is routed to {site.email}.
            </p>
          </div>
          <Link href="/contact" className="button button--gold">
            Start an Inquiry
          </Link>
        </div>
      </section>

      <section className="section">
        <SectionIntro eyebrow="Concierge inquiry" title="Ask about availability or upcoming puppies" />
        <div className="inquiry-panel">
          <div className="inquiry-panel__inner">
            <InquiryForm type="Waitlist" />
          </div>
        </div>
      </section>
    </>
  );
}
