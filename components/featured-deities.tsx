import { DeityCard } from "@/components/deity-card"
import { getFeaturedDeities } from "@/lib/deities"

export function FeaturedDeities() {
  const featured = getFeaturedDeities()

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Featured Deities
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Begin your journey with these revered deities, each carrying timeless stories and sacred
          wisdom.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((deity) => (
          <DeityCard key={deity.slug} deity={deity} />
        ))}
      </div>
    </section>
  )
}
