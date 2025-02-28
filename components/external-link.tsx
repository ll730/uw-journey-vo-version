"use client"

import type React from "react"

import { LinkIcon } from "lucide-react"
import { motion } from "framer-motion"

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-primary hover:text-primary/80 underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-colors group ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <LinkIcon className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  )
}

