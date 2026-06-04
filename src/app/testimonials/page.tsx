import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read Crown Puppy Boutique family testimonials and customer experience notes."
};

const testimonials = [
  {
    title: "Smooth from the first message",
    quote:
      "Everything went smoothly, and our puppy arrived healthy, active, and full of energy. The communication throughout the process was excellent.",
    name: "The Johnson Family",
    detail: "Communication and arrival experience"
  },
  {
    title: "Clear updates and a beautiful puppy",
    quote:
      "Our experience was amazing from start to finish. Updates were consistent, the process was clear, and we received a beautiful, well-cared-for puppy.",
    name: "Michael and Sarah T.",
    detail: "Updates and reservation clarity"
  },
  {
    title: "A homecoming worth remembering",
    quote:
      "We brought our puppy home for our daughter's birthday, and it was the best surprise. She is completely in love with her new best friend.",
    name: "The Mary Family",
    detail: "Family homecoming story"
  },
  {
    title: "Professional and trustworthy",
    quote:
      "Very trustworthy and professional. Our puppy arrived safely, and the support after delivery has been outstanding. We could not be happier.",
    name: "Daniel K.",
    detail: "Delivery and aftercare support"
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Family stories" title="Testimonials">
        Family notes from Crown Puppy Boutique customers, rebuilt in a cleaner
        and more polished presentation.
      </PageHero>

      <section className="section">
        <SectionIntro
          eyebrow="Kind words"
          title="A smoother adoption experience matters"
        >
          Real trust is built through clear communication, careful puppy
          presentation, and thoughtful homecoming support.
        </SectionIntro>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial" key={testimonial.quote}>
              <figcaption>
                <span>{testimonial.detail}</span>
                <h2>{testimonial.title}</h2>
                <p>"{testimonial.quote}"</p>
                <cite>{testimonial.name}</cite>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

