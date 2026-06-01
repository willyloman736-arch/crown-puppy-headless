import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="announcement">
        <span>Private boutique puppy placements by appointment</span>
        <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
      </div>
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label="Crown Puppy Boutique home">
          <span className="brand-mark">CPB</span>
          <span>
            <strong>{site.name}</strong>
            <small>{site.location}</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="header-action">
          Inquire
        </Link>

        <details className="mobile-menu">
          <summary>
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            Menu
          </summary>
          <div className="mobile-menu__panel">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            <Link href="/contact" className="mobile-menu__action">
              Send an Inquiry
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
