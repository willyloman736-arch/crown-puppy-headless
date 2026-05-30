import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionIntro } from "@/components/SectionIntro";
import { fallbackPuppies } from "@/lib/fallback-products";
import { formatPrice, getPuppy, statusLabel } from "@/lib/products";

type PuppyPageProps = {
  params: Promise<{ handle: string }>;
};

export const revalidate = 300;

export function generateStaticParams() {
  return fallbackPuppies.map((puppy) => ({ handle: puppy.handle }));
}

export async function generateMetadata({
  params
}: PuppyPageProps): Promise<Metadata> {
  const { handle } = await params;
  const puppy = await getPuppy(handle);

  if (!puppy) {
    return {
      title: "Puppy Details"
    };
  }

  return {
    title: `${puppy.name} - ${puppy.breed}`,
    description: `${puppy.name} is a ${puppy.gender.toLowerCase()} ${puppy.breed} puppy. View photos, price, details, and reservation inquiry options.`
  };
}

export default async function PuppyDetailPage({ params }: PuppyPageProps) {
  const { handle } = await params;
  const puppy = await getPuppy(handle);

  if (!puppy) {
    notFound();
  }

  const primaryImage = puppy.images[0];

  return (
    <>
      <section className="section details-hero">
        <div className="gallery" aria-label={`${puppy.name} photo gallery`}>
          {puppy.images.length ? (
            puppy.images.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} />
            ))
          ) : (
            <div className="image-placeholder">Photo coming soon</div>
          )}
        </div>

        <aside className="details-copy">
          <p className="eyebrow">{statusLabel(puppy)}</p>
          <h1>{puppy.name}</h1>
          <p>{puppy.description}</p>
          <p className="details-price">{formatPrice(puppy.price)}</p>

          <dl className="detail-list">
            <div>
              <dt>Breed</dt>
              <dd>{puppy.breed}</dd>
            </div>
            <div>
              <dt>Age</dt>
              <dd>{puppy.age}</dd>
            </div>
            <div>
              <dt>Sex</dt>
              <dd>{puppy.gender}</dd>
            </div>
          </dl>

          <ul className="check-list">
            {puppy.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="details-actions">
            <a href="#inquiry" className="button button--dark">
              {puppy.available ? "Reserve This Puppy" : "Join Waitlist"}
            </a>
            <Link href="/available-puppies" className="button button--light">
              View All Puppies
            </Link>
          </div>
        </aside>
      </section>

      <section className="split-band">
        <div className="section split">
          <div className="content-block">
            <p className="eyebrow">What happens next</p>
            <h2>Send an inquiry before making any reservation decision.</h2>
            <p>
              We confirm availability, answer questions, and walk you through
              pickup or delivery timing before a reservation is finalized.
            </p>
            <ul className="check-list">
              <li>Availability confirmation</li>
              <li>Reservation agreement guidance</li>
              <li>Health records and guarantee details</li>
              <li>Pickup or delivery coordination</li>
            </ul>
          </div>
          <div className="split-media">
            {primaryImage ? <img src={primaryImage.src} alt={primaryImage.alt} /> : null}
          </div>
        </div>
      </section>

      <section className="section" id="inquiry">
        <SectionIntro
          eyebrow="Direct inquiry"
          title={`Ask about ${puppy.name}`}
        >
          Share your details and our team will confirm availability,
          reservation timing, and pickup or delivery options.
        </SectionIntro>
        <div className="inquiry-panel">
          <div className="inquiry-panel__inner">
            <InquiryForm
              type={puppy.available ? "Puppy Inquiry" : "Waitlist"}
              puppyName={puppy.name}
            />
          </div>
        </div>
      </section>
    </>
  );
}
