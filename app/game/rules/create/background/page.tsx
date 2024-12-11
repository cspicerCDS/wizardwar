"use client";

import { useState, useEffect } from "react";
import { getBackgroundsBySpeciesAndClass, type Background } from "@/lib/backgrounds";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import NavigationButtons from "@/components/navigation-buttons";
import PageHeader from "@/components/page-header";
export default function ChooseBackground() {
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
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center   bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-md">
        
        <PageHeader title="Choose Your Background" />

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

        <NavigationButtons
          backPath="/game/rules/create/class/"
          backLabel="class"
          forwardPath="/game/rules/create/summary/"
          forwardLabel="Summary"
          isForwardDisabled={!selectedBackground}
        />
      </main>
    </div>
  );
} 