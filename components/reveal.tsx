"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import type { ReactNode } from "react"

interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode
  /** Delay in seconds before the animation begins. */
  delay?: number
  /** Vertical offset in pixels the element travels while fading in. */
  y?: number
}

/**
 * Fades and lifts its children into view once when scrolled into the viewport.
 * Respects the user's reduced-motion preference.
 */
export function Reveal({ children, delay = 0, y = 24, ...props }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.22, 1, 0.36, 1],
        y: { duration: shouldReduceMotion ? 0 : 0.6 } 
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
