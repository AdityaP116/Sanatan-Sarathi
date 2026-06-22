"use client"

import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useFavourites } from "@/hooks/use-favourites"
import { cn } from "@/lib/utils"

interface FavouriteButtonProps {
  slug: string
  variant?: "icon" | "full"
  className?: string
}

export function FavouriteButton({ slug, variant = "icon", className }: FavouriteButtonProps) {
  const { isFavourite, toggleFavourite, hydrated } = useFavourites()
  const active = hydrated && isFavourite(slug)
  const label = active ? "Remove from favourites" : "Add to favourites"

  if (variant === "full") {
    return (
      <Button
        type="button"
        variant={active ? "default" : "outline"}
        onClick={() => toggleFavourite(slug)}
        aria-pressed={active}
        className={cn("rounded-full", className)}
      >
        <Heart
          data-icon="inline-start"
          className={cn(active && "fill-current")}
          aria-hidden="true"
        />
        {active ? "Saved to Favourites" : "Add to Favourites"}
      </Button>
    )
  }

  return (
    <Button
      type="button"
      size="icon"
      variant="secondary"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleFavourite(slug)
      }}
      aria-pressed={active}
      aria-label={label}
      title={label}
      className={cn(
        "size-11 sm:size-10 rounded-full bg-card/90 shadow-sm backdrop-blur transition-colors hover:bg-card",
        className,
      )}
    >
      <Heart
        className={cn("size-4", active ? "fill-primary text-primary" : "text-muted-foreground")}
        aria-hidden="true"
      />
    </Button>
  )
}
