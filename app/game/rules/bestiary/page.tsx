"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getStatModifier, formatModifier } from "@/lib/utils";
import { type Creature } from "@/lib/types";
import { creatures } from "@/lib/bestiary";

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
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-4xl">
        <h1 className="text-2xl font-bold">Bestiary</h1>

        <div className="w-full flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search creatures..."
            className="p-2 rounded bg-neutral-800 flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          {/* Filter */}
          <select
            className="p-2 rounded bg-neutral-800"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="beast">Beasts</option>
            <option value="humanoid">Humanoids</option>
            <option value="monster">Monsters</option>
            <option value="npc">NPCs</option>
          </select>
        </div>

        {/* Creature List */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCreatures.map((creature) => (
            <motion.div
              key={creature.id}
              className="bg-neutral-900 p-4 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              {creature.image && (
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={creature.image}
                    alt={creature.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <h2 className="text-xl font-bold">{creature.name}</h2>
              <p className="text-sm text-neutral-400 capitalize">{creature.type}</p>
              <p className="mt-2">{creature.description}</p>
              
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div>HP: {creature.stats.hp}</div>
                <div>ARMOR: {creature.stats.armor === "none" ? "None" : 
                  creature.stats.armor === "light" ? "-d2" :
                  creature.stats.armor === "medium" ? "-d4" :
                  "-d6"}</div>
              </div>
              
              <div className="mt-2 grid grid-cols-6 gap-1 text-xs">
                <div><strong>STR:</strong> {creature.stats.str} ({formatModifier(getStatModifier(creature.stats.str))})</div>
                <div><strong>DEX:</strong> {creature.stats.dex} ({formatModifier(getStatModifier(creature.stats.dex))})</div>
                <div><strong>CON:</strong> {creature.stats.con} ({formatModifier(getStatModifier(creature.stats.con))})</div>
                <div><strong>INT:</strong> {creature.stats.int} ({formatModifier(getStatModifier(creature.stats.int))})</div>
                <div><strong>WIS:</strong> {creature.stats.wis} ({formatModifier(getStatModifier(creature.stats.wis))})</div>
                <div><strong>CHA:</strong> {creature.stats.cha} ({formatModifier(getStatModifier(creature.stats.cha))})</div>
              </div>

              {creature.abilities && (
                <div className="mt-2">
                  <h3 className="font-bold">Abilities:</h3>
                  <ul className="list-disc list-inside text-sm">
                    {creature.abilities.map((ability: string, index: number) => (
                      <li key={index}>{ability}</li>
                    ))}
                  </ul>
                </div>
              )}

              {creature.loot && (
                <div className="mt-2">
                  <h3 className="font-bold">Loot:</h3>
                  <ul className="list-disc list-inside text-sm">
                    {creature.loot.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
} 