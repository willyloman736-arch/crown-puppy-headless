import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Boutique Puppy Adoption`,
    template: `%s | ${site.name}`
  },
  description:
    "A premium puppy adoption experience with available Mini Dachshund listings, reservation guidance, pickup and delivery coordination, and direct support.",
  metadataBase: new URL(`https://${site.domain}`)
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
