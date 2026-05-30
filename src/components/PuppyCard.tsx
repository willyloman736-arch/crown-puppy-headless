import Link from "next/link";
import { formatPrice, statusLabel, type Puppy } from "@/lib/products";

type PuppyCardProps = {
  puppy: Puppy;
};

export function PuppyCard({ puppy }: PuppyCardProps) {
  const featuredImage = puppy.images[0];
  const inquiryLabel = puppy.available ? "Reserve This Puppy" : "Join Waitlist";

  return (
    <article className="puppy-card">
      <Link
        href={`/puppies/${puppy.handle}`}
        className="puppy-card__media"
        aria-label={`View ${puppy.name}`}
      >
        {featuredImage ? (
          <img src={featuredImage.src} alt={featuredImage.alt} />
        ) : (
          <div className="image-placeholder">Photo coming soon</div>
        )}
        <span className={puppy.available ? "status-badge" : "status-badge status-badge--muted"}>
          {statusLabel(puppy)}
        </span>
      </Link>

      <div className="puppy-card__body">
        <div className="puppy-card__meta">
          <span>{puppy.breed}</span>
          <strong>{formatPrice(puppy.price)}</strong>
        </div>

        <h3>{puppy.name}</h3>

        <dl className="puppy-facts">
          <div>
            <dt>Age</dt>
            <dd>{puppy.age}</dd>
          </div>
          <div>
            <dt>Sex</dt>
            <dd>{puppy.gender}</dd>
          </div>
        </dl>

        <div className="puppy-card__actions">
          <Link href={`/puppies/${puppy.handle}`} className="button button--dark">
            View Profile
          </Link>
          <Link href={`/puppies/${puppy.handle}#inquiry`} className="button button--light">
            {inquiryLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
