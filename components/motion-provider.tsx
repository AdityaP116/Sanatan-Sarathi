"use client"

import { MotionConfig } from "framer-motion"

export function MotionProvider({ children }: { children: React.ReactNode }) {
  // Explicitly setting reducedMotion="user" tells Framer Motion to respect the user's
  // device settings automatically, which suppresses the dev warning and ensures
  // transform/layout animations are gracefully disabled without hydration mismatches.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
