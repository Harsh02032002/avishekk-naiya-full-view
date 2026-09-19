import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Heart,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";

import logoAsset from "@/assets/avishekk-naiya-logo.png.asset.json";
import angavastramImage from "@/assets/catalogue-angavastram.jpg";
import blouseImage from "@/assets/catalogue-blouse.jpg";
import dhotiImage from "@/assets/catalogue-dhoti.jpg";
import jutiImage from "@/assets/catalogue-juti.jpg";
import kurtaImage from "@/assets/catalogue-kurta.jpg";
import sareeImage from "@/assets/catalogue-saree.jpg";
import sherwaniImage from "@/assets/catalogue-sherwani.jpg";
import veilImage from "@/assets/catalogue-veil.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Browse the Catalogue | AVISHEKK NAIYA" },
      {
        name: "description",
        content: "Explore handcrafted Indian occasionwear and textiles by AVISHEKK NAIYA.",
      },
      { property: "og:title", content: "Browse the Catalogue | AVISHEKK NAIYA" },
      {
        property: "og:description",
        content: "Explore handcrafted Indian occasionwear and textiles by AVISHEKK NAIYA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CataloguePage,
});

const collections = [
  { name: "Kurta", count: 124, image: kurtaImage, alt: "Full-length ivory embroidered kurta outfit" },
  { name: "Dhoti", count: 48, image: dhotiImage, alt: "Complete ivory dhoti and angavastram styling" },
  { name: "Saree", count: 320, image: sareeImage, alt: "Full-length crimson Banarasi saree drape" },
  { name: "Blouse", count: 86, image: blouseImage, alt: "Complete embroidered crimson blouse on a mannequin" },
  { name: "Sherwani", count: 72, image: sherwaniImage, alt: "Full-length ivory sherwani outfit" },
  { name: "Veil", count: 54, image: veilImage, alt: "Complete crimson bridal veil with embroidered border" },
  { name: "Juti", count: 66, image: jutiImage, alt: "Complete pair of embroidered ivory juttis" },
  { name: "Angavastram", count: 39, image: angavastramImage, alt: "Full-length ivory silk angavastram with gold border" },
];

function CataloguePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-header text-header-foreground">
        <div className="border-b border-header-border bg-header-top">
          <div className="mx-auto flex h-7 max-w-[1440px] items-center justify-center px-5 text-[10px] font-medium sm:justify-between lg:px-14">
            <p className="flex items-center gap-3">
              <span className="hidden sm:inline">✣&nbsp; Handcrafted Heritage</span>
              <span className="text-gold">|</span>
              <span>Premium Fabrics</span>
              <span className="text-gold">|</span>
              <span className="hidden sm:inline">Worldwide Shipping &nbsp;✣</span>
            </p>
            <button className="hidden items-center gap-1 text-[10px] lg:flex" type="button">
              India (INR) <ChevronDown aria-hidden="true" className="size-3" />
            </button>
          </div>
        </div>

        <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 lg:px-14">
          <Link to="/" aria-label="AVISHEKK NAIYA home" className="flex min-w-0 items-center gap-3">
            <img src={logoAsset.url} alt="" className="size-11 shrink-0 rounded-full object-contain" />
            <span className="truncate text-sm font-semibold tracking-[0.14em] sm:text-base">AVISHEKK NAIYA</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-9 text-sm md:flex">
            <Link to="/" className="transition-colors hover:text-gold">Home</Link>
            <a href="#catalogue" className="flex items-center gap-1.5 transition-colors hover:text-gold">Collections <ChevronDown aria-hidden="true" className="size-3.5" /></a>
            <a href="#catalogue" className="flex items-center gap-1.5 transition-colors hover:text-gold">Men <ChevronDown aria-hidden="true" className="size-3.5" /></a>
            <a href="#catalogue" className="flex items-center gap-1.5 transition-colors hover:text-gold">Women <ChevronDown aria-hidden="true" className="size-3.5" /></a>
            <a href="#about" className="transition-colors hover:text-gold">About Us</a>
          </nav>

          <div className="flex items-center gap-0.5 sm:gap-1">
            <Button variant="ghost" size="icon" aria-label="Search" className="text-header-foreground hover:bg-header-hover hover:text-gold"><Search /></Button>
            <Button variant="ghost" size="icon" aria-label="Account" className="hidden text-header-foreground hover:bg-header-hover hover:text-gold sm:inline-flex"><UserRound /></Button>
            <Button variant="ghost" size="icon" aria-label="Wishlist, 0 items" className="hidden text-header-foreground hover:bg-header-hover hover:text-gold sm:inline-flex"><Heart /></Button>
            <span className="hidden text-xs sm:inline">0</span>
            <Button variant="ghost" size="icon" aria-label="Shopping bag, 0 items" className="text-header-foreground hover:bg-header-hover hover:text-gold"><ShoppingBag /></Button>
            <span className="text-xs">0</span>
          </div>
        </div>
      </header>

      <main id="catalogue" className="mx-auto max-w-[1440px] px-5 pb-16 pt-5 lg:px-14">
        <div className="mb-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <nav aria-label="Breadcrumb" className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link><span>›</span><span>Browse the catalogue</span>
            </nav>
            <h1 className="font-display text-4xl leading-none sm:text-5xl">Browse the catalogue</h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">Explore our handcrafted collections, curated for your special moments.</p>
          </div>
          <label className="flex h-12 w-full items-center gap-3 rounded-md border border-input bg-background px-4 text-muted-foreground lg:w-[330px]">
            <Search aria-hidden="true" className="size-5 shrink-0" />
            <span className="sr-only">Search collections</span>
            <input type="search" placeholder="Search collections..." className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground" />
          </label>
        </div>

        <section aria-label="Catalogue collections" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => (
            <article key={collection.name} className="group overflow-hidden rounded-md border border-border bg-card">
              <div className="aspect-[4/5] overflow-hidden bg-image-surface">
                <img
                  src={collection.image}
                  alt={collection.alt}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.015]"
                />
              </div>
              <div className="px-4 pb-4 pt-3">
                <h2 className="font-display text-xl leading-tight">{collection.name}</h2>
                <p className="mt-0.5 text-xs text-muted-foreground">{collection.count} catalogues</p>
                <Button variant="link" className="mt-2 h-auto gap-2 p-0 text-sm font-normal text-collection-link no-underline hover:no-underline">
                  <span className="flex size-7 items-center justify-center rounded-full border border-gold"><ArrowRight aria-hidden="true" className="size-3.5" /></span>
                  View Collection
                </Button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}