"use client"

import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "sanatan-sarathi-favourites"
const EVENT_NAME = "favourites-updated"

function readFavourites(): string[] {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

export function useFavourites() {
  const [favourites, setFavourites] = useState<string[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setFavourites(readFavourites())
    setHydrated(true)

    const sync = () => setFavourites(readFavourites())
    window.addEventListener(EVENT_NAME, sync)
    window.addEventListener("storage", sync)
    return () => {
      window.removeEventListener(EVENT_NAME, sync)
      window.removeEventListener("storage", sync)
    }
  }, [])

  const persist = useCallback((next: string[]) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    window.dispatchEvent(new Event(EVENT_NAME))
  }, [])

  const toggleFavourite = useCallback(
    (slug: string) => {
      setFavourites((prev) => {
        const next = prev.includes(slug)
          ? prev.filter((s) => s !== slug)
          : [...prev, slug]
        persist(next)
        return next
      })
    },
    [persist],
  )

  const isFavourite = useCallback(
    (slug: string) => favourites.includes(slug),
    [favourites],
  )

  return { favourites, toggleFavourite, isFavourite, hydrated }
}
