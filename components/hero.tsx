"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useSyncExternalStore } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import { InstantSearch } from "@/components/instant-search"

const popularSearches = ["Shiva", "Vishnu", "Krishna", "Hanuman", "Lakshmi"]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Gentle parallax for the layered background elements.
  const patternY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const ringY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border/70"
    >
      {/* Layered background pattern with parallax */}
      <motion.div style={{ y: patternY }} className="pointer-events-none absolute inset-0 opacity-30">
        <Image
          src="/hero-pattern.png"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-background" />
      </motion.div>

      {/* Soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] size-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      {/* Floating sacred geometry (client-only to avoid hydration mismatch) */}
      {mounted && (
        <motion.div
          style={{ y: ringY }}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <SacredRing className="absolute -left-16 top-24 size-56 text-primary/15 sm:left-10" delay={0} />
          <SacredRing
            className="absolute -right-20 top-40 size-72 text-accent-foreground/10 sm:right-8"
            delay={1.5}
          />
          <SacredLotus className="absolute bottom-10 left-1/4 size-24 text-primary/15" delay={0.8} />
        </motion.div>
      )}

      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <motion.span
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary"
        >
          Sanatana Dharma
        </motion.span>
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 text-balance font-heading text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
        >
          Sanatan Sarathi
        </motion.h1>
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mx-auto mt-5 max-w-2xl text-balance font-heading text-lg font-medium text-foreground/80 sm:text-2xl"
        >
          Your Personal Guide to Hindu Wisdom and Divine Knowledge
        </motion.p>
        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground"
        >
          Explore the stories, symbols, festivals, and sacred mantras of revered Hindu deities
          through a thoughtful and beautifully crafted spiritual companion.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mx-auto mt-10 max-w-xl"
        >
          <InstantSearch />
        </motion.div>

        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-sm text-muted-foreground">Popular:</span>
          {popularSearches.map((term) => (
            <Link
              key={term}
              href={`/search?q=${encodeURIComponent(term)}`}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground/80 shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
            >
              {term}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SacredRing({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      animate={{ rotate: 360 }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear", delay }}
    >
      <circle cx="50" cy="50" r="48" />
      <circle cx="50" cy="50" r="38" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        return (
          <line
            key={i}
            x1={50 + 38 * Math.cos(angle)}
            y1={50 + 38 * Math.sin(angle)}
            x2={50 + 48 * Math.cos(angle)}
            y2={50 + 48 * Math.sin(angle)}
          />
        )
      })}
    </motion.svg>
  )
}

function SacredLotus({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="50"
          rx="10"
          ry="30"
          transform={`rotate(${(i / 8) * 360} 50 50)`}
        />
      ))}
    </motion.svg>
  )
}
