import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PuppyCard } from "@/components/PuppyCard";
import { SectionIntro } from "@/components/SectionIntro";
import { getPuppies } from "@/lib/products";

export const metadata: Metadata = {
  title: "Available Puppies",
  description:
    "Browse available Crown Puppy Boutique puppies with photos, pricing, age, and reservation inquiry options."
};

export const revalidate = 300;

export default async function AvailablePuppiesPage() {
  const puppies = await getPuppies();
  const available = puppies.filter((puppy) => puppy.available);
  const reserved = puppies.filter((puppy) => !puppy.available);

  return (
    <>
      <PageHero eyebrow="Current listings" title="Available Puppies">
        Explore the newest Crown Puppy Boutique listings. Each puppy page
        includes real photos, pricing, key details, and a direct reservation
        inquiry form.
      </PageHero>

      <section className="section">
        <SectionIntro
          eyebrow={`${available.length} available`}
          title="Ready for reservation"
        >
          Availability can move quickly, so every request is confirmed directly
          before a reservation is finalized.
        </SectionIntro>
        <div className="puppy-grid">
          {available.map((puppy) => (
            <PuppyCard key={puppy.id} puppy={puppy} />
          ))}
        </div>
      </section>

      {reserved.length ? (
        <section className="section section--tight">
          <SectionIntro
            eyebrow="Recently reserved"
            title="Ask about similar upcoming puppies"
          >
            If a puppy you love is already reserved, send a waitlist inquiry
            and we can discuss similar upcoming availability.
          </SectionIntro>
          <div className="puppy-grid">
            {reserved.map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
