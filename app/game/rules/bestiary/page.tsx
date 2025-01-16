"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { creatures } from "@/lib/bestiary";
import { type Creature } from "@/lib/types";
import PageHeader from "@/components/page-header";
import CreatureCard from "@/components/creature-card";
import { LayoutGrid, List, Search } from "lucide-react";
import Link from "next/link";

export default function Bestiary() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [isGridView, setIsGridView] = useState(true);
  
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
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search creatures..."
              className="p-2 pl-9 rounded bg-neutral-800 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="h-4 w-4 absolute left-2.5 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          </div>
          
          <div className="flex gap-4 items-center">
            <select
              className="p-2 rounded bg-neutral-800 flex-grow sm:flex-grow-0"
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

            <div className="flex gap-2">
              <button
                onClick={() => setIsGridView(true)}
                className={`p-2 rounded ${isGridView ? 'bg-neutral-700' : 'bg-neutral-800'}`}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-2 rounded ${!isGridView ? 'bg-neutral-700' : 'bg-neutral-800'}`}
                aria-label="List view"
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {isGridView ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCreatures.map((creature) => (
              <Link href={`/game/rules/bestiary/${creature.id}`} key={creature.id}>
              <CreatureCard key={creature.id} creature={creature} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="w-full">
            {filteredCreatures.map((creature) => (
              <div 
                key={creature.id} 
                className="p-4 border-b border-neutral-800 hover:bg-neutral-900 cursor-pointer"
                onClick={() => router.push(`/game/rules/bestiary/${creature.id}`)}
              >
                {creature.name} - HD: {creature.stats.hd} - HP: {creature.stats.hp}  
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
} 