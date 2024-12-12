import { type Creature } from "@/lib/types";
import { getBasePath } from "@/lib/utils";

export const creatures: Creature[] = [
  {
    id: "mutant-rat",
    name: "Mutant Rat",
    type: "beast",
    image: `${getBasePath()}/images/creatures/mutant-rat.png`,
    description: "A massive, radiation-warped rodent with glowing eyes.",
    stats: {
      hd: 1,
      hp: 6,
      armor: "light",
      str: 12,
      dex: 15,
      con: 12,
      int: 6,
      wis: 10,
      cha: 6
    },
    abilities: [
      "Bite: +1 to hit, 1d4 damage",
      "Radiation Sickness: Constitution DC 12, 1d6 poison damage at start of each turn",
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
    image: `${getBasePath()}/images/creatures/stalkerwip.png`,
    description: "A cunning survivor equipped with makeshift armor and scavenged weapons.",
    stats: {
      hd: 2,
      hp: 12,
      armor: "medium",
      str: 14,
      dex: 16,
      con: 13,
      int: 12,
      wis: 14,
      cha: 10
    },
    abilities: [
      "Scrap Blade: 1d8+1 slashing damage",
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
    image: `${getBasePath()}/images/creatures/bloom.jpg`,
    description: "A massive, mutated flower that releases poisonous spores.",
    stats: {
      hd: 3,
      hp: 15,
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
    image: `${getBasePath()}/images/creatures/scrap.png`,
    description: "An autonomous construct built from salvaged machinery and ancient tech.",
    stats: {
      hd: 4,
      hp: 18,
      armor: "medium",
      str: 18,
      dex: 8,
      con: 18,
      int: 7,
      wis: 10,
      cha: 5
    },
    abilities: [
      "Slam: +3 to hit, 2d6+3 bludgeoning damage",
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
    image: `${getBasePath()}/images/creatures/raiderwip.png`,
    description: "A psychically awakened bandit who uses mental powers to terrorize survivors.",
    stats: {
      hd: 4,
      hp: 18,
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
    id: "rad-zombie",
    name: "Rad-Zombie",
    type: "humanoid",
    image: `${getBasePath()}/images/creatures/rad-zombie.jpg`,
    description: "A radioactive-mutated humanoid with a craving for flesh.",
    stats: {
      hd: 1,
      hp: 6,
      armor: "none",
      str: 11,
      dex: 9,
      con: 12,
      int: 3,
      wis: 6,
      cha: 5
    },
    abilities: [
      "Radiation Resistance",
      "Radiation Sickness: Constitution DC 12, 1d6 poison damage at start of each turn"
    ],
    loot: [
      "None"
    ]
  },
  {
    id: "rust-beetle",
    name: "Rust Beetle",
    type: "beast",
    image: `${getBasePath()}/images/creatures/rustbeetle.png`,
    description: "A large insectoid that secretes corrosive chemicals that rapidly decay metal.",
    stats: {
      hd: 4,
      hp: 18,
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
  },
  {
    id: "armon-zhul",
    name: "Armon Zhul - WIZARD",
    type: "npc",
    image: `${getBasePath()}/images/creatures/armon-zhul.png`,
    description: "A radioactive-mutated humanoid using found tech to dominate his surroundings",
    stats: {
      hd: 6,
      hp: 30,
      armor: "light",
      str: 14,
      dex: 11,
      con: 12,
      int: 16,
      wis: 12,
      cha: 9
    },
    abilities: [
      "Radiation Resistance",
      "Radiation Sickness: Constitution DC 12, 1d6 poison damage at start of each turn"
    ],
    loot: [
      "tbd"
    ]
  },
  {
    id: "zhul-raider",
    name: "Zhul Raider",
    type: "humanoid",
    image: `${getBasePath()}/images/creatures/zhul-raider.png`,
    description: "Masked raiders serving Armon Zhul",
    stats: {
      hd: 1,
      hp: 6,
      armor: "light",
      str: 12,
      dex: 11,
      con: 12,
      int: 9,
      wis: 12,
      cha: 9
    },
    abilities: [
      "Radiation Resistance",
    ],
    loot: [
      "tbd"
    ]
  },
  {
    id: "zhul-elite",
    name: "Zhul Elite",
    type: "humanoid",
    image: `${getBasePath()}/images/creatures/zhul-elites.png`,
    description: "Rad-rod infused raiders serving Armon Zhul",
    stats: {
      hd: 3,
      hp: 17,
      armor: "light",
      str: 14,
      dex: 11,
      con: 14,
      int: 11,
      wis: 12,
      cha: 10
    },
    abilities: [
      "Radiation Resistance",
      "Radiation Sickness: Constitution DC 12, 1d6 poison damage at start of each turn"
    ],
    loot: [
      "tbd"
    ]
  },
  {
    id: "titan-lord",
    name: "Titan Lord - WIZARD",
    type: "npc",
    image: `${getBasePath()}/images/creatures/titan-lord.png`,
    description: "Discovered the Titan Graveyard and terrorizes the wasteland flying in his titan skull",
    stats: {
      hd: 8,
      hp: 41,
      armor: "medium",
      str: 18,
      dex: 12,
      con: 18,
      int: 14,
      wis: 14,
      cha: 16
    },
    abilities: [
      "Various titan artifacts"
    ],
    loot: [
      "tbd"
    ]
  },
  {
    id: "chaos-lich",
    name: "Chaos Lich - WIZARD",
    type: "npc",
    image: `${getBasePath()}/images/creatures/lich-dude.png`,
    description: "Created his phylactery by tapping into the chaos realm and using the ichor of chaos krill, beings that feed on untapped chaotic energy",
    stats: {
      hd: 7,
      hp: 31,
      armor: "none",
      str: 11,
      dex: 14,
      con: 16,
      int: 18,
      wis: 17,
      cha: 16
    },
    abilities: [
      "Spellcasting: Can cast any spell that he has prepared"
    ],
    loot: [
      "tbd"
    ]
  },
]; 