"use client"

import { useCallback, useMemo, useSyncExternalStore } from "react"

const STORAGE_KEY = "sanatan-sarathi-favourites"
const EVENT_NAME = "favourites-updated"

function subscribe(callback: () => void) {
  window.addEventListener(EVENT_NAME, callback)
  window.addEventListener("storage", callback)
  return () => {
    window.removeEventListener(EVENT_NAME, callback)
    window.removeEventListener("storage", callback)
  }
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY)
}

function getServerSnapshot() {
  return null
}

const emptySubscribe = () => () => {}

export function useFavourites() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const hydrated = useSyncExternalStore(emptySubscribe, () => true, () => false)

  const favourites: string[] = useMemo(() => (raw ? JSON.parse(raw) : []), [raw])

  const persist = useCallback((next: string[]) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    window.dispatchEvent(new Event(EVENT_NAME))
  }, [])

  const toggleFavourite = useCallback(
    (slug: string) => {
      const next = favourites.includes(slug)
        ? favourites.filter((s) => s !== slug)
        : [...favourites, slug]
      persist(next)
    },
    [favourites, persist],
  )

  const isFavourite = useCallback(
    (slug: string) => favourites.includes(slug),
    [favourites],
  )

  return { favourites, toggleFavourite, isFavourite, hydrated }
}
