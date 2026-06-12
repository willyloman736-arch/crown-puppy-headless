export const site = {
  name: "Crown Puppy Boutique",
  email: "info@crownpuppyboutique.com",
  phone: "+12083298342",
  phoneDisplay: "+1 (208) 329-8342",
  location: "Dallas, Texas",
  domain: "crownpuppyboutique.com",
  web3formsAccessKey:
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    "74404394-155f-445b-a923-8f1bd2e64264",
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
