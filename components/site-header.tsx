import Link from "next/link"
import { Flower2 } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Flower2 className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
              Sanatan Sarathi
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Guide to Hindu Wisdom
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium sm:gap-2">
          <Link
            href="/"
            className="rounded-full px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/search"
            className="rounded-full px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Explore
          </Link>
          <Link
            href="/#favourites"
            className="rounded-full px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Favourites
          </Link>
        </nav>
      </div>
    </header>
  )
}
