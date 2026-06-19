"use client"

import Link from "next/link"
import { Heart, Search } from "lucide-react"

import { DeityCard } from "@/components/deity-card"
import { Button } from "@/components/ui/button"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { useFavourites } from "@/hooks/use-favourites"
import { deities } from "@/lib/deities"

export function FavouriteDeities() {
  const { favourites, hydrated } = useFavourites()
  const saved = deities.filter((d) => favourites.includes(d.slug))

  return (
    <section id="favourites" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Your Favourite Deities
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          The deities you save are kept here on your device, ready whenever you return.
        </p>
      </div>

      {!hydrated ? null : saved.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((deity) => (
            <DeityCard key={deity.slug} deity={deity} />
          ))}
        </div>
      ) : (
        <Empty className="border bg-card/60">
          <EmptyHeader>
            <EmptyMedia variant="icon" className="size-12 rounded-full bg-primary/10 text-primary">
              <Heart className="size-6" aria-hidden="true" />
            </EmptyMedia>
            <EmptyTitle className="text-lg">No favourites yet</EmptyTitle>
            <EmptyDescription>
              Tap the heart on any deity to save them here for easy reflection later.
            </EmptyDescription>
          </EmptyHeader>
          <Button variant="outline" className="rounded-full" render={<Link href="/search" />}>
            <Search data-icon="inline-start" aria-hidden="true" />
            Explore Deities
          </Button>
        </Empty>
      )}
    </section>
  )
}
