"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ContentCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const controls = useScrollReveal(ref)

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={{
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className={`content-card ${className}`}
    >
      {children}
    </motion.div>
  )
}

