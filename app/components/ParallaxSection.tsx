"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type React from "react" // Added import for React

interface ParallaxSectionProps {
  children: React.ReactNode
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

export default ParallaxSection

