import Link from "next/link";
import { formatPrice, statusLabel, type Puppy } from "@/lib/products";

type PuppyCardProps = {
  puppy: Puppy;
};

export function PuppyCard({ puppy }: PuppyCardProps) {
  const featuredImage = puppy.images[0];
  const summary =
    puppy.description.split(".")[0]?.trim() ||
    "A carefully raised puppy available through Crown Puppy Boutique";
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
        <span className="puppy-card__price">{formatPrice(puppy.price)}</span>
        <span className="puppy-card__media-label">{puppy.breed}</span>
      </Link>

      <div className="puppy-card__body">
        <div className="puppy-card__heading">
          <div>
            <p>Boutique puppy</p>
            <h3>{puppy.name}</h3>
          </div>
        </div>
        <p className="puppy-card__summary">{summary}.</p>

        <dl className="puppy-facts">
          <div>
            <dt>Age</dt>
            <dd>{puppy.age}</dd>
          </div>
          <div>
            <dt>Sex</dt>
            <dd>{puppy.gender}</dd>
          </div>
          <div>
            <dt>Care</dt>
            <dd>Records</dd>
          </div>
        </dl>

        <p className="puppy-card__note">Health guarantee and pickup guidance included.</p>

        <div className="puppy-card__actions">
          <Link href={`/puppies/${puppy.handle}#inquiry`} className="button button--light">
            {inquiryLabel}
          </Link>
          <Link href={`/puppies/${puppy.handle}`} className="button button--dark">
            View Profile
          </Link>
        </div>
      </div>
    </article>
  );
}
