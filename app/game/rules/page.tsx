"use client";
import NavigationButtons from "@/components/navigation-buttons";
import PageHeader from "@/components/page-header";
/* import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { motion } from "framer-motion"; */

export default function Rules() {
  return (
    <main className="flex flex-col gap-8 items-center ">
        <PageHeader title="Introduction" />
      <h2 className="text-2xl font-bold text-white">Diabolical Despots Wage War on All</h2>
        <p className="text-white text-left">Wizard War is a Science Fantasy TTRPG in the vein of the <em>Old-School Dungeons & Dragons</em> with a bit of <em>Thundarr the Barbarian</em>, <em>Jack Kirby</em> and <em>Dying Earth</em> thrown in.</p>
        <p className="text-white text-left">The Wizards are not neccesarily Magic-Users, some are crazed scientists, some are just powerful warlords preying on the weak... <em>All are <strong>Diabolical</strong></em></p>
        <p className="text-white text-left">The players are a ragtag group of adventurers, who are trying to survive in a gonzo, inhospitable world.</p>
        <div className="flex gap-4 mt-8 text-white">       
    
          <NavigationButtons 
            forwardPath="/game/rules/attributes/"
            forwardLabel="Attributes"
            />
        </div>
   {/*      <SignedIn>
          <Link href="/game/rules/create/">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="border border-white p-4 rounded-lg w-48 text-center bg-black/[.5] font-bold text-white">
              Create Character
            </motion.button>
          </Link>
        </SignedIn> */}
       
    </main>
  );
} 