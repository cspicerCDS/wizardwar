"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { getRandomMutation, type Mutation } from "@/lib/mutations";
import { getStatModifier, formatModifier } from "@/lib/utils";
import { mentalAbilities, type MentalAbility } from "@/lib/mental-abilities";
import NavigationButtons from "@/components/navigation-buttons";
import PageHeader from "@/components/page-header";
interface CharacterStats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export default function ChooseSpecies() {
  const [characterStats, setCharacterStats] = useState<CharacterStats | null>(null);
  const [selectedSpecies, setSelectedSpecies] = useState<string>("");
  const [showSubOptions, setShowSubOptions] = useState(false);
  const [hybridType, setHybridType] = useState<string>("");
  const [mutations, setMutations] = useState<Mutation[]>([]);
  const [availablePoints, setAvailablePoints] = useState<number>(0);
  const [initialStats, setInitialStats] = useState<CharacterStats | null>(null);
  const [selectedMentalAbility, setSelectedMentalAbility] = useState<MentalAbility | null>(null);
  const [currentHP, setCurrentHP] = useState<number>(0);

  // Load initial state
  useEffect(() => {
    const savedStats = localStorage.getItem('characterData');
    const savedSpecies = localStorage.getItem('characterSpecies');
    const savedMentalAbility = localStorage.getItem('characterMentalAbility');

    if (savedStats) {
      const data = JSON.parse(savedStats);
      setCharacterStats(data.currentStats);
      setInitialStats(data.originalStats);
      
      // Set available points if pure-strain human and stats haven't been increased
      if (savedSpecies === 'pure-strain' && !data.hasIncreasedStats) {
        setAvailablePoints(3);
      }
    }

    if (savedSpecies) {
      setSelectedSpecies(savedSpecies);
      
      // If it's a psychant and no mental ability is saved, generate one
      if (savedSpecies === 'psychant' && !savedMentalAbility) {
        const randomAbility = mentalAbilities[Math.floor(Math.random() * mentalAbilities.length)];
        setSelectedMentalAbility(randomAbility);
        localStorage.setItem('characterMentalAbility', JSON.stringify(randomAbility));
      }
    }

    if (savedMentalAbility) {
      setSelectedMentalAbility(JSON.parse(savedMentalAbility));
    }
  }, []);

  // Load HP
  useEffect(() => {
    const hp = localStorage.getItem('characterHP');
    if (hp) {
      setCurrentHP(parseInt(hp));
    }
  }, []);

  // Handle species selection
  const handleSpeciesSelect = (value: string) => {
    setSelectedSpecies(value);
    setShowSubOptions(value === 'hybrid' || value === 'mutant');
    
    // Reset stats to initial values when changing species
    if (initialStats) {
      const newStats = { ...initialStats };
      
      // Reset HP to base value plus initial CON modifier
      const baseHP = parseInt(localStorage.getItem('baseHP') || '0');
      const initialConMod = getStatModifier(initialStats.constitution);
      const totalHP = Math.max(1, baseHP + initialConMod);
      
      console.log('Resetting HP:', {
        baseHP,
        initialCon: initialStats.constitution,
        initialConMod,
        totalHP
      });
      
      // Reset HP in both localStorage and state
      localStorage.setItem('characterHP', totalHP.toString());
      setCurrentHP(totalHP);
      
      // Apply species-specific changes if needed
      if (value === 'zombo') {
        newStats.constitution += 2;
        const zomboConMod = getStatModifier(newStats.constitution);
        const zomboHP = Math.max(1, baseHP + zomboConMod + 2);
        localStorage.setItem('characterHP', zomboHP.toString());
        setCurrentHP(zomboHP);
      }
      
      setCharacterStats(newStats);
      setAvailablePoints(value === 'pure-strain' ? 3 : 0);
      
      localStorage.setItem('characterData', JSON.stringify({
        originalStats: initialStats,
        currentStats: newStats,
        hasIncreasedStats: false
      }));
      
      localStorage.setItem('characterSpecies', value);
    }
  };

