# Crown Puppy Boutique Headless Storefront

This is a standalone Next.js storefront for Crown Puppy Boutique. It keeps
Shopify as the product admin/catalog source while giving the public website a
custom premium frontend that can be deployed to Vercel.

## What is included

- Premium homepage with real Shopify puppy images
- Available puppies listing page
- Individual puppy detail pages with gallery, details, and reservation inquiry
- Our Process, Pickup and Delivery, Reservation Agreement, About, FAQs,
  Testimonials, and Contact pages
- Inquiry API route designed to send every form to
  `info@crownpuppyboutique.com`
- Public Shopify product feed fallback with local data if the feed is down

## Local commands

```bash
npm install
npm run dev
npm run build
npm run start
```

## Required launch environment variables

```bash
WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
SHOPIFY_STORE_DOMAIN=crownpuppyboutique.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
SHOPIFY_API_VERSION=2026-04
NEXT_PUBLIC_SHOPIFY_PUBLIC_PRODUCTS_URL=https://crownpuppyboutique.com/products.json?limit=250
```

Form submissions are sent through Web3Forms to the verified recipient email.
For the longer-term clean catalog setup, replace the public products feed with
Shopify Storefront API credentials.

## Shopify product feed

The site checks for `SHOPIFY_STORE_DOMAIN` and
`SHOPIFY_STOREFRONT_ACCESS_TOKEN` first. When both are present, it pulls product
titles, handles, descriptions, availability, prices, variants, and images from
the Shopify Storefront API. If those variables are missing, it uses the public
Shopify JSON feed as a temporary fallback.

## Suggested Vercel setup

1. Create a new GitHub repository or push this folder as a project.
2. Import the project into Vercel with `crown-puppy-headless` as the root.
3. Add the environment variables above.
4. Deploy a preview URL and review the site.
5. Point `crownpuppyboutique.com` to Vercel when ready.
