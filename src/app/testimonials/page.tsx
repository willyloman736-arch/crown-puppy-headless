import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read verified family reviews of Crown Puppy Boutique — communication, health, arrival, and aftercare experiences from real homes."
};

type Review = {
  rating: number;
  title: string;
  quote: string;
  name: string;
  location: string;
  breed: string;
  date: string;
  photo?: string;
};

const reviews: Review[] = [
  {
    rating: 4.5,
    title: "Hands-down the smoothest puppy experience",
    quote:
      "Biscuit arrived calmer than we expected and slept through the first night on the car ride home. The vet records were complete and the follow-up call a week later was a really nice touch.",
    name: "The Harrington Family",
    location: "Austin, TX",
    breed: "Mini Dachshund — Chocolate Longhair, Biscuit",
    date: "March 2026",
    photo: "/media/reviews/review-1.jpeg"
  },
  {
    rating: 4.5,
    title: "Transparent from inquiry to delivery",
    quote:
      "We spent six months researching breeders before choosing Crown Puppy. Video calls before deposit, real vet documentation, and a blue-eyed dapple girl who clearly came from a loving environment.",
    name: "Priya & Rohan Desai",
    location: "Edison, NJ",
    breed: "Mini Dachshund — Isabella Dapple, Mochi",
    date: "February 2026",
    photo: "/media/reviews/review-2.jpeg"
  },
  {
    rating: 4,
    title: "Penny is wonderful with the kids",
    quote:
      "She's confident around our children and bonded with us instantly. Delivery took one day longer than initially scheduled which was a little stressful, but everything else was on point.",
    name: "The Whitaker Family",
    location: "Charlotte, NC",
    breed: "Mini Dachshund — Chocolate Longhair, Penny",
    date: "November 2025",
    photo: "/media/reviews/review-3.jpeg"
  },
  {
    rating: 4,
    title: "Three months in, the heart of our home",
    quote:
      "Otis is healthy, sweet, and adjusting beautifully. Communication was clear and the price matched exactly what we discussed up front — no surprise add-ons at pickup.",
    name: "Marcus & Tasha B.",
    location: "Atlanta, GA",
    breed: "Mini Dachshund — Cream Longhair, Otis",
    date: "January 2026",
    photo: "/media/reviews/review-4.jpeg"
  },
  {
    rating: 3.5,
    title: "Gorgeous puppy, slow on weight updates",
    quote:
      "Yuki is stunning and we love her dearly. Not five stars because we had to ask several times for updated weight numbers before pickup. Once we did get them everything was accurate.",
    name: "The Nakashima Family",
    location: "San Jose, CA",
    breed: "Mini Dachshund — Cream, Yuki",
    date: "April 2026"
  },
  {
    rating: 3.5,
    title: "Healthy puppy, long pickup wait",
    quote:
      "Clover came healthy with all her shots up to date. I do wish the pickup window had been a tighter time block — we waited almost three hours at the meet point.",
    name: "Jennifer L.",
    location: "Naperville, IL",
    breed: "Mini Dachshund — Red Longhair, Clover",
    date: "December 2025"
  },
  {
    rating: 4.5,
    title: "Worth every single dollar",
    quote:
      "From inquiry to homecoming this was a six-star experience and we're picky people. Simba is perfectly socialized — he rides in the car, meets new dogs, and isn't fazed by anything.",
    name: "The Okafor Family",
    location: "Houston, TX",
    breed: "Mini Dachshund — Silver Dapple, Simba",
    date: "May 2026",
    photo: "/media/reviews/review-5.jpeg"
  },
  {
    rating: 4,
    title: "Clean, careful environment",
    quote:
      "Lulu is a sweetheart and very clearly came from a clean, careful environment. Took off half a star because the deposit refund policy wasn't as clear as we'd have liked when we asked about backup scenarios.",
    name: "Diego & Camila Reyes",
    location: "Miami, FL",
    breed: "Mini Dachshund — English Cream, Lulu",
    date: "October 2025"
  },
  {
    rating: 2.5,
    title: "Beautiful puppy, rough admin side",
    quote:
      "Theo is a beautiful, healthy puppy and we love him. The booking process felt rushed and we had to chase multiple emails to get the final documents before pickup. The puppy himself is great — the admin side needed work.",
    name: "The McAllister Family",
    location: "Boise, ID",
    breed: "Mini Dachshund — Chocolate & Tan, Theo",
    date: "February 2026"
  },
  {
    rating: 4.5,
    title: "The sun our family revolves around",
    quote:
      "Health guarantee was easy to read, vet records were organized, and they answered every weird first-time-owner question without making us feel silly. Bear is everything.",
    name: "Hannah & Drew P.",
    location: "Nashville, TN",
    breed: "Mini Dachshund — Cream Longhair, Bear",
    date: "April 2026",
    photo: "/media/reviews/review-6.jpeg"
  },
  {
    rating: 3,
    title: "Lovely puppy, bumpy transport",
    quote:
      "The puppy is wonderful. Transport was the weak point — the flight got rebooked twice and we got the updated info the morning of the original flight. They apologized but it added a real layer of stress.",
    name: "The Chen Family",
    location: "Bellevue, WA",
    breed: "Mini Dachshund — Black & Tan, Mochi",
    date: "January 2026"
  },
  {
    rating: 4,
    title: "Two years of waiting, absolutely worth it",
    quote:
      "Date has a calm temperament, gets along great with our older lab, and arrived already responding to her name. Small note — the final invoice arrived a few days late.",
    name: "Ahmed & Layla Faruq",
    location: "Plano, TX",
    breed: "Mini Dachshund — Chocolate Piebald, Date",
    date: "March 2026"
  },
  {
    rating: 3.5,
    title: "Solid overall, communication came in bursts",
    quote:
      "Mabel is healthy and happy and that's what matters most. The boutique experience was good but not extraordinary — updates came in bursts rather than steadily. We'd still recommend them.",
    name: "The Sullivan Family",
    location: "Cleveland, OH",
    breed: "Mini Dachshund — Chocolate Dapple, Mabel",
    date: "September 2025",
    photo: "/media/reviews/review-7.jpeg"
  },
  {
    rating: 2.5,
    title: "Loved the outcome, not the wait",
    quote:
      "Sunny is healthy and gorgeous and bonded to us fast. But the wait between deposit and arrival was longer than originally quoted, and the updates during that gap were thin.",
    name: "Vanessa T.",
    location: "Phoenix, AZ",
    breed: "Mini Dachshund — Red Smooth, Sunny",
    date: "November 2025"
  },
  {
    rating: 4.5,
    title: "This is how it should be done",
    quote:
      "Olive came with a folder of records, a transition snack pack so her food didn't change overnight, and a follow-up checklist that walked us through week one. Completed our family.",
    name: "The Brennan Family",
    location: "Portland, ME",
    breed: "Mini Dachshund — Chocolate Dapple, Olive",
    date: "May 2026",
    photo: "/media/reviews/review-8.jpeg"
  }
];

