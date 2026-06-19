"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Mantra } from "@/lib/deities"

export function MantraCard({ mantra }: { mantra: Mantra }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(`${mantra.sanskrit}\n${mantra.transliteration}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable — silently ignore.
    }
  }

  return (
    <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Sacred Mantra</p>
      <p className="mt-4 font-heading text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
        {mantra.sanskrit}
      </p>
      <p className="mt-2 text-base italic text-muted-foreground">{mantra.transliteration}</p>
      <Button
        type="button"
        variant="outline"
        onClick={handleCopy}
        aria-live="polite"
        className="mt-5 rounded-full"
      >
        {copied ? (
          <Check data-icon="inline-start" aria-hidden="true" />
        ) : (
          <Copy data-icon="inline-start" aria-hidden="true" />
        )}
        {copied ? "Copied" : "Copy Mantra"}
      </Button>
    </div>
  )
}
