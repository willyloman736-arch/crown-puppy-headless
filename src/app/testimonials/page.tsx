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
    image:
      "https://crownpuppyboutique.com/cdn/shop/files/IMG-2950.jpg?v=1779219420&width=900",
    title: "Smooth from the first message",
    quote:
      "Everything went smoothly, and our puppy arrived healthy, active, and full of energy. The communication throughout the process was excellent.",
    name: "The Johnson Family",
    detail: "Communication and arrival experience"
  },
  {
    image:
      "https://crownpuppyboutique.com/cdn/shop/files/IMG-3206.jpg?v=1779486091&width=900",
    title: "Clear updates and a beautiful puppy",
    quote:
      "Our experience was amazing from start to finish. Updates were consistent, the process was clear, and we received a beautiful, well-cared-for puppy.",
    name: "Michael and Sarah T.",
    detail: "Updates and reservation clarity"
  },
  {
    image:
      "https://crownpuppyboutique.com/cdn/shop/files/IMG-3210.jpg?v=1779486091&width=900",
    title: "A homecoming worth remembering",
    quote:
      "We brought our puppy home for our daughter's birthday, and it was the best surprise. She is completely in love with her new best friend.",
    name: "The Mary Family",
    detail: "Family homecoming story"
  },
  {
    image:
      "https://crownpuppyboutique.com/cdn/shop/files/E744DD07-8156-405D-9582-517DD65B05E2.jpg?v=1779978024&width=900",
    title: "Professional and trustworthy",
    quote:
      "Very trustworthy and professional. Our puppy arrived safely, and the support after delivery has been outstanding. We could not be happier.",
    name: "Daniel K.",
    detail: "Delivery and aftercare support"
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
        Family notes and Crown Puppy Boutique review photos, rebuilt in a
        cleaner and more polished presentation.
      </PageHero>

      <section className="section">
        <SectionIntro
          eyebrow="Kind words"
          title="A smoother adoption experience matters"
        >
          Real trust is built through clear communication, careful puppy
          presentation, and thoughtful homecoming support.
        </SectionIntro>

        <div className="testimonial-feature">
          <div className="testimonial-feature__media">
            <img src={reviewImages[1].src} alt={reviewImages[1].alt} />
          </div>
          <div className="testimonial-feature__copy">
            <p className="eyebrow">Customer care standard</p>
            <h2>Photos, updates, and direct support before homecoming.</h2>
            <p>
              Crown Puppy Boutique keeps families informed before reservation,
              during pickup or delivery planning, and through the first days at
              home.
            </p>
            <div className="testimonial-metrics" aria-label="Customer experience highlights">
              <div>
                <strong>Direct</strong>
                <span>communication</span>
              </div>
              <div>
                <strong>Clear</strong>
                <span>reservation steps</span>
              </div>
              <div>
                <strong>Guided</strong>
                <span>homecoming</span>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial" key={testimonial.quote}>
              <img src={testimonial.image} alt={`${testimonial.name} testimonial`} />
              <figcaption>
                <span>{testimonial.detail}</span>
                <h2>{testimonial.title}</h2>
                <p>"{testimonial.quote}"</p>
                <cite>{testimonial.name}</cite>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="review-strip review-strip--editorial" aria-label="Crown Puppy Boutique review gallery">
          {reviewImages.map((image) => (
            <div className="review-image-card" key={image.src}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
