import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { fathersFavourite, getFathersFavouriteDeity } from "@/lib/deities"

export function FathersFavourite() {
  const deity = getFathersFavouriteDeity()
  if (!deity) return null

  return (
    <section className="border-y border-border/70 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-4 translate-y-4 rounded-3xl bg-primary/10"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
                <Image
                  src={deity.image || "/placeholder.svg"}
                  alt={`Devotional artwork of ${deity.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                My Father&apos;s Favourite Deity
              </p>
              <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {deity.name}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {deity.overview}
              </p>

              <figure className="mt-7 rounded-2xl border border-primary/15 bg-card p-6 shadow-sm">
                <Quote className="size-6 text-primary/40" aria-hidden="true" />
                <blockquote className="mt-3 text-pretty font-heading text-lg leading-relaxed text-foreground/90">
                  {fathersFavourite.note}
                </blockquote>
              </figure>

              <Button
                className="mt-7 rounded-full"
                nativeButton={false}
                render={<Link href={`/deity/${deity.slug}`} />}
              >
                Explore {deity.name}
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
