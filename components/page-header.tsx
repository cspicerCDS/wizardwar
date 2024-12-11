"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
}

export default function PageHeader({
  title,
}: PageHeaderProps) {

  return (
    
        <motion.h1
          className="text-3xl font-dirt uppercase text-center text-white"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale:1, opacity: 1 }}
        >
          {title}
        </motion.h1>
      )}