  // Handle hybrid type selection
  const handleHybridTypeSelect = (value: string) => {
    setHybridType(value);
    localStorage.setItem('characterHybridType', value);
    
    if (characterStats) {
      const newStats = { ...characterStats };
      
      // First, remove any existing hybrid bonuses
      const savedBonuses = localStorage.getItem('hybridBonuses');
      if (savedBonuses) {
        const bonuses = JSON.parse(savedBonuses);
        bonuses.forEach(({ stat, amount }: { stat: keyof CharacterStats, amount: number }) => {
          newStats[stat] -= amount;
        });
      }
      
      // Apply new bonuses based on hybrid type
      const bonuses = [];
      if (value === 'animal') {
        newStats.strength += 1;
        newStats.dexterity += 1;
        bonuses.push({ stat: 'strength', amount: 1 }, { stat: 'dexterity', amount: 1 });
      } else if (value === 'plant') {
        newStats.wisdom += 1;
        newStats.intelligence += 1;
        bonuses.push({ stat: 'wisdom', amount: 1 }, { stat: 'intelligence', amount: 1 });
      }
      
      // Save the new bonuses and stats
      if (bonuses.length > 0) {
        localStorage.setItem('hybridBonuses', JSON.stringify(bonuses));
      } else {
        localStorage.removeItem('hybridBonuses');
      }
      
      setCharacterStats(newStats);
      localStorage.setItem('characterData', JSON.stringify({
        originalStats: initialStats,
        currentStats: newStats,
        hasIncreasedStats: availablePoints === 0
      }));
    }
  };

  // Reset points when changing from/to pure-strain
  useEffect(() => {
    if (selectedSpecies === 'pure-strain') {
      if (initialStats) {
        if (!characterStats) {
          console.log('Setting initial pure-strain stats', { initialStats });
          setCharacterStats(initialStats);
          setAvailablePoints(3);
          localStorage.setItem('hasIncreasedStats', 'false');
        }
      }
    } else {
      setAvailablePoints(0);
    }
  }, [selectedSpecies, initialStats, characterStats]);

  const generateMutations = () => {
    // Generate 1-3 random mutations
    const numMutations = Math.floor(Math.random() * 3) + 1; // Random number between 1-3
    const newMutations: Mutation[] = [];
    
    // Get random mutations while avoiding duplicates
    while (newMutations.length < numMutations) {
      const mutation = getRandomMutation();
      if (!newMutations.find(m => m.id === mutation.id)) {
        newMutations.push(mutation);
      }
    }
    
    setMutations(newMutations);
    localStorage.setItem('characterMutations', JSON.stringify(newMutations));
  };

  // Load saved mutations on mount
  useEffect(() => {
    const savedMutations = localStorage.getItem('characterMutations');
    if (savedMutations) {
      setMutations(JSON.parse(savedMutations));
    }
  }, []);

  // Generate mutations when mutant is selected
  useEffect(() => {
    if (selectedSpecies === 'mutant') {
      if (mutations.length === 0) {
        generateMutations();
      }
    } else {
      setMutations([]);
      localStorage.removeItem('characterMutations');
    }
  }, [selectedSpecies, mutations.length, characterStats]);

  console.log({
    selectedSpecies,
    hasStats: !!characterStats,
    availablePoints,
    initialStats,
    shouldShow: selectedSpecies === 'pure-strain' && !!characterStats && availablePoints > 0
  });

  const increaseStat = (statName: keyof CharacterStats) => {
    if (availablePoints > 0 && characterStats && initialStats && characterStats[statName] < 18) {
      const newStats = { ...characterStats };
      newStats[statName] += 1;
      
      // If increasing CON, update HP with new modifier
      if (statName === 'constitution') {
        const baseHP = parseInt(localStorage.getItem('baseHP') || '0');
        const initialConMod = getStatModifier(initialStats.constitution);
        const newConMod = getStatModifier(newStats.constitution);
        
        // Calculate new total HP: baseHP + new CON modifier
        const newHP = baseHP + newConMod;
        
        console.log('HP Calculation:', {
          baseHP,
          initialCon: initialStats.constitution,
          initialConMod,
          newCon: newStats.constitution,
          newConMod,
          newHP
        });
        
        localStorage.setItem('characterHP', newHP.toString());
        setCurrentHP(newHP);
      }
      
      setCharacterStats(newStats);
      const newPoints = availablePoints - 1;
      setAvailablePoints(newPoints);
      
      localStorage.setItem('characterData', JSON.stringify({
        originalStats: initialStats,
        currentStats: newStats,
        hasIncreasedStats: newPoints === 0
      }));
    }
  };

