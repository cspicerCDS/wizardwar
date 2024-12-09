"use client";

import { motion } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'
import { getBasePath } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Background images with orientation-specific display */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 portrait:block landscape:hidden">
          <Image
            src={`${getBasePath()}/images/ww-cvr-vert.png`}
            alt="Background Vertical"
            className="object-cover"
            fill
            priority
          />
        </div>
        <div className="absolute inset-0 portrait:hidden landscape:block">
          <Image
            src={`${getBasePath()}/images/ww-cvr-hor.png`}
            alt="Background Horizontal"
            className="object-cover"
            fill
            priority
          />
        </div>
      </div>

      <main className="flex flex-col gap-8 row-start-2 items-center justify-start mb-auto">
       {/*  <motion.img 
        src="/images/DiabolicalDespots.svg"
        alt="Diabolical Despots"
        className="object-contain w-2/3"
        initial={{ opacity: 0 }} animate={{ opacity: 1,transition: { duration: 1,delay: 1 } }}
        />
         */}
        <motion.img
          src={`${getBasePath()}/images/ww-logo.svg`}
          alt="Logo"
          className="object-contain w-full"
          width={454}
          height={98}
          initial={{ scale: 0 }} animate={{ scale: 1,transition: { duration: 1 } }}
        />
       {/*  <motion.img 
        src="/images/WageWarOnAll.svg"
        alt="Wage War On All"
        className="object-contain w-2/3"
        initial={{ opacity: 0 }} animate={{ opacity: 1,transition: { duration: 1,delay: 1 } }}
        /> */}
        <div className="flex flex-col gap-4">
          <Link href="/game/rules">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="border border-white p-4 rounded-lg w-48 text-center bg-black/[.5] font-bold text-white">
              Game Rules
            </motion.button>
          </Link>

          <Link href="/create">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="border border-white p-4 rounded-lg w-48 text-center  bg-black/[.5] font-bold text-white">
              Create Character
            </motion.button>
          </Link>
        </div>
      </main>
    </div>
  );
}
