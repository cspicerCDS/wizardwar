"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion"
import Image from "next/image";
import { getBasePath, getStatModifier } from "@/lib/utils";

interface Stats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export default function CreateCharacter() {
  const router = useRouter();
  const pathname = usePathname();
  const keysToRemove = [
    'characterData',
    'speciesData',
    'backgroundData',
    'characterSpecies',
    'characterHP',
    'characterClass',
    'characterBackground',
    'characterMutations',
    'characterProficiencies',
    'characterEquipment',
    'characterMentalAbility',
    'hybridBonuses',
    'characterHybridType'
  ];
  
  const [originalStats, setOriginalStats] = useState<Stats>({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  });

  const [currentStats, setCurrentStats] = useState<Stats>({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  });

  const [hasIncreasedStats, setHasIncreasedStats] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  // Load stats from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('characterData');
    if (savedData) {
      const data = JSON.parse(savedData);
      setOriginalStats(data.originalStats);
      setCurrentStats(data.currentStats);
      setHasIncreasedStats(data.hasIncreasedStats);
    }
  }, []);

  // Save stats to localStorage whenever they change
  useEffect(() => {
    if (currentStats.strength > 0 && !isRolling) {
      const data = {
        originalStats,
        currentStats,
        hasIncreasedStats
      };
      localStorage.setItem('characterData', JSON.stringify(data));
    }
  }, [currentStats, originalStats, hasIncreasedStats, isRolling]);

  // Add this effect to handle direct access
  useEffect(() => {
    // Check if we're accessing the page directly
    const savedData = localStorage.getItem('characterData');
    if (!savedData && pathname !== '/create' && pathname !== '/create/') {
      router.replace('/create');
    }
  }, [pathname, router]);

  const getModifier = (stat: number) => {
    if (stat === 3) return -3;
    if (stat >= 4 && stat <= 5) return -2;
    if (stat >= 6 && stat <= 8) return -1;
    if (stat >= 9 && stat <= 12) return 0;
    if (stat >= 13 && stat <= 15) return 1;
    if (stat >= 16 && stat <= 17) return 2;
    if (stat === 18) return 3;
    return 0;
  };

  const rollStats = async () => {
    setIsRolling(true);
    
    // Reset all state
    setOriginalStats({
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    });
    setCurrentStats({
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    });
    console.log('Starting roll stats...', keysToRemove);
    
    // Clear specific keys from localStorage
    keysToRemove.forEach(key => {
      const existingValue = localStorage.getItem(key);
      console.log(`Current value for ${key}:`, existingValue);
      
      if (existingValue) {  // Only attempt removal if the key exists
        try {
          localStorage.removeItem(key);
          const afterRemoval = localStorage.getItem(key);
          console.log(`After removal - ${key}:`, afterRemoval);
        } catch (error) {
          console.error(`Error clearing ${key} from localStorage:`, error);
        }
      }
    });

    // Double-check that all keys were removed
    const remainingKeys = keysToRemove.filter(key => localStorage.getItem(key) !== null);
    if (remainingKeys.length > 0) {
      console.warn('Some keys were not removed:', remainingKeys);
    }

    console.log('LocalStorage after clearing:', Object.keys(localStorage));

    setHasIncreasedStats(false);

    // Wait for state to update
    await new Promise(resolve => setTimeout(resolve, 0));

    console.log('After clear:', Object.keys(localStorage));

    // Generate new stats
    const generateStat = () => {
      const rolls = Array.from({ length: 3 }, () => Math.floor(Math.random() * 6) + 1)
        .reduce((sum, num) => sum + num, 0);
      return rolls;
    };

    const newStats = {
      strength: generateStat(),
      dexterity: generateStat(),
      constitution: generateStat(),
      intelligence: generateStat(),
      wisdom: generateStat(),
      charisma: generateStat()
    };

    // Generate HP
    const generateHP = (constitution: number): number => {
      const baseHP = Math.floor(Math.random() * 8) + 1; // 1d8
      const conMod = getStatModifier(constitution);
      let totalHP = Math.max(1, baseHP + conMod); // Ensure minimum of 1
      
      // Add zombo bonus if applicable
      const zomboBonuses = localStorage.getItem('zomboBonuses');
      if (zomboBonuses) {
        const { hpBonus } = JSON.parse(zomboBonuses);
        totalHP += hpBonus;
      }
      
      return totalHP;
    };

    const hitPoints = generateHP(newStats.constitution);
    localStorage.setItem('characterHP', hitPoints.toString());

    console.log('Generated new stats:', newStats);

    // Set new stats
    setOriginalStats(newStats);
    setCurrentStats(newStats);
    setHasIncreasedStats(false);
    
    // Wait for state updates
    await new Promise(resolve => setTimeout(resolve, 0));
    
    // Save new stats explicitly
    const data = {
      originalStats: newStats,
      currentStats: newStats,
      hasIncreasedStats: false
    };
    
    try {
      localStorage.setItem('characterData', JSON.stringify(data));
      console.log('Saved new stats to localStorage');
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }

    setIsRolling(false);
    console.log('Roll stats complete');
  };

  const increaseStat = (statName: keyof Stats) => {
    if (!hasIncreasedStats && currentStats[statName] < 18) {
      setCurrentStats(prev => ({
        ...prev,
        [statName]: prev[statName] + 1
      }));
      setHasIncreasedStats(true);
    }
  };

  useEffect(() => {
    console.log('Component mounted');
    console.log('Current localStorage:', Object.keys(localStorage));
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20 bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          src={`${getBasePath()}/images/ww-logo.svg`}
          alt="Logo"
          className="object-contain w-full"
          width={454}
          height={98}
          priority
        />

        <h1 className="text-2xl font-bold text-white">Create Your Character</h1>
       

        {/* Separate roll stats button */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="border border-white p-4 rounded-lg text-white" 
          onClick={rollStats}
        >
          Roll Stats
        </motion.button>

        {currentStats.strength > 0 && (
          <>
            <div className="grid grid-cols-3 gap-4 text-lg text-white">
              {Object.entries(currentStats).map(([stat, value]) => (
                <React.Fragment key={stat}>
                  <div className="font-bold text-xl capitalize">{stat}:</div>
                  <div className="text-center font-bold group relative">
                    {value}
                    {!hasIncreasedStats && value < 18 && (
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => increaseStat(stat as keyof Stats)}
                      >
                        +
                      </motion.button>
                    )}
                  </div>
                  <div className="text-left">
                    {getModifier(value) >= 0 ? `+${getModifier(value)}` : getModifier(value)}
                  </div>
                </React.Fragment>
              ))}
            </div>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="border border-white p-4 rounded-lg mt-4 text-white"
              onClick={() => router.push('/create/species/')}
            >
              Choose Species →
            </motion.button>
          </>
        )}
      </main>
    </div>
  );
} 