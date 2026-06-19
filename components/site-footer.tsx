import { Flower2 } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center sm:px-6">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Flower2 className="size-5" aria-hidden="true" />
        </span>
        <p className="font-heading text-lg font-semibold text-foreground">Sanatan Sarathi</p>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          A respectful companion for exploring Hindu wisdom — the stories, symbols, festivals, and
          sacred mantras of revered deities.
        </p>
        <p className="text-sm text-muted-foreground">
          Made with devotion, as a gift for a beloved father.
        </p>
      </div>
    </footer>
  )
}
