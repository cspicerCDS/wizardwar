"use client";

import { getStatModifier, formatModifier } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getBasePath } from "@/lib/utils";
import { useEffect, useState } from "react";
import type { Mutation } from "@/lib/mutations";
import type { MentalAbility } from "@/lib/mental-abilities";

interface Stats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export default function Summary() {
  const router = useRouter();  
  const [species, setSpecies] = useState<string>('');
  const [hybridType, setHybridType] = useState<string>('');
  const [characterClass, setCharacterClass] = useState<string>('');
  const [characterBackground, setCharacterBackground] = useState<string>('');
  const [stats, setStats] = useState<Stats | null>(null);
  const [proficiencies, setProficiencies] = useState<string[]>([]);
  const [equipment, setEquipment] = useState<string[]>([]);
  const [hitPoints, setHitPoints] = useState<number>(0);
  const [mutations, setMutations] = useState<Mutation[]>([]);
  const [mentalAbility, setMentalAbility] = useState<MentalAbility | null>(null);

  useEffect(() => {
    setSpecies(localStorage.getItem('characterSpecies') || '');
    setCharacterClass(localStorage.getItem('characterClass') || '');
    setCharacterBackground(localStorage.getItem('characterBackground') || '');
    setHybridType(localStorage.getItem('characterHybridType') || '');
    
    const storedSpecies = localStorage.getItem('characterSpecies');
    if (storedSpecies === 'mutant') {
      const storedMutations = localStorage.getItem('characterMutations');
      if (storedMutations) {
        setMutations(JSON.parse(storedMutations));
      }
    }

    const storedData = localStorage.getItem('characterData');
    if (storedData) {
      const data = JSON.parse(storedData);
      setStats(data.currentStats);
    }
    
    const storedProficiencies = localStorage.getItem('characterProficiencies');
    const storedEquipment = localStorage.getItem('characterEquipment');
    
    if (storedProficiencies) {
      setProficiencies(JSON.parse(storedProficiencies));
    }
    if (storedEquipment) {
      setEquipment(JSON.parse(storedEquipment));
    }
    
    const storedHP = localStorage.getItem('characterHP');
    if (storedHP) {
      setHitPoints(parseInt(storedHP));
    }

    const storedMentalAbility = localStorage.getItem('characterMentalAbility');
    if (storedMentalAbility) {
      setMentalAbility(JSON.parse(storedMentalAbility));
    }
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20  bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-md">
        <Image
          src={`${getBasePath()}/images/ww-logo.svg`}   
          alt="Logo"
          className="object-contain w-full"
          width={454}
          height={98}
          priority
        />
        
        <h1 className="text-3xl font-dirt text-white uppercase text-center">Character Summary</h1>

        <div className="w-full flex-1 min-h-0 overflow-y-auto">
          <p><span className="font-bold text-lg">Species:</span> {species} {hybridType ? `(${hybridType})` : ''}</p>
          <p><span className="font-bold text-lg">Class:</span> {characterClass}</p>
          <p><span className="font-bold text-lg">Background:</span> {characterBackground}</p>
          
          <div className="grid grid-cols-2 gap-4 content-center items-center">
            {stats && (
              <div className="p-4 my-4 border border-white rounded-lg inline-block">
                <p><span className="font-bold text-xl">STR:</span> {stats.strength} ({formatModifier(getStatModifier(stats.strength))})</p>
                <p><span className="font-bold text-xl">DEX:</span> {stats.dexterity} ({formatModifier(getStatModifier(stats.dexterity))})</p>
                <p><span className="font-bold text-xl">CON:</span> {stats.constitution} ({formatModifier(getStatModifier(stats.constitution))})</p>
                <p><span className="font-bold text-xl">INT:</span> {stats.intelligence} ({formatModifier(getStatModifier(stats.intelligence))})</p>
                <p><span className="font-bold text-xl">WIS:</span> {stats.wisdom} ({formatModifier(getStatModifier(stats.wisdom))})</p>
                <p><span className="font-bold text-xl">CHA:</span> {stats.charisma} ({formatModifier(getStatModifier(stats.charisma))})</p>
              </div>
            )}
            <div>
              <div className="">
                <p className="font-bold text-xl">Hit Points: <span className="text-lg">{hitPoints}</span></p>
              </div>

              {proficiencies.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-bold">Proficiencies:</h3>
                  <p>{proficiencies.join(', ')}</p>
                </div>
              )}
              
              {equipment.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-bold">Equipment:</h3>
                  <p>{equipment.join(', ')}</p>
                </div>
              )}
            </div>
          </div>

          {species === 'mutant' && mutations.length > 0 && (
            <div className="mt-6">
              <h3 className="font-bold text-xl mb-2">Mutations:</h3>
              <div className="space-y-4">
                {mutations.map((mutation) => (
                  <div 
                    key={mutation.id} 
                    className="bg-neutral-900 p-4 rounded-lg"
                  >
                    <h4 className="font-bold">{mutation.name}</h4>
                    <p className="text-sm text-flor-green">{mutation.benefit}</p>
                    {mutation.drawback && (
                      <p className="text-sm text-flor-orange">{mutation.drawback}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
           {species === 'psychant' && mentalAbility && (
            <div className="mt-6">
              <h3 className="font-bold text-xl mb-2">Mental Ability:</h3>
              <div className="space-y-4">
                <div 
                  key={mentalAbility.id} 
                    className="bg-neutral-900 p-4 rounded-lg"
                  >
                    <h4 className="font-bold">{mentalAbility.name}</h4>
                    <p className="text-sm text-flor-green">{mentalAbility.benefit}</p>
                    {mentalAbility.drawback && (
                      <p className="text-sm text-flor-orange">{mentalAbility.drawback}</p>
                    )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-4 mt-8">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="border border-white p-4 rounded-lg"
            onClick={() => router.push('/create/background/')}
          >
            ← background
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="border border-white p-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => router.push('/create/edit/')}
          >
            edit →
          </motion.button>
        </div>
      </main>
    </div>
  );
} 