import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            {site.name}
          </Link>
          <p>
            A polished, careful puppy adoption experience for families looking
            for a well-raised companion and clear next steps.
          </p>
        </div>

        <div>
          <h2>Explore</h2>
          <div className="footer-links">
            {site.nav.slice(1, 7).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-contact">
          <h2>Contact</h2>
          <p>{site.location}</p>
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link href="/contact" className="footer-button">
            Send an inquiry
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Health guarantee and availability confirmed before reservation.</span>
      </div>
    </footer>
  );
}
