"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { getBasePath } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 stars z-0">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center z-10">
        <Image
          src={`${getBasePath()}/images/ww-logo.svg`}
          alt="Logo"
          className="object-contain w-full"
          width={454}
          height={98}
          priority
        />
        
        <h1 className="text-4xl font-bold text-white">404</h1>
        <h2 className="text-2xl text-white">Page Not Found</h2>
        <p className="text-lg opacity-80 text-white">This area has been destroyed by the apocalypse...</p>

        <Link href="/">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="border border-white p-4 rounded-lg w-48 text-center bg-black/[.5] font-bold mt-8 text-white"
          >
            Return Home
          </motion.button>
        </Link>
      </main>
    </div>
  );
} 