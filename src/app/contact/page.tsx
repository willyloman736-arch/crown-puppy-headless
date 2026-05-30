import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Crown Puppy Boutique for puppy availability, reservation questions, pickup, delivery, and waitlist inquiries."
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Speak with Crown Puppy Boutique">
        Tell us which puppy you are interested in, where you are located, and
        your ideal timeline. We will respond from {site.email}.
      </PageHero>

      <section className="section split">
        <div className="content-block">
          <p className="eyebrow">By appointment only</p>
          <h2>Direct communication keeps every adoption step clear.</h2>
          <p>
            Use this page for puppy availability, reservations, pickup and
            delivery questions, or waitlist requests.
          </p>
          <ul className="check-list">
            <li>Email: {site.email}</li>
            <li>Location: {site.location}</li>
            <li>Appointments and delivery are coordinated directly</li>
            <li>Include your preferred puppy name when possible</li>
          </ul>
        </div>

        <div className="inquiry-panel">
          <div className="inquiry-panel__inner">
            <SectionIntro
              align="left"
              eyebrow="Send a message"
              title="Inquiry form"
            />
            <InquiryForm type="Contact" compact />
          </div>
        </div>
      </section>
    </>
  );
}
