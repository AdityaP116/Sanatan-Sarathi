import { DailyWisdom } from "@/components/daily-wisdom"
import { FavouriteDeities } from "@/components/favourite-deities"
import { FeaturedDeities } from "@/components/featured-deities"
import { Hero } from "@/components/hero"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FeaturedDeities />
        <DailyWisdom />
        <FavouriteDeities />
      </main>
      <SiteFooter />
    </div>
  )
}
