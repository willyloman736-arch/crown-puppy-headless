export const site = {
  name: "Crown Puppy Boutique",
  email: "info@crownpuppyboutique.com",
  phone: "+12083298342",
  phoneDisplay: "+1 (208) 329-8342",
  location: "Dallas, Texas",
  domain: "crownpuppyboutique.com",
  shopifyProductsUrl:
    process.env.NEXT_PUBLIC_SHOPIFY_PUBLIC_PRODUCTS_URL ||
    "https://crownpuppyboutique.com/products.json?limit=250",
  nav: [
    { label: "Home", href: "/" },
    { label: "Available Puppies", href: "/available-puppies" },
    { label: "Our Process", href: "/our-process" },
    { label: "Pickup and Delivery", href: "/pickup-and-delivery" },
    { label: "Reservation", href: "/reservation-agreement" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" }
  ]
};
