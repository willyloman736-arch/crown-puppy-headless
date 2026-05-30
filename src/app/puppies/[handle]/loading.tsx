export default function LoadingPuppyDetail() {
  return (
    <section className="section details-hero" aria-label="Loading puppy details">
      <div className="skeleton-card">
        <div className="skeleton-media" />
        <div className="skeleton-grid">
          <div className="skeleton-media" />
          <div className="skeleton-media" />
          <div className="skeleton-media" />
        </div>
      </div>
      <div className="skeleton-card">
        <div className="skeleton-line skeleton-line--short" />
        <div className="skeleton-line skeleton-line--wide" />
        <div className="skeleton-line" />
        <div className="skeleton-line skeleton-line--short" />
      </div>
    </section>
  );
}
