"use client"

import { useSearchParams } from "next/navigation"
import { useMemo } from "react"
import { SearchX } from "lucide-react"

import { DeityCard } from "@/components/deity-card"
import { SearchBar } from "@/components/search-bar"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { deities, searchDeities } from "@/lib/deities"

export function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") ?? ""

  const results = useMemo(() => (query ? searchDeities(query) : deities), [query])

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Explore the Deities
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Search by name, symbol, vahana, or festival to discover divine stories and wisdom.
        </p>
        <div className="mt-7">
          <SearchBar initialQuery={query} autoFocus />
        </div>
      </div>

      <div className="mt-12">
        <p className="mb-6 text-sm font-medium text-muted-foreground">
          {query ? (
            <>
              {results.length} {results.length === 1 ? "result" : "results"} for{" "}
              <span className="text-foreground">{`"${query}"`}</span>
            </>
          ) : (
            <>Showing all {results.length} deities</>
          )}
        </p>

        {results.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((deity) => (
              <DeityCard key={deity.slug} deity={deity} />
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
                {`We couldn't find a match for "${query}". Try another name such as Shiva, Durga, or Ganesha.`}
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
      </div>
    </section>
  )
}
