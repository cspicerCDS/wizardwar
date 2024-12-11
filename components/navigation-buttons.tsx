"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

interface NavigationButtonsProps {
  backPath?: string
  backLabel?: string
  forwardPath?: string
  forwardLabel?: string
  isForwardDisabled?: boolean
}

export default function NavigationButtons({
  backPath,
  backLabel,
  forwardPath,
  forwardLabel,
  isForwardDisabled = false
}: NavigationButtonsProps) {
  const router = useRouter()

  return (
    <div className="flex gap-4 mt-8">
      {backPath && backLabel && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="border border-white p-4 rounded-lg"
          onClick={() => router.push(backPath)}
        >
          ← {backLabel}
        </motion.button>
      )}

      {forwardPath && forwardLabel && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="border border-white p-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => router.push(forwardPath)}
          disabled={isForwardDisabled}
        >
          {forwardLabel} →
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