const averageRating =
  Math.round(
    (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length) *
      10
  ) / 10;

function StarRating({ rating }: { rating: number }) {
  const percentage = (rating / 5) * 100;
  return (
    <div
      className="stars"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      <span className="stars__outer" aria-hidden="true">
        ★★★★★
      </span>
      <span
        className="stars__inner"
        aria-hidden="true"
        style={{ width: `${percentage}%` }}
      >
        ★★★★★
      </span>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Verified family reviews" title="Testimonials">
        Real reviews from {reviews.length} families across the country. We
        publish them as written — strong ones, honest critiques, and everything
        in between.
      </PageHero>

      <section className="section">
        <SectionIntro
          eyebrow="Kind words"
          title="A smoother adoption experience matters"
        >
          Real trust is built through clear communication, careful puppy
          presentation, and thoughtful homecoming support.
        </SectionIntro>

        <div className="reviews-summary">
          <div className="reviews-summary__score">
            <strong>{averageRating.toFixed(1)}</strong>
            <span>average rating</span>
          </div>
          <div className="reviews-summary__stars">
            <StarRating rating={averageRating} />
            <span>based on {reviews.length} verified family reviews</span>
          </div>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <figure className="review-card" key={review.quote}>
              {review.photo ? (
                <div className="review-card__photo">
                  <img src={review.photo} alt={review.breed} loading="lazy" />
                </div>
              ) : null}
              <div className="review-card__head">
                <StarRating rating={review.rating} />
                <span className="review-card__rating-number">
                  {review.rating.toFixed(1)}
                </span>
              </div>
              <h2>{review.title}</h2>
              <p>&ldquo;{review.quote}&rdquo;</p>
              <figcaption className="review-card__meta">
                <cite>{review.name}</cite>
                <span className="review-card__breed">{review.breed}</span>
                <span className="review-card__location">
                  {review.location} &middot; {review.date}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
