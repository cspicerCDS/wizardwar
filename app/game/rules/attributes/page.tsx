'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20  bg-black text-white">
    <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-md">
      
      <h1 className="text-3xl font-dirt text-white uppercase text-center">Attributes</h1>
     <div className="text-left text-white">
    
     </div>
     <div className="flex gap-4 mt-8">    
     <motion.button
            whileTap={{ scale: 0.9 }}
            className="border border-white p-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => router.push('/game/rules/')}
           
          >
           ← Introduction 
          </motion.button>   
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="border border-white p-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => router.push('/game/rules/species/')}
           
          >
            Species →
          </motion.button>
        </div>
    </main>
    </div>
  )
}

export default Page
