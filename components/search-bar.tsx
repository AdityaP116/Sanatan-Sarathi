"use client"

import { useRouter } from "next/navigation"
import { useState, type FormEvent } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface SearchBarProps {
  initialQuery?: string
  autoFocus?: boolean
  className?: string
  placeholder?: string
}

export function SearchBar({
  initialQuery = "",
  autoFocus = false,
  className,
  placeholder = "Search for a deity, e.g. Shiva, Lakshmi…",
}: SearchBarProps) {
  const router = useRouter()
  const [value, setValue] = useState(initialQuery)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const trimmed = value.trim()
    router.push(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search")
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={cn(
        "flex w-full items-center gap-2 rounded-full border border-border bg-card p-2 shadow-sm",
        className,
      )}
    >
      <div className="flex flex-1 items-center gap-2 pl-3">
        <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
        <label htmlFor="deity-search" className="sr-only">
          Search for a Hindu deity
        </label>
        <Input
          id="deity-search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus={autoFocus}
          placeholder={placeholder}
          className="h-11 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0 dark:bg-transparent"
        />
      </div>
      <Button type="submit" size="lg" className="h-11 rounded-full px-6">
        Search
      </Button>
    </form>
  )
}
