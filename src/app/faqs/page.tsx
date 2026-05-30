import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Crown Puppy Boutique availability, reservation, health records, pickup, delivery, and contact."
};

const faqs = [
  {
    question: "How do I reserve a puppy?",
    answer:
      "Start by sending an inquiry from the puppy's detail page. We confirm availability, answer questions, and explain the next reservation step directly."
  },
  {
    question: "Are the puppies available immediately?",
    answer:
      "Availability is shown on the listing, but final status is always confirmed by our team before reservation because listings can change quickly."
  },
  {
    question: "What is included with a puppy?",
    answer:
      "Eligible placements include up to date vaccination records and health guarantee information. Specific details are reviewed before homecoming."
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Delivery options can be discussed case by case. Share your city and state so we can review what may be possible for the puppy you are interested in."
  },
  {
    question: "Where are you located?",
    answer: `Crown Puppy Boutique is based in ${site.location} and operates by appointment.`
  },
  {
    question: "Where do my form submissions go?",
    answer: `Website inquiries are routed to ${site.email}.`
  }
];

export default function FaqsPage() {
  return (
    <>
      <PageHero eyebrow="Questions" title="Frequently Asked Questions">
        Clear answers before you reserve, travel, or prepare for a new puppy.
      </PageHero>

      <section className="section">
        <SectionIntro
          eyebrow="Helpful details"
          title="What families usually ask first"
        />
        <div className="faq-list">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.question}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
