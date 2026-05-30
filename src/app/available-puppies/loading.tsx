export default function LoadingAvailablePuppies() {
  return (
    <section className="section" aria-label="Loading available puppies">
      <div className="skeleton-grid">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="skeleton-card" key={index}>
            <div className="skeleton-media" />
            <div className="skeleton-line skeleton-line--short" />
            <div className="skeleton-line skeleton-line--wide" />
            <div className="skeleton-line" />
          </div>
        ))}
      </div>
    </section>
  );
}
