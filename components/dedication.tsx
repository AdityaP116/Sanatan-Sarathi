import { Heart } from "lucide-react"

import { Reveal } from "@/components/reveal"

export function Dedication() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-card p-8 text-center shadow-lg shadow-black/5 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/5 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-gold/10 blur-2xl"
          />
          <span className="relative mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Heart className="size-7" aria-hidden="true" />
          </span>
          <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            A Father&apos;s Day Tribute
          </p>
          <h2 className="relative mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Dedicated With Gratitude
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Created with love and respect for my father, whose values, wisdom, guidance, and
            devotion continue to inspire me every day.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
