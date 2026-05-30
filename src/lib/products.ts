import { fallbackPuppies } from "./fallback-products";
import { site } from "./site";

export type PuppyImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Puppy = {
  id: number;
  name: string;
  handle: string;
  breed: string;
  gender: string;
  age: string;
  price: string;
  available: boolean;
  description: string;
  highlights: string[];
  images: PuppyImage[];
};

type ShopifyVariant = {
  available: boolean;
  price: string;
};

type ShopifyImage = {
  src: string;
  width?: number;
  height?: number;
};

type ShopifyProduct = {
  id: number;
  title: string;
  handle: string;
  body_html?: string;
  variants: ShopifyVariant[];
  images: ShopifyImage[];
};

type ShopifyProductsResponse = {
  products: ShopifyProduct[];
};

type StorefrontMoney = {
  amount: string;
  currencyCode: string;
};

type StorefrontImage = {
  url: string;
  altText?: string | null;
  width?: number | null;
  height?: number | null;
};

type StorefrontProduct = {
  id: string;
  title: string;
  handle: string;
  descriptionHtml?: string;
  availableForSale: boolean;
  images: {
    nodes: StorefrontImage[];
  };
  variants: {
    nodes: Array<{
      availableForSale: boolean;
      price: StorefrontMoney;
    }>;
  };
};

type StorefrontProductsResponse = {
  data?: {
    products?: {
      nodes: StorefrontProduct[];
    };
  };
  errors?: Array<{ message: string }>;
};

const fallbackByName = new Map(
  fallbackPuppies.map((puppy) => [puppy.name.toLowerCase(), puppy])
);

export async function getPuppies(): Promise<Puppy[]> {
  const storefrontPuppies = await getStorefrontPuppies();

  if (storefrontPuppies.length > 0) {
    return storefrontPuppies;
  }

  try {
    const response = await fetch(site.shopifyProductsUrl, {
      next: { revalidate: 300 }
    });

    if (!response.ok) {
      return fallbackPuppies;
    }

    const data = (await response.json()) as ShopifyProductsResponse;

    if (!Array.isArray(data.products) || data.products.length === 0) {
      return fallbackPuppies;
    }

    return data.products.map(normalizeShopifyProduct);
  } catch {
    return fallbackPuppies;
  }
}

export async function getPuppy(handle: string): Promise<Puppy | undefined> {
  const puppies = await getPuppies();
  return puppies.find((puppy) => puppy.handle === handle);
}

export async function getAvailablePuppies(): Promise<Puppy[]> {
  const puppies = await getPuppies();
  return puppies.filter((puppy) => puppy.available);
}

