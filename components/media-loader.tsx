"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function MediaLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for demo
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="w-full h-full min-h-[200px] bg-muted/50 rounded-lg animate-pulse flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}

