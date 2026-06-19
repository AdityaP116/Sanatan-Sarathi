import { DeityCard } from "@/components/deity-card"
import { Reveal } from "@/components/reveal"
import { getFeaturedDeities } from "@/lib/deities"

export function FeaturedDeities() {
  const featured = getFeaturedDeities()

  return (
    <section id="deities" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Divine Darshan</p>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Featured Deities
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Begin your journey with these revered deities, each carrying timeless stories and sacred
          wisdom.
        </p>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((deity, i) => (
          <Reveal key={deity.slug} delay={(i % 3) * 0.08}>
            <DeityCard deity={deity} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
