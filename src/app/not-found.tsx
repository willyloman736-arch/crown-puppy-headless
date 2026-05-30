import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="content-block">
        <p className="eyebrow">Page not found</p>
        <h1>We could not find that page.</h1>
        <p>
          The puppy may have moved, or the link may have changed. Browse the
          current listings to continue.
        </p>
        <Link href="/available-puppies" className="button button--dark">
          View Available Puppies
        </Link>
      </div>
    </section>
  );
}
