import { Quote } from "lucide-react"

import { dailyWisdomQuotes } from "@/lib/deities"

export function DailyWisdom() {
  // Pick a quote that changes by day of the year for a gentle "daily" feel.
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86_400_000,
  )
  const quote = dailyWisdomQuotes[dayOfYear % dailyWisdomQuotes.length]

  return (
    <section className="border-y border-border/70 bg-secondary/60">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Quote className="size-6" aria-hidden="true" />
        </span>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Daily Wisdom
        </p>
        <blockquote className="mt-5 text-balance font-heading text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          {`"${quote.text}"`}
        </blockquote>
        <footer className="mt-5 text-sm font-medium text-muted-foreground">
          — {quote.source}
        </footer>
      </div>
    </section>
  )
}
