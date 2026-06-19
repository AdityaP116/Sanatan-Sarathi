import Image from "next/image"
import Link from "next/link"

import { SearchBar } from "@/components/search-bar"

const popularSearches = ["Shiva", "Vishnu", "Krishna", "Hanuman", "Lakshmi"]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Image
          src="/hero-pattern.png"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Sanatan Dharma
        </span>
        <h1 className="mt-6 text-balance font-heading text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Sanatan Sarathi
        </h1>
        <p className="mt-4 text-balance font-heading text-lg font-medium text-foreground/80 sm:text-xl">
          Your Personal Guide to Hindu Wisdom and Divine Knowledge
        </p>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Explore the stories, symbols, festivals, and sacred mantras of revered Hindu deities
          through a simple and respectful spiritual guide.
        </p>

        <div className="mx-auto mt-9 max-w-xl">
          <SearchBar />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Popular:</span>
          {popularSearches.map((term) => (
            <Link
              key={term}
              href={`/search?q=${encodeURIComponent(term)}`}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground/80 shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
            >
              {term}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
