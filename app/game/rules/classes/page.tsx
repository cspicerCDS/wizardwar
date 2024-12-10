'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const Page = () => {
  const router = useRouter();
  const classes = [
    {
      name: "Wasteland Warrior",
      description: "A battle-hardened fighter who excels at combat and survival in the harsh wasteland.",
      features: [
        "Cleave",
        "Weapon Specialization",
        "Combat Mastery",
        "Extra Attack"
      ]
    },
    {
      name: "Scavenger",
      description: "A resourceful survivor skilled at finding useful items and avoiding danger. Expert at stealth and exploration.",
      features: [
        "Expertise Skills",
        
      ]
    },
    {
      name: "Tech Adept",
      description: "A master of ancient technology who can understand and repair pre-war devices. Specializes in tech solutions.",
      features: [
        "Tech Understanding",
        "Device Repair",
        "Artifact Knowledge",
        "Tech Improvisation"
      ]
    },
    {
      name: "Mystic",
      description: "A wielder of mysterious powers, blending ancient knowledge with supernatural abilities. Masters of the unknown.",
      features: [
        "Black Magic",
        "Ancient Knowledge",
        "White Magic",
        "Ritual Casting"
      ]
    }
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20 bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-2xl">
        <h1 className="text-3xl font-dirt uppercase text-center">Classes</h1>
        
        <div className="grid gap-6 w-full">
          {classes.map((classInfo) => (
            <div key={classInfo.name} className="bg-neutral-900 p-6 rounded-lg">
              <h2 className="text-2xl mb-2">{classInfo.name}</h2>
              <p className="text-gray-300 mb-4">{classInfo.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {classInfo.features.map((feature, index) => (
                  <div key={index} className="text-sm bg-neutral-800 p-2 rounded">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-8">      
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-white border border-white p-4 rounded-lg"
            onClick={() => router.push('/game/rules/species/')}
          >
            ← Species
          </motion.button> 
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-white border border-white p-4 rounded-lg"
            onClick={() => router.push('/game/rules/combat/')}
          >
            Combat →
          </motion.button>
        </div>
      </main>
    </div>
  );
};

export default Page;
