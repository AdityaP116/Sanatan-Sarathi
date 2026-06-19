import { Suspense } from "react"

import { SearchResults } from "@/components/search-results"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: "Explore Deities — Sanatan Sarathi",
  description: "Search and explore revered Hindu deities, their stories, symbols, and mantras.",
}

export default function SearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Suspense fallback={null}>
          <SearchResults />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  )
}
