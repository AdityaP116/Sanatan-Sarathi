import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CalendarHeart, Sparkles } from "lucide-react"

import { FavouriteButton } from "@/components/favourite-button"
import { MantraCard } from "@/components/mantra-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Deity } from "@/lib/deities"

export function DeityDetail({ deity }: { deity: Deity }) {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <Button
        variant="ghost"
        className="mb-6 -ml-2 text-muted-foreground"
        render={<Link href="/search" />}
      >
        <ArrowLeft data-icon="inline-start" aria-hidden="true" />
        Back to Explore
      </Button>

      <header className="grid gap-8 md:grid-cols-[minmax(0,1fr)_1.2fr] md:items-center">
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-secondary shadow-sm">
          <Image
            src={deity.image || "/placeholder.svg"}
            alt={`Devotional artwork of ${deity.name}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {deity.name}
          </h1>
          <p className="mt-3 text-pretty text-lg font-medium text-primary">{deity.title}</p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {deity.shortDescription}
          </p>
          <div className="mt-6">
            <FavouriteButton slug={deity.slug} variant="full" />
          </div>
        </div>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col gap-8">
          <section>
            <h2 className="font-heading text-2xl font-semibold text-foreground">Overview</h2>
            <p className="mt-3 leading-relaxed text-foreground/80">{deity.overview}</p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold text-foreground">Story and Origin</h2>
            <p className="mt-3 leading-relaxed text-foreground/80">{deity.story}</p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 font-heading text-2xl font-semibold text-foreground">
              <Sparkles className="size-5 text-primary" aria-hidden="true" />
              Key Attributes & Symbols
            </h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {deity.attributes.map((attribute) => (
                <Badge
                  key={attribute}
                  variant="secondary"
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                >
                  {attribute}
                </Badge>
              ))}
            </div>
          </section>
        </div>

        <aside className="flex flex-col gap-6">
          <MantraCard mantra={deity.mantra} />

          <Card>
            <CardContent className="px-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Vahana (Vehicle)
              </h3>
              <p className="mt-1 text-base font-medium text-primary">{deity.vahana.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {deity.vahana.significance}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="px-6">
              <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <CalendarHeart className="size-5 text-primary" aria-hidden="true" />
                Associated Festivals
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {deity.festivals.map((festival) => (
                  <li
                    key={festival}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {festival}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </article>
  )
}
