import { type Creature } from "@/lib/types";
import { getBasePath } from "@/lib/utils";

export const creatures: Creature[] = [
  {
    id: "mutant-rat",
    name: "Mutant Rat",
    type: "beast",
    image: `${getBasePath()}/images/creatures/mutant-rat.jpg`,
    description: "A massive, radiation-warped rodent with glowing eyes.",
    stats: {
      hp: 12,
      armor: "light",
      str: 12,
      dex: 15,
      con: 12,
      int: 6,
      wis: 10,
      cha: 6
    },
    abilities: [
      "Bite: +4 to hit, 1d6+2 damage",
      "Radiation Resistance",
      "Darkvision 60ft"
    ],
    loot: [
      "Mutant Rat Hide",
      "Glowing Teeth"
    ]
  },
  {
    id: "wasteland-stalker",
    name: "Wasteland Stalker",
    type: "humanoid",
    description: "A cunning survivor equipped with makeshift armor and scavenged weapons.",
    stats: {
      hp: 24,
      armor: "medium",
      str: 14,
      dex: 16,
      con: 13,
      int: 12,
      wis: 14,
      cha: 10
    },
    abilities: [
      "Multiattack: Two attacks with scrap blade",
      "Scrap Blade: +5 to hit, 1d6+3 slashing damage",
      "Scavenger's Eye: Advantage on Investigation checks to find valuable items"
    ],
    loot: [
      "Scrap Blade",
      "Makeshift Armor",
      "Salvaged Tech Parts"
    ]
  },
  {
    id: "toxic-bloom",
    name: "Toxic Bloom",
    type: "monster",
    description: "A massive, mutated flower that releases poisonous spores.",
    stats: {
      hp: 45,
      armor: "light",
      str: 10,
      dex: 8,
      con: 16,
      int: 3,
      wis: 10,
      cha: 3
    },
    abilities: [
      "Toxic Spores: 15ft radius, DC 14 Constitution save or 2d6 poison damage",
      "Root Network: Can sense movement within 30ft",
      "Regeneration: Regains 5 HP at start of its turn if in sunlight"
    ],
    loot: [
      "Toxic Pollen",
      "Mutant Plant Fiber",
      "Bioluminescent Sap"
    ]
  },
  {
    id: "scrap-golem",
    name: "Scrap Golem",
    type: "monster",
    description: "An autonomous construct built from salvaged machinery and ancient tech.",
    stats: {
      hp: 76,
      armor: "medium",
      str: 18,
      dex: 8,
      con: 18,
      int: 7,
      wis: 10,
      cha: 5
    },
    abilities: [
      "Slam: +6 to hit, 2d8+4 bludgeoning damage",
      "Electromagnetic Pulse: Once per day, disables electronic devices in 20ft radius",
      "Damage Resistance: Half damage from non-energy weapons"
    ],
    loot: [
      "Advanced Circuit Board",
      "Power Core",
      "Reinforced Plating"
    ]
  },
  {
    id: "psi-raider",
    name: "Psi-Raider",
    type: "humanoid",
    description: "A psychically awakened bandit who uses mental powers to terrorize survivors.",
    stats: {
      hp: 32,
      armor: "medium",
      str: 11,
      dex: 14,
      con: 12,
      int: 16,
      wis: 15,
      cha: 14
    },
    abilities: [
      "Mind Blast: 30ft cone, DC 14 Intelligence save or 3d6 psychic damage",
      "Telekinetic Shield: +2 AC against ranged attacks",
      "Mental Domination: DC 14 Wisdom save or charmed for 1 minute"
    ],
    loot: [
      "Psi-Enhancer",
      "Neural Interface",
      "Mind Crystal"
    ]
  },
  {
    id: "rust-beetle",
    name: "Rust Beetle",
    type: "beast",
    image: `${getBasePath()}/images/creatures/rust-monster.webp`,
    description: "A large insectoid that secretes corrosive chemicals that rapidly decay metal.",
    stats: {
      hp: 28,
      armor: "light",
      str: 14,
      dex: 15,
      con: 14,
      int: 4,
      wis: 12,
      cha: 4
    },
    abilities: [
      "Bite: +4 to hit, 1d8+2 piercing damage",
      "Corrosive Touch: Metal objects take 2d6 acid damage on contact",
      "Metal Sense: Can detect metal objects within 60ft"
    ],
    loot: [
      "Corrosive Gland",
      "Metallic Carapace",
      "Sensor Antennae"
    ]
  }
]; 