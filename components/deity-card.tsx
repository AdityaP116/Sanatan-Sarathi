"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion"
import { ArrowRight } from "lucide-react"

import { FavouriteButton } from "@/components/favourite-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Deity } from "@/lib/deities"

export function DeityCard({ deity }: { deity: Deity }) {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  // Rotation springs for the subtle 3D tilt effect.
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 })
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 8)
    rotateX.set(py * -8)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={{ transform, transformStyle: "preserve-3d" }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden p-0 shadow-sm transition-shadow duration-300 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <Image
            src={deity.image || "/placeholder.svg"}
            alt={`Devotional artwork of ${deity.name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
          <Badge
            variant="secondary"
            className="absolute left-3 top-3 bg-card/90 text-xs font-medium text-foreground backdrop-blur"
          >
            {deity.category}
          </Badge>
          <div className="absolute right-3 top-3">
            <FavouriteButton slug={deity.slug} />
          </div>
        </div>
        <CardContent className="flex flex-1 flex-col gap-2 px-5 pt-5">
          <h3 className="font-heading text-xl font-semibold text-foreground">{deity.name}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{deity.shortDescription}</p>
        </CardContent>
        <CardFooter className="px-5 pb-5">
          <Button
            variant="ghost"
            className="group/btn px-0 text-primary hover:bg-transparent hover:text-primary"
            nativeButton={false}
            render={<Link href={`/deity/${deity.slug}`} />}
          >
            View Details
            <ArrowRight
              data-icon="inline-end"
              aria-hidden="true"
              className="transition-transform group-hover/btn:translate-x-0.5"
            />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
