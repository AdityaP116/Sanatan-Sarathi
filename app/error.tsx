"use client"

import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertCircle className="size-8" aria-hidden="true" />
        </div>
        <h2 className="mt-6 font-heading text-2xl font-semibold text-foreground">
          Something went wrong
        </h2>
        <p className="mt-3 max-w-md text-pretty text-muted-foreground">
          An unexpected interruption occurred while exploring the path.
        </p>
        <Button onClick={() => reset()} className="mt-8 rounded-full px-8" size="lg">
          Try again
        </Button>
      </main>
      <SiteFooter />
    </div>
  )
}
