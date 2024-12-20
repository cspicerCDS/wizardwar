"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

interface NavigationButtonsProps {
  backPath?: string
  backLabel?: string
  forwardPath?: string
  forwardLabel?: string
  isForwardDisabled?: boolean
  className?: string
}

export default function NavigationButtons({
  backPath,
  backLabel,
  forwardPath,
  forwardLabel,
  isForwardDisabled = false,
  className
}: NavigationButtonsProps) {
  const router = useRouter()

  return (
    <div className={`flex gap-4 mt-8 ${className || ''}`}>
      {backPath && backLabel && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-1 border border-white p-4 rounded-lg"
          onClick={() => router.push(backPath)}
        >
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"></path></svg> {backLabel}
        </motion.button>
      )}

      {forwardPath && forwardLabel && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-1 border border-white p-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => router.push(forwardPath)}
          disabled={isForwardDisabled}
        >
          {forwardLabel} <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" ><path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"></path></svg>
        </motion.button>
      )}
    </div>
  )
} 

/*Usage
//import NavigationButtons from "@/components/navigation-buttons";

// Only back button
<NavigationButtons backPath="/previous" backLabel="Back" />

// Only forward button
<NavigationButtons forwardPath="/next" forwardLabel="Next" />

// Both buttons (original behavior)
<NavigationButtons 
  backPath="/previous" 
  backLabel="Back"
  forwardPath="/next"
  forwardLabel="Next"
  isForwardDisabled={!selectedBackground}
/>
*/