"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CornerDownLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { searchDeities } from "@/lib/deities"
import { cn } from "@/lib/utils"

interface InstantSearchProps {
  className?: string
  autoFocus?: boolean
  placeholder?: string
}

export function InstantSearch({
  className,
  autoFocus = false,
  placeholder = "Search a deity — try Mahadev, Kanha, or Bajrangbali…",
}: InstantSearchProps) {
  const router = useRouter()
  const [value, setValue] = useState("")
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const results = useMemo(() => {
    const q = value.trim()
    if (!q) return []
    return searchDeities(q).slice(0, 5)
  }, [value])

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const trimmed = value.trim()
    router.push(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search")
  }

  const showDropdown = open && value.trim().length > 0

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <form
        onSubmit={handleSubmit}
        role="search"
        className="flex w-full items-center gap-2 rounded-full border border-border bg-card p-2 shadow-lg shadow-black/5 ring-1 ring-black/5"
      >
        <div className="flex flex-1 items-center gap-2 pl-3">
          <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <label htmlFor="instant-deity-search" className="sr-only">
            Search for a Hindu deity
          </label>
          <Input
            id="instant-deity-search"
            value={value}
            autoFocus={autoFocus}
            onChange={(e) => {
              setValue(e.target.value)
              setOpen(true)
            }}
            onFocus={() => setOpen(true)}
            autoComplete="off"
            placeholder={placeholder}
            aria-expanded={showDropdown}
            className="h-11 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0 dark:bg-transparent"
          />
        </div>
        <Button type="submit" size="lg" className="h-11 rounded-full px-6">
          Search
        </Button>
      </form>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 z-50 mt-3 overflow-hidden rounded-2xl border border-border bg-popover p-2 text-left shadow-xl"
          >
            {results.length > 0 ? (
              <ul className="flex flex-col">
                {results.map((deity) => (
                  <li key={deity.slug}>
                    <button
                      type="button"
                      onClick={() => router.push(`/deity/${deity.slug}`)}
                      className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <span className="relative size-11 shrink-0 overflow-hidden rounded-lg bg-secondary">
                        <Image
                          src={deity.image || "/placeholder.svg"}
                          alt=""
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="truncate font-medium text-foreground">{deity.name}</span>
                        <span className="truncate text-xs text-muted-foreground">
                          {deity.category} · {deity.aliases.slice(0, 3).join(", ")}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
                <li className="mt-1 border-t border-border/70 pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      router.push(`/search?q=${encodeURIComponent(value.trim())}`)
                    }
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    See all results for {`"${value.trim()}"`}
                    <CornerDownLeft className="size-4" aria-hidden="true" />
                  </button>
                </li>
              </ul>
            ) : (
              <p className="px-3 py-4 text-sm text-muted-foreground">
                {`No deity matches "${value.trim()}". Try Shiva, Lakshmi, or Ganpati.`}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
