"use client";
import { getBasePath } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Game() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 stars">
      <main className="flex flex-col gap-8 row-start-2 relative z-10">
      <Image
          src={`${getBasePath()}/images/ww-logo.svg`}
          alt="Logo"
          className="object-contain w-full max-w-xl flex justify-center align-middle self-center" 
          width={454}
          height={98}
          priority
        />

        <h1 className="text-2xl font-bold text-white">Diabolical Despots Wage War on All</h1>
        <p className="text-white text-left">Wizard War is a Science Fantasy TTRPG in the vein of the <em>Old-School Dungeons & Dragons</em> with a bit of <em>Thundarr the Barbarian</em> and <em>Dying Earth</em> thrown in.</p>
        <p className="text-white text-left">The Wizards are not neccesarily Magic-Users, some are crazed scientists, some are just powerful warlords preying on the weak... <em>All are <strong>Diabolical</strong></em></p>
        <p className="text-white text-left">The players are a ragtag group of adventurers, who are trying to survive in a gonzo, inhospitable world.</p>
        <div className="flex gap-4 mt-8 justify-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="border border-white p-4 rounded-lg text-white"
            onClick={() => router.push('/create/')}
          >
            Create Character
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="border border-white p-4 rounded-lg text-white"
            onClick={() => router.push('/game/rules/')}
          >
            Rules
          </motion.button>
        </div>
      </main>
    </div>
  );
} 