  return (
    <div className=" bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center">
     
        <PageHeader title="Choose Your Species" />

        {characterStats && (
          <div className="text-sm opacity-75 bg-neutral-800 p-4 rounded-lg">
            <h2 className="font-bold text-xl mb-2">Current Stats:</h2> 
            <div className="space-y-2">
              <p className="text-left text-xs">
                STR {characterStats.strength} ({formatModifier(getStatModifier(characterStats.strength))}), 
                DEX {characterStats.dexterity} ({formatModifier(getStatModifier(characterStats.dexterity))}), 
                CON {characterStats.constitution} ({formatModifier(getStatModifier(characterStats.constitution))}), 
                INT {characterStats.intelligence} ({formatModifier(getStatModifier(characterStats.intelligence))}), 
                WIS {characterStats.wisdom} ({formatModifier(getStatModifier(characterStats.wisdom))}), 
                CHA {characterStats.charisma} ({formatModifier(getStatModifier(characterStats.charisma))})
              </p>
              <p className="text-left text-xs">Hit Points: {currentHP}</p>
            </div>
          </div>
        )}

        <ToggleGroup 
          type="single" 
          className="flex flex-wrap gap-2 w-full max-w-md border-none justify-start"
          value={selectedSpecies}
          onValueChange={handleSpeciesSelect}
        >
          <ToggleGroupItem 
            value="pure-strain" 
            className="toggle-primary !w-auto"
          >
            Pure-Strain Human
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="hybrid" 
            className="toggle-primary !w-auto"
          >
            Hybrid
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="psychant" 
            className="toggle-primary !w-auto"
          >
            Psychant
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="mutant" 
            className="toggle-primary !w-auto"
          >
            Mutant
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="zombo" 
            className="toggle-primary !w-auto"
          >
            Zombo
          </ToggleGroupItem>
        </ToggleGroup>

        {showSubOptions && selectedSpecies === 'hybrid' && (
          <div className="mt-4 w-full max-w-md">
            <h3 className="text-xl mb-2">Choose Hybrid Type</h3>
            <ToggleGroup 
              type="single" 
              className="flex  gap-2 w-full border-none"
              value={hybridType}
              onValueChange={handleHybridTypeSelect}
            >
              <ToggleGroupItem 
                value="animal" 
                className="toggle-primary !w-auto"
              >
                Animal Hybrid
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="plant" 
                className="toggle-primary !w-auto"
              >
                Plant Hybrid
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        )}

        {showSubOptions && selectedSpecies === 'mutant' && (
          <div className="mt-4 w-full max-w-md">
            <h3 className="text-xl mb-2">Random Mutations</h3>
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
             {/*  <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={generateMutations}
                className="w-full p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                Reroll Mutations
              </motion.button> */}
            </div>
          </div>
        )}

        {selectedSpecies === 'pure-strain' && characterStats && availablePoints > 0 && (
          <div className="mt-4 w-full max-w-md">
            <h3 className="text-xl mb-2">Pure-Strain Human Bonuses</h3>
            <p className="text-sm mb-4">Points remaining: {availablePoints}</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(characterStats).map(([stat, value]) => {
                const handleClick = () => {
                  console.log('Button clicked for stat:', stat);
                  increaseStat(stat as keyof CharacterStats);
                };

                return (
                  <motion.button
                    key={stat}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClick}
                    disabled={availablePoints <= 0 || value >= 18}
                    className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed flex justify-between items-center"
                  >
                    <span className="uppercase">{stat.slice(0, 3)}</span>
                    <span>{value} ({formatModifier(getStatModifier(value))})</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}

        {selectedSpecies === 'psychant' && selectedMentalAbility && (
          <div className="mt-4 w-full max-w-md">
            <h3 className="text-xl mb-2">Mental Ability</h3>
            <div className="space-y-4">
              <div className="bg-neutral-900 p-4 rounded-lg">
                <h4 className="font-bold">{selectedMentalAbility.name}</h4>
                <p className="text-sm opacity-75">{selectedMentalAbility.description}</p>
                <p className="text-sm text-flor-green">{selectedMentalAbility.benefit}</p>
                {selectedMentalAbility.drawback && (
                  <p className="text-sm text-flor-orange">{selectedMentalAbility.drawback}</p>
                )}
              </div>
              {/* Uncomment if you want to add reroll functionality
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const randomAbility = mentalAbilities[Math.floor(Math.random() * mentalAbilities.length)];
                  setSelectedMentalAbility(randomAbility);
                  localStorage.setItem('characterMentalAbility', JSON.stringify(randomAbility));
                }}
                className="w-full p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                Reroll Mental Ability
              </motion.button>
              */}
            </div>
          </div>
        )}

        <NavigationButtons
          backPath="/game/rules/create/"
          backLabel="stats"
          forwardPath="/game/rules/create/class/"
          forwardLabel="Choose Class"
          isForwardDisabled={!selectedSpecies || (selectedSpecies === 'hybrid' && !hybridType)}
        />
      </main>
    </div>
  );
} 