export function formatPrice(price: string): string {
  const value = Number(price);

  if (Number.isNaN(value)) {
    return `$${price}`;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

export function statusLabel(puppy: Puppy): string {
  return puppy.available ? "Available" : "Reserved";
}

async function getStorefrontPuppies(): Promise<Puppy[]> {
  const domain = normalizeShopifyDomain(process.env.SHOPIFY_STORE_DOMAIN);
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  const apiVersion = process.env.SHOPIFY_API_VERSION || "2026-04";

  if (!domain || !token) {
    return [];
  }

  try {
    const response = await fetch(
      `https://${domain}/api/${apiVersion}/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": token
        },
        body: JSON.stringify({
          query: storefrontProductsQuery,
          variables: { first: 50 }
        }),
        next: { revalidate: 300 }
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as StorefrontProductsResponse;

    if (data.errors?.length || !data.data?.products?.nodes?.length) {
      return [];
    }

    return data.data.products.nodes.map(normalizeStorefrontProduct);
  } catch {
    return [];
  }
}

const storefrontProductsQuery = /* GraphQL */ `
  query CrownPuppyProducts($first: Int!) {
    products(first: $first, sortKey: CREATED_AT, reverse: true) {
      nodes {
        id
        title
        handle
        descriptionHtml
        availableForSale
        images(first: 10) {
          nodes {
            url
            altText
            width
            height
          }
        }
        variants(first: 1) {
          nodes {
            availableForSale
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

function normalizeStorefrontProduct(product: StorefrontProduct): Puppy {
  const cleanTitle = product.title.replace(/\s+/g, " ").trim();
  const name = cleanTitle.split("-")[0]?.trim() || "Available Puppy";
  const fallback = fallbackByName.get(name.toLowerCase());
  const firstVariant = product.variants.nodes[0];

  return {
    id: numericId(product.id),
    name,
    handle:
      fallback?.handle ||
      slugify(
        `${name}-${extractBreed(cleanTitle)}-${extractGender(cleanTitle)}-${extractAge(cleanTitle)}`
      ),
    breed: extractBreed(cleanTitle),
    gender: extractGender(cleanTitle),
    age: extractAge(cleanTitle),
    price: firstVariant?.price.amount || fallback?.price || "0",
    available:
      firstVariant?.availableForSale ?? product.availableForSale ?? fallback?.available ?? true,
    description:
      stripHtml(product.descriptionHtml || "") ||
      fallback?.description ||
      `${name} is a carefully raised puppy available through Crown Puppy Boutique.`,
    highlights:
      fallback?.highlights ||
      [
        "Availability confirmed before reservation",
        "Health records provided",
        "Pickup or delivery timing coordinated individually"
      ],
    images:
      product.images.nodes?.map((image, index) => ({
        src: image.url,
        width: image.width || undefined,
        height: image.height || undefined,
        alt:
          image.altText ||
          `${name} ${index === 0 ? "puppy" : "gallery image"}`
      })) ||
      fallback?.images ||
      []
  };
}

function normalizeShopifyProduct(product: ShopifyProduct): Puppy {
  const cleanTitle = product.title.replace(/\s+/g, " ").trim();
  const name = cleanTitle.split("-")[0]?.trim() || "Available Puppy";
  const fallback = fallbackByName.get(name.toLowerCase());
  const firstVariant = product.variants[0];

  return {
    id: product.id,
    name,
    handle:
      fallback?.handle ||
      slugify(
        `${name}-${extractBreed(cleanTitle)}-${extractGender(cleanTitle)}-${extractAge(cleanTitle)}`
      ),
    breed: extractBreed(cleanTitle),
    gender: extractGender(cleanTitle),
    age: extractAge(cleanTitle),
    price: firstVariant?.price || fallback?.price || "0",
    available: firstVariant?.available ?? fallback?.available ?? true,
    description:
      stripHtml(product.body_html || "") ||
      fallback?.description ||
      `${name} is a carefully raised puppy available through Crown Puppy Boutique.`,
    highlights:
      fallback?.highlights ||
      [
        "Availability confirmed before reservation",
        "Health records provided",
        "Pickup or delivery timing coordinated individually"
      ],
    images:
      product.images?.map((image, index) => ({
        src: image.src,
        width: image.width,
        height: image.height,
        alt: `${name} ${index === 0 ? "puppy" : "gallery image"}`
      })) ||
      fallback?.images ||
      []
  };
}

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function extractBreed(title: string): string {
  const match = title.match(/-\s*([A-Za-z ]+?)\s*-\s*(Male|Female)/i);
  return match?.[1]?.trim() || "Mini Dachshund";
}

function extractGender(title: string): string {
  const match = title.match(/\b(Male|Female)\b/i);
  return titleCase(match?.[1] || "Female");
}

function extractAge(title: string): string {
  const match = title.match(/(\d+\s*weeks?\s*old)/i);
  return match?.[1]?.replace(/\s+/g, " ") || "Ask for age";
}

function titleCase(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

function normalizeShopifyDomain(value?: string): string {
  if (!value) {
    return "";
  }

  return value
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "")
    .trim();
}

function numericId(value: string): number {
  const match = value.match(/(\d+)$/);
  return match ? Number(match[1]) : Math.abs(hashCode(value));
}

function hashCode(value: string): number {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }

  return hash;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
