"use client";
import NavigationButtons from "@/components/navigation-buttons";
import { getBasePath } from "@/lib/utils";
import Image from "next/image";

export default function Game() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20 stars">
      <section className="flex flex-col gap-8 row-start-2 relative z-10">
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
          <NavigationButtons 
            backPath="/game/rules/" 
            backLabel="Rules"
            forwardPath="/game/rules/create/"
            forwardLabel="Create Character"
            />
        </div>
      </section>
    </div>
  );
} 