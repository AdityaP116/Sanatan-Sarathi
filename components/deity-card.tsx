import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { FavouriteButton } from "@/components/favourite-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Deity } from "@/lib/deities"

export function DeityCard({ deity }: { deity: Deity }) {
  return (
    <Card className="group flex flex-col overflow-hidden p-0 transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={deity.image || "/placeholder.svg"}
          alt={`Devotional artwork of ${deity.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3">
          <FavouriteButton slug={deity.slug} />
        </div>
      </div>
      <CardContent className="flex flex-1 flex-col gap-2 px-5 pt-5">
        <h3 className="font-heading text-xl font-semibold text-foreground">{deity.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{deity.shortDescription}</p>
      </CardContent>
      <CardFooter className="px-5 pb-5">
        <Button
          variant="ghost"
          className="px-0 text-primary hover:bg-transparent hover:text-primary"
          nativeButton={false}
          render={<Link href={`/deity/${deity.slug}`} />}
        >
          View Details
          <ArrowRight data-icon="inline-end" aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  )
}
