"use client";

import { useState } from "react";
import { creatures } from "@/lib/bestiary";
import { type Creature } from "@/lib/types";
import PageHeader from "@/components/page-header";
import CreatureCard from "@/components/creature-card";

export default function Bestiary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  
  const filteredCreatures = creatures
    .filter((creature: Creature) => 
      creature.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType === "all" || creature.type === selectedType)
    )
    .sort((a: Creature, b: Creature) => a.name.localeCompare(b.name));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-5xl">
        <PageHeader title="Bestiary" />

        <div className="w-full flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search creatures..."
            className="p-2 rounded bg-neutral-800 flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <select
            className="p-2 rounded bg-neutral-800"
            style={{borderRight: "transparent solid .875rem"}}
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="beast">Beasts</option>
            <option value="demonic">Demonic</option>
            <option value="humanoid">Humanoids</option>
            <option value="monster">Monsters</option>
            <option value="npc">NPCs</option>
          </select>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCreatures.map((creature) => (
            <CreatureCard key={creature.id} creature={creature} />
          ))}
        </div>
      </main>
    </div>
  );
} 