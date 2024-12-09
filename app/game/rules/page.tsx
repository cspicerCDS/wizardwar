"use client";
/* import { getBasePath } from "@/lib/utils";
import Image from "next/image"; */
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Rules() {
  const router = useRouter();
  return (
    <main className="flex flex-col gap-8 items-center  sm:p-20">
      <h1 className="text-3xl font-dirt text-white uppercase text-center">Introduction</h1>

      <h2 className="text-2xl font-bold text-white">Diabolical Despots Wage War on All</h2>
        <p className="text-white text-left">Wizard War is a Science Fantasy TTRPG in the vein of the <em>Old-School Dungeons & Dragons</em> with a bit of <em>Thundarr the Barbarian</em> and <em>Dying Earth</em> thrown in.</p>
        <p className="text-white text-left">The Wizards are not neccesarily Magic-Users, some are crazed scientists, some are just powerful warlords preying on the weak... <em>All are <strong>Diabolical</strong></em></p>
        <p className="text-white text-left">The players are a ragtag group of adventurers, who are trying to survive in a gonzo, inhospitable world.</p>
        <div className="flex gap-4 mt-8">       
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-white border border-white p-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => router.push('/game/rules/attributes/')}
           
          >
            Attributes →
          </motion.button>
        </div>
    </main>
  );
} 