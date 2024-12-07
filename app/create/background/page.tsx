"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getBackgroundsBySpeciesAndClass, type Background } from "@/lib/backgrounds";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { getBasePath } from "@/lib/utils";

export default function ChooseBackground() {
  const router = useRouter();
  const [availableBackgrounds, setAvailableBackgrounds] = useState<Background[]>([]);
  const [selectedBackground, setSelectedBackground] = useState<string>("");
  
  useEffect(() => {
    const species = localStorage.getItem('characterSpecies');
    const characterClass = localStorage.getItem('characterClass');
    
    if (species && characterClass) {
      const backgrounds = getBackgroundsBySpeciesAndClass(species, characterClass);
      setAvailableBackgrounds(backgrounds);
    }
    
    const savedBackground = localStorage.getItem('characterBackground');
    if (savedBackground) {
      setSelectedBackground(savedBackground);
    }
  }, []);

  const handleBackgroundSelect = (value: string) => {
    setSelectedBackground(value);
    localStorage.setItem('characterBackground', value);
    
    // Save proficiencies and equipment
    const selectedBg = availableBackgrounds.find(bg => bg.id === value);
    if (selectedBg) {
      localStorage.setItem('characterProficiencies', JSON.stringify(selectedBg.proficiencies));
      localStorage.setItem('characterEquipment', JSON.stringify(selectedBg.equipment));
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-md">
        <Image
          src={`${getBasePath()}/images/ww-logo.svg`}   
          alt="Logo"
          className="object-contain w-full"
          width={454}
          height={98}
          priority
        />
        
        <h1 className="text-2xl font-bold">Choose Your Background</h1>

        <div className="w-full flex-1 min-h-0 overflow-y-auto">
          <ToggleGroup 
            type="single" 
            className="flex flex-col gap-4 pb-4 border-none"
            value={selectedBackground}
            onValueChange={handleBackgroundSelect}
          >
            {availableBackgrounds.map((background) => (
              <ToggleGroupItem
                key={background.id}
                value={background.id}
                className="toggle-primary "
                // className="border-none h-auto w-full p-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 data-[state=on]:bg-neutral-400 text-left"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-lg">{background.name}</h3>
                  <p className="text-sm opacity-80">{background.description}</p>
                  <div className="text-sm mt-2">
                    <div className="">
                      <span className="font-bold">Proficiencies:</span> <span className="font-italic">{background.proficiencies.join(', ')}</span>
                    </div>
                    <div className="">
                      <span className="font-bold">Equipment:</span> <span className="font-italic">{background.equipment.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="flex gap-4 mt-8">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="border border-white p-4 rounded-lg"
            onClick={() => router.push('/create/class/')}
          >
            ← class
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="border border-white p-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => router.push('/create/summary/')}
            disabled={!selectedBackground}
          >
            summary →
          </motion.button>
        </div>
      </main>
    </div>
  );
} 