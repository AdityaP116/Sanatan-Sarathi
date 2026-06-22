import Link from "next/link"
import { Flower2 } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Flower2 className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="whitespace-nowrap font-heading text-base font-semibold tracking-tight text-foreground sm:text-lg">
              Sanatan Sarathi
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Guide to Hindu Wisdom
            </span>
          </span>
        </Link>
        <nav aria-label="Main Navigation">
          <ul className="flex shrink-0 items-center gap-0.5 text-sm font-medium sm:gap-2">
            <li>
              <Link
                href="/"
                className="hidden rounded-full px-2.5 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-block sm:px-3 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className="rounded-full px-2.5 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:px-3 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="/#favourites"
                className="rounded-full px-2.5 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:px-3 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                Favourites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
