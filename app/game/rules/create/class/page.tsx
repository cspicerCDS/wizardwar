"use client";

import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
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

export default function ChooseClass() {
  const [characterStats, setCharacterStats] = useState<CharacterStats | null>(null);
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [savedSpecies, setSavedSpecies] = useState<string>("");
  const [savedHybridType, setSavedHybridType] = useState<string>("");

  useEffect(() => {
    const savedStats = localStorage.getItem('characterStats');
    if (savedStats) {
      setCharacterStats(JSON.parse(savedStats));
    }

    const savedClass = localStorage.getItem('characterClass');
    if (savedClass) {
      setSelectedClass(savedClass);
    }

    const species = localStorage.getItem('characterSpecies');
    const hybridType = localStorage.getItem('characterHybridType');
    if (species) {
      setSavedSpecies(species);
    }
    if (hybridType) {
      setSavedHybridType(hybridType);
    }
  }, []);

  const handleClassSelect = (value: string) => {
    setSelectedClass(value);
    localStorage.setItem('characterClass', value);
  };

  return (
    <div className=" bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center">

        <PageHeader title="Choose Your Class" />
        
        {characterStats && (
          <div className="text-sm opacity-75 bg-neutral-800 p-4 rounded-lg">
            <h2 className="font-bold text-xl mb-2">Current Selections:</h2> 
            <div className="space-y-2">
              <p className="text-left text-xs">
                STR {characterStats.strength}, DEX {characterStats.dexterity}, 
                CON {characterStats.constitution}, INT {characterStats.intelligence}, 
                WIS {characterStats.wisdom}, CHA {characterStats.charisma}
              </p>
              <p className="text-left text-xs">
                Species: {savedSpecies.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                {savedHybridType && ` (${savedHybridType.charAt(0).toUpperCase() + savedHybridType.slice(1)})`}
              </p>
            </div>
          </div>
        )}

        <ToggleGroup 
          type="single" 
          className="flex flex-col gap-2 w-full max-w-md border-none"
          value={selectedClass}
          onValueChange={handleClassSelect}
        >
          <ToggleGroupItem 
            value="warrior" 
            className="toggle-primary"
            // className="w-full p-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 data-[state=on]:bg-neutral-600 data-[state=on]:text-white transition-colors"
          >
            Wasteland Warrior
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="scavenger" 
            className="toggle-primary"
          >
            Scavenger
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="tech-adept" 
            className="toggle-primary"
          >
            Tech Adept
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="mystic" 
            className="toggle-primary"
          >
            Mystic
          </ToggleGroupItem>
        </ToggleGroup>
        
        <NavigationButtons
          backPath="/game/rules/create/species/"
          backLabel="Species"
          forwardPath="/game/rules/create/background/"
          forwardLabel="Choose Background"
          isForwardDisabled={!selectedClass}
        />
      </main>
    </div>
  );
} 