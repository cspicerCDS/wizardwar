export interface Mutation {
  id: number;
  name: string;
  benefit: string;
  drawback?: string;
  category: 'physical' | 'mental' | 'sensory' | 'defensive' | 'offensive';
}

export const mutations: Mutation[] = [
  {
    id: 1,
    name: "Reinforced Skeleton",
    benefit: "+2 to Constitution, increased resistance to physical damage",
    drawback: "Movement speed reduced by 5 feet",
    category: "defensive"
  },
  {
    id: 2,
    name: "Telepathic Nodes",
    benefit: "Can communicate telepathically within 30 feet",
    drawback: "Vulnerable to psychic damage",
    category: "mental"
  },
  {
    id: 3,
    name: "Chameleon Skin",
    benefit: "Can hide in plain sight 1-4 on 1d6",
    category: "defensive"
  },
  {
    id: 4,
    name: "Toxic Blood",
    benefit: "Attackers take 1d4 acid damage when dealing melee damage",
    drawback: "Healing potions are half as effective",
    category: "offensive"
  },
  {
    id: 5,
    name: "Enhanced Vision",
    benefit: "Darkvision 60 feet, can see invisible creatures",
    drawback: "Disadvantage on saves vs. bright light",
    category: "sensory"
  },
  {
    id: 6,
    name: "Elastic Limbs",
    benefit: "Melee attack range increased by 5 feet, advantage on grapple checks",
    drawback: "Disadvantage on strength-based ability checks",
    category: "physical"
  },
  {
    id: 7,
    name: "Neural Enhancement",
    benefit: "+2 to Intelligence checks and saves",
    drawback: "Must succeed on a DC 12 Wisdom save to fall asleep",
    category: "mental"
  },
  {
    id: 8,
    name: "Armored Hide",
    benefit: "d4 natural armor bonus",
    drawback: "Cannot wear conventional armor",
    category: "defensive"
  },
  {
    id: 9,
    name: "Energy Absorption",
    benefit: "Resistance to one type of energy damage (random)",
    drawback: "Vulnerability to opposite energy type",
    category: "defensive"
  },
  {
    id: 10,
    name: "Pheromone Glands",
    benefit: "Advantage on Charisma checks against organic creatures",
    drawback: "Predatory creatures can smell you from twice the normal distance",
    category: "physical"
  },
  {
    id: 11,
    name: "Regenerative Tissue",
    benefit: "Regain 1 HP at the start of each turn",
    drawback: "Fire damage stops regeneration for 1d4 rounds",
    category: "defensive"
  },
  {
    id: 12,
    name: "Sonic Projection",
    benefit: "Can emit a sonic blast dealing 2d6 thunder damage (recharge 5-6)",
    drawback: "Disadvantage on stealth checks",
    category: "offensive"
  },
  {
    id: 13,
    name: "Quantum Brain",
    benefit: "Can take two reactions per round",
    drawback: "Must succeed on DC 12 Intelligence save or become stunned when taking psychic damage",
    category: "mental"
  },
  {
    id: 14,
    name: "Venomous Fangs",
    benefit: "Natural bite attack dealing 1d4 + 1d6 poison damage",
    drawback: "Cannot speak clearly (-2 to Charisma checks involving speech)",
    category: "offensive"
  },
  {
    id: 15,
    name: "Electromagnetic Sense",
    benefit: "Can detect electronic devices within 30 feet",
    drawback: "Disadvantage on saves against lightning damage",
    category: "sensory"
  },
  {
    id: 16,
    name: "Temporal Shift",
    benefit: "Once per long rest, can reroll any failed save",
    drawback: "Age twice as fast as normal",
    category: "defensive"
  },
  {
    id: 17,
    name: "Parasitic Bond",
    benefit: "Can drain 1d6 HP from target and heal self as an action",
    drawback: "Must feed on blood once per day or take 1 level of exhaustion",
    category: "offensive"
  },
  {
    id: 18,
    name: "Gravity Control",
    benefit: "Can levitate self for up to 5 minutes per day",
    drawback: "Double damage from falling",
    category: "physical"
  },
  {
    id: 19,
    name: "Memory Absorption",
    benefit: "Can learn one skill proficiency from touching a willing creature",
    drawback: "Lose one random proficiency each long rest",
    category: "mental"
  },
  {
    id: 20,
    name: "Crystalline Growth",
    benefit: "Natural armor d4",
    drawback: "Thunder damage causes stunned condition on failed save",
    category: "defensive"
  },
  {
    id: 21,
    name: "Photosynthetic Skin",
    benefit: "Don't need to eat while exposed to sunlight",
    drawback: "Vulnerable to necrotic damage",
    category: "physical"
  },
  {
    id: 22,
    name: "Quantum Displacement",
    benefit: "Can teleport 30 feet as a bonus action once per short rest",
    drawback: "Take 1d4 force damage when using this ability",
    category: "offensive"
  },
  {
    id: 23,
    name: "Hive Mind",
    benefit: "Can communicate with insects and arachnids",
    drawback: "Disadvantage on concentration checks when alone",
    category: "mental"
  },
  {
    id: 24,
    name: "Adaptive Immunity",
    benefit: "Advantage on saves against disease and poison",
    drawback: "Healing spells only heal for half value",
    category: "defensive"
  },
  {
    id: 25,
    name: "Phase Shifting",
    benefit: "Can move through solid objects once per day",
    drawback: "Take 2d6 force damage if ending turn inside an object",
    category: "physical"
  },
  {
    id: 26,
    name: "Temporal Echo",
    benefit: "Can see 6 seconds into the future twice per day",
    drawback: "Disadvantage on initiative rolls",
    category: "sensory"
  },
  {
    id: 27,
    name: "Plasma Generation",
    benefit: "Can create a 15-foot line of plasma dealing 3d6 fire damage",
    drawback: "Take 1d6 fire damage when using this ability",
    category: "offensive"
  },
  {
    id: 28,
    name: "Adaptive Musculature",
    benefit: "+2 to Athletics and Acrobatics checks",
    drawback: "Must eat twice as much food",
    category: "physical"
  },
  {
    id: 29,
    name: "Neural Interface",
    benefit: "Can communicate with and control simple machines",
    drawback: "Vulnerable to lightning damage",
    category: "mental"
  },
  {
    id: 30,
    name: "Quantum Carapace",
    benefit: "Once per long rest, can become immune to all damage for one round",
    drawback: "Unconscious for one round afterward",
    category: "defensive"
  },
  {
    id: 31,
    name: "Void Touch",
    benefit: "Touch attack deals 2d8 cold damage",
    drawback: "Cannot benefit from fire-based healing",
    category: "offensive"
  },
  {
    id: 32,
    name: "Psychic Resonance",
    benefit: "Can Detect Thoughts once per long rest",
    drawback: "Others can sense your surface thoughts within 10 feet",
    category: "mental"
  },
  {
    id: 33,
    name: "Molecular Reconstruction",
    benefit: "Can alter appearance at will (as Disguise Self)",
    drawback: "Vulnerable to force damage",
    category: "physical"
  },
  {
    id: 34,
    name: "Time Dilation",
    benefit: "Can take an additional action once per day",
    drawback: "Age 1d4 years when using this ability",
    category: "offensive"
  },
  {
    id: 35,
    name: "Living Metal",
    benefit: "d6 armor to non-magical physical damage",
    drawback: "Cannot swim, sink like metal",
    category: "defensive"
  },
  {
    id: 36,
    name: "Gravity Well",
    benefit: "Can pull creatures within 30 feet 15 feet closer",
    drawback: "Movement speed reduced by 10 feet",
    category: "offensive"
  },
  {
    id: 37,
    name: "Empathic Field",
    benefit: "Can sense emotions within 30 feet",
    drawback: "Take psychic damage when nearby creatures are injured",
    category: "sensory"
  },
  {
    id: 38,
    name: "Reactive Healing",
    benefit: "Heal 1d8 HP when dropping below half health",
    drawback: "Maximum HP reduced by 1 each time this triggers",
    category: "defensive"
  },
  {
    id: 39,
    name: "Quantum Tunneling",
    benefit: "Can pass through walls up to 5 feet thick",
    drawback: "50% chance to take 2d6 force damage when doing so",
    category: "physical"
  },
  {
    id: 40,
    name: "Neural Overclock",
    benefit: "Advantage on Intelligence checks",
    drawback: "Disadvantage on Wisdom saves",
    category: "mental"
  },
  {
    id: 41,
    name: "Entropic Shield",
    benefit: "20% chance to negate any attack",
    drawback: "10% chance to negate beneficial effects",
    category: "defensive"
  },
  {
    id: 42,
    name: "Temporal Anchor",
    benefit: "Cannot be moved against your will",
    drawback: "Speed reduced to 20 feet",
    category: "defensive"
  },
  {
    id: 43,
    name: "Psionic Blast",
    benefit: "15-foot cone psychic attack (3d6 damage) once per day",
    drawback: "Cannot use psychic abilities for 1d4 rounds after use",
    category: "offensive"
  },
  {
    id: 44,
    name: "Adaptive Camouflage",
    benefit: "Hide 1-4 on d6 in natural environments",
    drawback: "Disadvantage on social checks with non-mutants",
    category: "physical"
  },
  {
    id: 45,
    name: "Energy Conversion",
    benefit: "Convert absorbed energy damage to healing",
    drawback: "Vulnerable to the damage type for 1 day after conversion",
    category: "defensive"
  },
  {
    id: 46,
    name: "Quantum Sight",
    benefit: "Can see through solid objects up to 1 foot thick",
    drawback: "Disadvantage on ranged attacks beyond 30 feet",
    category: "sensory"
  },
  {
    id: 47,
    name: "Viral Enhancement",
    benefit: "+2 to all physical ability checks",
    drawback: "-2 (min 1) when healed by normal means",
    category: "physical"
  },
  {
    id: 48,
    name: "Mind Link",
    benefit: "Can establish telepathic communication with one willing creature",
    drawback: "Share damage taken with linked creature",
    category: "mental"
  },
  {
    id: 49,
    name: "Plasma Shield",
    benefit: "Create an energy shield absorbing 15 damage",
    drawback: "Shield explosion deals 1d6 damage to self when broken",
    category: "defensive"
  },
  {
    id: 50,
    name: "Void Walker",
    benefit: "Can breathe in any environment",
    drawback: "Vulnerable to radiant damage",
    category: "physical"
  },
  {
    id: 51,
    name: "Chronometric Core",
    benefit: "+4 bonus to initiative",
    drawback: "Age 1 year for every DEX save failed",
    category: "physical"
  },
  {
    id: 52,
    name: "Bionic Eyes",
    benefit: "Double vision distance, darkvision 60ft",
    drawback: "Disadvantage on saves against bright light and flash effects",
    category: "sensory"
  },
  {
    id: 53,
    name: "Nanite Swarm",
    benefit: "Automatically stabilize at 0 HP",
    drawback: "Cannot wear metal armor or use metal weapons",
    category: "defensive"
  },
  {
    id: 54,
    name: "Psychic Vampire",
    benefit: "d6 psychic damage. Heal self for half the psychic damage dealt to others.",
    drawback: "Take double damage from radiant sources",
    category: "offensive"
  },
  {
    id: 55,
    name: "Quantum Duplication",
    benefit: "Create one duplicate of self for 1-3 turns per long rest",
    drawback: "Split current HP with duplicate",
    category: "offensive"
  },
  {
    id: 56,
    name: "Void Touched",
    benefit: "Resistance to necrotic damage",
    drawback: "Cannot be healed by divine magic",
    category: "defensive"
  },
  {
    id: 57,
    name: "Neural Overwrite",
    benefit: "Can attempt to rewrite one memory per long rest",
    drawback: "Lose one random memory each time used",
    category: "mental"
  },
  {
    id: 58,
    name: "Gravitational Anomaly",
    benefit: "Can jump three times normal distance",
    drawback: "Weight doubles when carrying anything",
    category: "physical"
  },
  {
    id: 59,
    name: "Temporal Ghost",
    benefit: "50% miss chance against first attack each round",
    drawback: "Disadvantage on all saving throws",
    category: "defensive"
  },
  {
    id: 60,
    name: "Plasma Blood",
    benefit: "Melee attackers take 1d6 fire damage",
    drawback: "Cannot be healed by potions",
    category: "offensive"
  },
  {
    id: 61,
    name: "Mind Shatter",
    benefit: "Once per long rest, stun target on successful mental attack",
    drawback: "Vulnerable to psychic damage for 1 hour after use",
    category: "offensive"
  },
  {
    id: 62,
    name: "Adaptive Organs",
    benefit: "Advantage on Constitution saving throws",
    drawback: "Must consume both meat and plant matter each day",
    category: "physical"
  },
  {
    id: 63,
    name: "Energy Siphon",
    benefit: "Absorb energy damage to convert to HP",
    drawback: "-d6 HP when following day after using this ability",
    category: "defensive"
  },
  {
    id: 64,
    name: "Quantum Memory",
    benefit: "Perfect recall of any memory",
    drawback: "Cannot naturally forget traumatic events",
    category: "mental"
  },
  {
    id: 65,
    name: "Void Armor",
    benefit: "Reduce all incoming damage by 2",
    drawback: "Healing effects only work at half efficiency",
    category: "defensive"
  },
  {
    id: 66,
    name: "Bio-Electric Field",
    benefit: "1d8 lightning damage to melee attackers",
    drawback: "Cannot wear metal armor",
    category: "offensive"
  },
  {
    id: 67,
    name: "Temporal Acceleration",
    benefit: "Double movement speed for one turn per day",
    drawback: "Disadvantage on all checks and saves for 3+d3 turns after use",
    category: "physical"
  },
  {
    id: 68,
    name: "Psionic Barrier",
    benefit: "Create force shield blocking 20 damage",
    drawback: "Stunned for one round if shield breaks",
    category: "defensive"
  },
  {
    id: 69,
    name: "Molecular Blade",
    benefit: "Natural weapon deals 1d8 force damage",
    drawback: "Cannot hold normal weapons",
    category: "offensive"
  },
  {
    id: 70,
    name: "Neural Network",
    benefit: "Share senses with allies within 30 feet",
    drawback: "Share pain with networked allies",
    category: "mental"
  },
  {
    id: 71,
    name: "Quantum Resilience",
    benefit: "Resistance to one random damage type each day",
    drawback: "Vulnerability to one random damage type each day",
    category: "defensive"
  },
  {
    id: 72,
    name: "Void Speaker",
    benefit: "Can communicate with recently deceased",
    drawback: "Cannot heal naturally while carrying a corpse's memories",
    category: "mental"
  },
  {
    id: 73,
    name: "Plasma Conversion",
    benefit: "Convert fire damage taken to temporary HP",
    drawback: "Vulnerable to cold damage",
    category: "defensive"
  },
  {
    id: 74,
    name: "Time Lock",
    benefit: "Can freeze one creature in time for 1 round",
    drawback: "Miss next turn after using ability",
    category: "offensive"
  },
  {
    id: 75,
    name: "Living Battery",
    benefit: "Store and release electrical energy",
    drawback: "Attract lightning strikes during storms",
    category: "offensive"
  },
  {
    id: 76,
    name: "Quantum Entanglement",
    benefit: "Can swap positions with willing ally within 60 feet",
    drawback: "Both creatures take 1d4 force damage when swapping",
    category: "physical"
  },
  {
    id: 77,
    name: "Viral Weaponry",
    benefit: "Natural attacks have chance to inflict disease",
    drawback: "Must succeed on CON save when touching others or infect them",
    category: "offensive"
  },
  {
    id: 78,
    name: "Mind Maze",
    benefit: "Create psychic labyrinth trapping target's mind",
    drawback: "Caster is also trapped until target escapes",
    category: "mental"
  },
  {
    id: 79,
    name: "Adaptive Skeleton",
    benefit: "Can compress body to fit through small spaces",
    drawback: "Vulnerable to bludgeoning damage",
    category: "physical"
  },
  {
    id: 80,
    name: "Energy Web",
    benefit: "Create 15ft cube of energy filaments as difficult terrain",
    drawback: "Cannot move while maintaining the web",
    category: "offensive"
  },
  {
    id: 81,
    name: "Temporal Rewind",
    benefit: "Can rewind own actions by 6 seconds once per long rest",
    drawback: "Take 1d6 psychic damage when rewinding",
    category: "defensive"
  },
  {
    id: 82,
    name: "Void Consumption",
    benefit: "Can absorb and store one spell of 3rd level or lower",
    drawback: "Take double damage from the stored spell type",
    category: "defensive"
  },
  {
    id: 83,
    name: "Neural Overload",
    benefit: "Force all creatures within 10ft to make a WIS save or be stunned",
    drawback: "Stunned yourself on a failed save",
    category: "offensive"
  },
  {
    id: 84,
    name: "Plasma Heart",
    benefit: "Immune to extreme temperatures",
    drawback: "Must rest in extreme heat to recover hit dice",
    category: "physical"
  },
  {
    id: 85,
    name: "Quantum Prediction",
    benefit: "Advantage on first attack each combat",
    drawback: "Disadvantage on subsequent attack",
    category: "offensive"
  },
  {
    id: 86,
    name: "Bio-Electric Pulse",
    benefit: "EMP burst disables mechanical devices",
    drawback: "Also disables own tech abilities for 1d4 rounds",
    category: "offensive"
  },
  {
    id: 87,
    name: "Temporal Split",
    benefit: "Create time duplicate that acts immediately",
    drawback: "Take actions from both timelines next round",
    category: "offensive"
  },
  {
    id: 88,
    name: "Void Gateway",
    benefit: "Create portal to shadow realm for escape",
    drawback: "50% chance of attracting hostile entity when used",
    category: "defensive"
  },
  {
    id: 89,
    name: "Molecular Phasing",
    benefit: "Ignore physical damage once per day",
    drawback: "Cannot deal physical damage for 1 turn after use",
    category: "defensive"
  },
  {
    id: 90,
    name: "Psionic Amplification",
    benefit: "Double range of mental abilities",
    drawback: "Mental abilities cost twice as much to use",
    category: "mental"
  },
  {
    id: 91,
    name: "Living Reactor",
    benefit: "Generate force field absorbing 3d6 damage",
    drawback: "Field explosion deals same damage to nearby allies if broken",
    category: "defensive"
  },
  {
    id: 92,
    name: "Quantum Vampire",
    benefit: "Steal one random buff from target",
    drawback: "Also steal one random debuff if present",
    category: "offensive"
  },
  {
    id: 93,
    name: "Hive Integration",
    benefit: "Control 1d4 insect swarms",
    drawback: "Take psychic damage when controlled insects die",
    category: "mental"
  },
  {
    id: 94,
    name: "Temporal Anchor",
    benefit: "Cannot be moved in time unwillingly",
    drawback: "Cannot use time-based abilities or items",
    category: "defensive"
  },
  {
    id: 95,
    name: "Void Reconstruction",
    benefit: "Reform body if killed (once per week)",
    drawback: "Lose d3 points of random ability score",
    category: "defensive"
  },
  {
    id: 96,
    name: "Neural Plague",
    benefit: "Psychic damage spreads to nearby targets",
    drawback: "Must succeed WIS save or spread to allies too",
    category: "offensive"
  },
  {
    id: 97,
    name: "Quantum Shell",
    benefit: "Exist in multiple probabilities, extra action once per turn",
    drawback: "Take actions in all probabilities or take 2d6 force damage",
    category: "defensive"
  },
  {
    id: 98,
    name: "Plasma Storm",
    benefit: "Create 20ft radius storm dealing 3d6 fire damage",
    drawback: "Cannot control who is damaged by the storm",
    category: "offensive"
  },
  {
    id: 99,
    name: "Time Dilation Field",
    benefit: "Slow time in 15ft radius (Advantage to actions)",
    drawback: "Allies in field can only take one action per turn",
    category: "defensive"
  },
  {
    id: 100,
    name: "Omega Mutation",
    benefit: "Roll twice on mutation table and gain both benefits",
    drawback: "Gain both drawbacks as well",
    category: "physical"
  }
];

// Utility functions for mutations
export function getMutationById(id: number): Mutation | undefined {
  return mutations.find(mutation => mutation.id === id);
}

export function getMutationsByCategory(category: Mutation['category']): Mutation[] {
  return mutations.filter(mutation => mutation.category === category);
}

export function getRandomMutation(): Mutation {
  return mutations[Math.floor(Math.random() * mutations.length)];
} 