import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { DeityDetail } from "@/components/deity-detail"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { deities, getDeityBySlug } from "@/lib/deities"

export function generateStaticParams() {
  return deities.map((deity) => ({ slug: deity.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const deity = getDeityBySlug(slug)
  if (!deity) return { title: "Deity Not Found — Sanatan Sarathi" }
  return {
    title: `${deity.name} — Sanatan Sarathi`,
    description: deity.shortDescription,
  }
}

export default async function DeityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const deity = getDeityBySlug(slug)

  if (!deity) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <DeityDetail deity={deity} />
      </main>
      <SiteFooter />
    </div>
  )
}
