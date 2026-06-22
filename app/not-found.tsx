import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="font-heading text-6xl font-bold tracking-tight text-primary sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground">
          Page Not Found
        </h2>
        <p className="mt-4 max-w-md text-pretty text-muted-foreground">
          The path you seek is not here. Perhaps return to the exploration of the divine.
        </p>
        <Button render={<Link href="/" />} className="mt-8 rounded-full px-8" size="lg">
          Return Home
        </Button>
      </main>
      <SiteFooter />
    </div>
  )
}
