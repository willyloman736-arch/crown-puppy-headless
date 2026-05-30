import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read Crown Puppy Boutique family testimonials and see a polished puppy gallery."
};

const testimonials = [
  {
    quote:
      "The process felt personal from the first message. We knew what to expect, what was included, and how pickup would work.",
    name: "Crown Puppy Boutique family"
  },
  {
    quote:
      "The photos, updates, and communication made us feel comfortable before reserving. Everything was clear and professional.",
    name: "Happy puppy parent"
  },
  {
    quote:
      "Our questions were answered quickly, and the homecoming guidance helped us feel ready for the first week.",
    name: "New puppy family"
  }
];

const reviewImages = [
  {
    src: "https://crownpuppyboutique.com/cdn/shop/files/IMG-2950.jpg?v=1779219420&width=900",
    alt: "Customer review puppy photo"
  },
  {
    src: "https://crownpuppyboutique.com/cdn/shop/files/IMG-2949.jpg?v=1779219420&width=900",
    alt: "Customer review puppy portrait"
  },
  {
    src: "https://crownpuppyboutique.com/cdn/shop/files/IMG-3206.jpg?v=1779486091&width=900",
    alt: "Customer review puppy sitting"
  },
  {
    src: "https://crownpuppyboutique.com/cdn/shop/files/IMG-3207.jpg?v=1779486091&width=900",
    alt: "Customer review puppy closeup"
  },
  {
    src: "https://crownpuppyboutique.com/cdn/shop/files/IMG-3210.jpg?v=1779486091&width=900",
    alt: "Customer review puppy on blanket"
  },
  {
    src: "https://crownpuppyboutique.com/cdn/shop/files/IMG-3211_5a20cd4b-7a03-4088-b647-ba162bb4ee7e.jpg?v=1779486091&width=900",
    alt: "Customer review puppy resting"
  },
  {
    src: "https://crownpuppyboutique.com/cdn/shop/files/E744DD07-8156-405D-9582-517DD65B05E2.jpg?v=1779978024&width=900",
    alt: "Customer review puppy in studio"
  },
  {
    src: "https://crownpuppyboutique.com/cdn/shop/files/DE1674D8-2DCF-4901-94D6-7E6CCADD4E54.jpg?v=1779978024&width=900",
    alt: "Customer review puppy profile"
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Family stories" title="Testimonials">
        Family notes and puppy photos from the customer review section, rebuilt
        in a cleaner and more polished presentation.
      </PageHero>

      <section className="section">
        <SectionIntro
          eyebrow="Kind words"
          title="A smoother adoption experience matters"
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial" key={testimonial.quote}>
              <p>"{testimonial.quote}"</p>
              <cite>{testimonial.name}</cite>
            </figure>
          ))}
        </div>

        <div className="review-strip" aria-label="Puppy gallery">
          {reviewImages.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      </section>
    </>
  );
}
