'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter();
  
  // Define the modifier groups
  const modifierGroups = [
    { range: '3', modifier: -3 },
    { range: '4-5', modifier: -2 },
    { range: '6-8', modifier: -1 },
    { range: '9-12', modifier: 0 },
    { range: '13-15', modifier: 1 },
    { range: '16-17', modifier: 2 },
    { range: '18', modifier: 3 }
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20 bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-2xl">
        <h1 className="text-3xl font-dirt uppercase text-center">Attributes & Modifiers</h1>
        
        {/* Modifier Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-neutral-800">
                <th className="p-2 text-left">Score Range</th>
                <th className="p-2 text-left">Modifier</th>
              </tr>
            </thead>
            <tbody>
              {modifierGroups.map((group, i) => (
                <tr key={i} className="border-t border-neutral-700">
                  <td className="p-2">{group.range}</td>
                  <td className="p-2">{group.modifier >= 0 ? `+${group.modifier}` : group.modifier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Attribute Explanations */}
        <div className="space-y-4 w-full">
          <h2 className="text-2xl font-dirt">Attributes</h2>
          
          <div className="grid gap-4">
            <div className="bg-neutral-900 p-4 rounded">
              <h3 className="font-bold">Strength (STR)</h3>
              <p className="text-sm opacity-75">Physical power, melee combat</p>
            </div>

            <div className="bg-neutral-900 p-4 rounded">
              <h3 className="font-bold">Dexterity (DEX)</h3>
              <p className="text-sm opacity-75">Agility, reflexes, stealth</p>
            </div>

            <div className="bg-neutral-900 p-4 rounded">
              <h3 className="font-bold">Constitution (CON)</h3>
              <p className="text-sm opacity-75">Health, stamina, resistance to disease and poison</p>
            </div>

            <div className="bg-neutral-900 p-4 rounded">
              <h3 className="font-bold">Intelligence (INT)</h3>
              <p className="text-sm opacity-75">Knowledge, problem-solving, tech and magic understanding</p>
            </div>

            <div className="bg-neutral-900 p-4 rounded">
              <h3 className="font-bold">Wisdom (WIS)</h3>
              <p className="text-sm opacity-75">Perception, intuition, ranged combat</p>
            </div>

            <div className="bg-neutral-900 p-4 rounded">
              <h3 className="font-bold">Charisma (CHA)</h3>
              <p className="text-sm opacity-75">Leadership, persuasion, force of personality</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-8">      
        <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-white border border-white p-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => router.push('/game/rules/')}
           
          >
             ← Introduction
          </motion.button> 
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-white border border-white p-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => router.push('/game/rules/species/')}
           
          >
            Species  →
          </motion.button>
        </div>
      </main>
    </div>
  );
};

export default Page;
