import { creatures } from "@/lib/bestiary";
import PageHeader from "@/components/page-header";
import { formatModifier, getStatModifier } from "@/lib/utils";
import Image from "next/image";
import NavigationButtons from "@/components/navigation-buttons";

// Update the generateStaticParams function
export async function generateStaticParams() {
  return creatures.map((creature) => ({
    id: creature.id,
  }));
}

// Component to render a creature's details
export default async function CreatureDetail({
  params,
}: {
  params: Promise<{ id: string }> | undefined
}) {
  const resolvedParams = await Promise.resolve(params ?? { id: '' });
  const id = resolvedParams.id;
  const creature = creatures.find((c) => c.id === id);

  if (!creature) return <div>Creature not found</div>;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-5xl p-4">
        <PageHeader title={creature.name} />
        <div className="bg-neutral-900 p-6 rounded-lg w-full">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 order-2 md:order-1">
              <p className="text-sm text-neutral-400 capitalize mb-4">{creature.type}</p>
              <p className="mb-4">{creature.description}</p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>HP: {creature.stats.hp}</div>
                <div>HD: {creature.stats.hd}</div>
                <div>Size: {creature.size}</div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-4 bg-neutral-800 rounded-lg">
                <div>
                  <strong>STR:</strong> {creature.stats.str} (
                  {formatModifier(getStatModifier(creature.stats.str))})
                </div>
                <div>
                  <strong>DEX:</strong> {creature.stats.dex} (
                  {formatModifier(getStatModifier(creature.stats.dex))})
                </div>
                <div>
                  <strong>CON:</strong> {creature.stats.con} (
                  {formatModifier(getStatModifier(creature.stats.con))})
                </div>
                <div>
                  <strong>INT:</strong> {creature.stats.int} (
                  {formatModifier(getStatModifier(creature.stats.int))})
                </div>
                <div>
                  <strong>WIS:</strong> {creature.stats.wis} (
                  {formatModifier(getStatModifier(creature.stats.wis))})
                </div>
                <div>
                  <strong>CHA:</strong> {creature.stats.cha} (
                  {formatModifier(getStatModifier(creature.stats.cha))})
                </div>
              </div>
              {creature.abilities && (
                <div className="mt-4">
                  <h3 className="font-bold mb-2">Abilities:</h3>
                  <ul className="list-disc list-inside">
                    {creature.abilities.map((ability, index) => (
                      <li key={index}>{ability}</li>
                    ))}
                  </ul>
                </div>
              )}
              {creature.loot && (
                <div className="mt-4">
                  <h3 className="font-bold mb-2">Loot:</h3>
                  <ul className="list-disc list-inside">
                    {creature.loot.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {creature.lairs && (
                <div className="mt-4">
                  <h3 className="font-bold mb-2">Lairs:</h3>
                  <ul className="list-disc list-inside">
                    {creature.lairs.map((lair, index) => (
                      <li key={index}>{lair}</li>
                    ))}
                  </ul>
                </div>
              )}
              {creature.encounters && (
                <div className="mt-4">
                  <h3 className="font-bold mb-2">Encounters:</h3>
                  <ul className="list-disc list-inside">
                    {creature.encounters.map((encounter, index) => (
                      <li key={index}>{encounter}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {creature.image && (
              <div className="order-1 w-full md:w-1/3 md:order-2">
                <Image
                  src={creature.image}
                  alt={creature.name}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg grayscale"
                />
              </div>
            )}
            
          </div>
          
        </div>
        <NavigationButtons  backPath="/game/rules/bestiary/"
          backLabel="Back to Bestiary" />
      </main>
    </div>
  );
}
