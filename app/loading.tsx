import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center">
        <Loader2 className="size-8 animate-spin text-primary/60" aria-hidden="true" />
        <span className="sr-only">Loading...</span>
      </main>
      <SiteFooter />
    </div>
  )
}
