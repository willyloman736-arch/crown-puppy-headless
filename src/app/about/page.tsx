import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { getPuppies } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Crown Puppy Boutique, a Dallas-based boutique puppy adoption experience focused on clear guidance and thoughtful placement."
};

export const revalidate = 300;

export default async function AboutPage() {
  const puppies = await getPuppies();
  const image = puppies.find((puppy) => puppy.images.length)?.images[0];

  return (
    <>
      <PageHero eyebrow="About Crown Puppy Boutique" title="A more personal puppy adoption experience">
        Crown Puppy Boutique is based in {site.location} and built around
        thoughtful communication, premium presentation, and clear support for
        families.
      </PageHero>

      <section className="section split">
        <div className="content-block">
          <p className="eyebrow">Our standard</p>
          <h2>Every family deserves clarity before they fall in love.</h2>
          <p>
            Choosing a puppy is emotional, but the process should still feel
            organized. We focus on real photos, direct availability checks,
            reservation guidance, and calm pickup or delivery coordination.
          </p>
          <ul className="check-list">
            <li>Listings presented with photos, age, sex, price, and status</li>
            <li>Direct inquiry before reservation</li>
            <li>Health records and guarantee details discussed clearly</li>
            <li>Support for families preparing for homecoming</li>
          </ul>
          <Link href="/available-puppies" className="button button--dark">
            Meet the Puppies
          </Link>
        </div>
        <div className="split-media">
          {image ? <img src={image.src} alt={image.alt} /> : null}
        </div>
      </section>

      <section className="split-band">
        <div className="section">
          <SectionIntro
            eyebrow="Boutique values"
            title="Premium should mean calm, honest, and helpful"
          />
          <div className="feature-grid">
            <div className="feature-tile">
              <strong>Personal communication</strong>
              <p>
                Families can ask direct questions before committing to any
                reservation step.
              </p>
            </div>
            <div className="feature-tile">
              <strong>Careful presentation</strong>
              <p>
                The site is designed around real puppy photos, clear next
                actions, and professional details.
              </p>
            </div>
            <div className="feature-tile">
              <strong>Supported transition</strong>
              <p>
                Pickup, delivery, and preparation details are coordinated so
                families feel ready.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
