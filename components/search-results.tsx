"use client"

import { useSearchParams } from "next/navigation"
import { useMemo, useState } from "react"
import { Search, SearchX } from "lucide-react"

import { DeityCard } from "@/components/deity-card"
import { Reveal } from "@/components/reveal"
import { Input } from "@/components/ui/input"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { deities, searchDeities } from "@/lib/deities"

export function SearchResults() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") ?? "")

  const results = useMemo(() => (query.trim() ? searchDeities(query) : deities), [query])

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Explore the Deities
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Search by name, alias, symbol, vahana, or festival — results update as you type.
        </p>
        <div className="mt-7">
          <div className="flex w-full items-center gap-2 rounded-full border border-border bg-card p-2 shadow-lg shadow-black/5 ring-1 ring-black/5">
            <div className="flex flex-1 items-center gap-2 pl-3">
              <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <label htmlFor="page-search" className="sr-only">
                Search for a Hindu deity
              </label>
              <Input
                id="page-search"
                value={query}
                autoFocus
                autoComplete="off"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try Mahadev, Kanha, Bajrangbali, or Diwali…"
                className="h-11 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0 dark:bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <p className="mb-6 text-sm font-medium text-muted-foreground">
          {query.trim() ? (
            <>
              {results.length} {results.length === 1 ? "result" : "results"} for{" "}
              <span className="text-foreground">{`"${query.trim()}"`}</span>
            </>
          ) : (
            <>Showing all {results.length} deities</>
          )}
        </p>

        {results.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((deity, i) => (
              <Reveal key={deity.slug} delay={(i % 3) * 0.06} y={16}>
                <DeityCard deity={deity} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Empty className="border bg-card/60">
            <EmptyHeader>
              <EmptyMedia
                variant="icon"
                className="size-12 rounded-full bg-primary/10 text-primary"
              >
                <SearchX className="size-6" aria-hidden="true" />
              </EmptyMedia>
              <EmptyTitle className="text-lg">No deities found</EmptyTitle>
              <EmptyDescription>
                {`We couldn't find a match for "${query.trim()}". Try another name such as Shiva, Durga, or Ganesha.`}
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
      </div>
    </section>
  )
}
