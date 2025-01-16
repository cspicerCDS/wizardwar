"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { type Creature } from "@/lib/types"
import { formatModifier, getStatModifier } from "@/lib/utils"
import { useRouter } from "next/navigation"


export default function CreatureCard({ creature }: { creature: Creature }) {
  const router = useRouter()

  return (
    <motion.div
      className="bg-neutral-900 p-4 rounded-lg"
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onClick={() => router.push(`/game/rules/bestiary/${creature.id}`)}

    >
      <h2 className="text-xl font-bold">{creature.name}</h2>
      <p className="text-sm text-neutral-400 capitalize">{creature.type}</p>
      <p className="mt-2 mb-4">{creature.description}</p>
      
      {creature.image && (
        <div className="relative w-full mb-4">
          <Image
            src={creature.image}
            alt={creature.name}
            width="500"
            height="500"
            className="cover grayscale"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <div>HP: {creature.stats.hp} (HD: {creature.stats.hd})</div>
        <div>ARMOR: {creature.stats.armor === "none" ? "None" : 
          creature.stats.armor === "light" ? "-d2" :
          creature.stats.armor === "medium" ? "-d4" :
          "-d6"}</div>
        <div>SIZE: {creature.size.charAt(0).toUpperCase() + creature.size.slice(1)}</div>
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
            {creature.abilities.map((ability, index) => (
              <li key={index}>{ability}</li>
            ))}
          </ul>
        </div>
      )}

      {(creature.encounters || creature.lairs || creature.loot) && (
        <Collapsible className="w-full mt-4">
          <CollapsibleTrigger className="flex items-center gap-2 group font-bold">
            Additional Info
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col gap-4">
          {creature.loot && (
              <div className="mt-2">
                <h3 className="font-bold">Loot:</h3>
                <ol className="list-decimal list-inside text-sm">
                  {creature.loot.map((item, index) => (
                    <li key={index} className="mt-2 text-sm p-4 rounded-lg bg-neutral-800">{item}</li>
                  ))}
                </ol>
              </div>
            )}
            {creature.encounters && (
              <motion.div className="mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}>
                <h3 className="font-bold">Encounters:</h3>
                <ol className="list-decimal list-inside text-sm">
                  {creature.encounters.map((item, index) => (
                    <li key={index} className="mt-2 text-sm p-4 rounded-lg bg-neutral-800">{item}</li>
                  ))}
                </ol>
              </motion.div>
            )}
            {creature.lairs && (
              <div className="mt-2">
                <h3 className="font-bold">Lairs:</h3>
                <ol className="list-decimal list-inside text-sm">
                  {creature.lairs.map((item, index) => (
                    <li key={index} className="mt-2 text-sm p-4 rounded-lg bg-neutral-800">{item}</li>
                  ))}
                </ol>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
      )}
    </motion.div>
  )
} 