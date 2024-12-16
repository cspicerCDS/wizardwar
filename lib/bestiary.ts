import { type Creature } from "@/lib/types";
import { getBasePath } from "@/lib/utils";

export const creatures: Creature[] = [
  {
    id: "mutant-rat",
    name: "Mutant Rat",
    type: "beast",
    size: "small",
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
    ],
    lairs: [
      "Abandoned Sewer Tunnel: A filthy and dark tunnel system beneath the city, filled with stagnant water and glowing fungi. The Mutant Rat thrives in the damp, irradiated environment, hiding in the shadows and emerging to attack intruders.",
      "Radiated Waste Pile: A mound of irradiated trash and scrap in the wasteland, surrounded by dangerous debris and the scent of decay. The Mutant Rat uses the pile as a nesting ground, feeding on whatever it can find amidst the radiation.",
      "Collapsed Subway Station: A long-forgotten subway station, now a breeding ground for mutated creatures. The Mutant Rat nests in the dark recesses, using the tunnels to stalk and ambush any who enter the area.",
      "Ruined Laboratory: A decaying research facility where radiation leaks and experimentation left the environment toxic. The Mutant Rat roams the derelict halls, mutated from exposure to the same toxic radiation that warped the building."
    ],
    encounters: [
      "Glow in the Dark: The party is exploring a dark, underground tunnel when they are ambushed by the glowing eyes of the Mutant Rat. It lunges from the darkness, biting and spreading radiation sickness as the players try to fend it off.",
      "Toxic Pursuit: While scavenging near a radiated pile of scrap, the players unknowingly disturb the Mutant Rat’s nest. The creature pursues them aggressively, using its darkvision to stalk the players through the toxic environment, striking from the shadows.",
      "Nest Defense: The party stumbles upon a Mutant Rat's nest in an abandoned underground lab, only to have the creature defend its home. As the Rat attacks, its radioactive presence poisons the air, forcing the players to find cover or risk taking damage.",
      "Radiation Spill: While navigating an old subway station, the players encounter a spill of dangerous radiation, which the Mutant Rat thrives in. The creature launches an ambush, forcing the players to deal with both the creature and the harmful radiation in the area."
    ]
  },
  {
    id: "wasteland-stalker",
    name: "Wasteland Stalker",
    type: "humanoid",
    size: "medium",
    image: `${getBasePath()}/images/creatures/wasteland-stalker.png`,
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
    ],
    lairs: [
      "Abandoned Highway Outpost: A makeshift camp along a forgotten stretch of highway, littered with scrap metal and old vehicles. The Wasteland Stalker uses wreckage for cover and hides among the abandoned vehicles.",
      "Ruined Settlement: A collapsed town with dilapidated buildings and broken infrastructure. The Stalker uses the wreckage to ambush anyone who ventures too close, always ready to scavenge from the ruins.",
      "Underground Bunker: A hidden bunker buried beneath the earth, its entrance protected by traps and debris. Inside, the Stalker has made a home of salvaged tech and old military supplies, always watching for intruders.",
      "Old Factory Yard: A desolate industrial site, surrounded by crumbling machinery and rusting metal structures. The Stalker uses the factory's crumbling infrastructure for makeshift shelter and to craft weapons from the scraps."
    ],
    encounters: [
      "Ambush on the Road: As the players travel through a barren stretch of highway, the Wasteland Stalker uses the wreckage of old vehicles to launch a surprise attack, leaping from the shadows to strike with a Scrap Blade.",
      "Scavenger's Trade: The party comes across the Wasteland Stalker rummaging through an abandoned settlement. The Stalker may offer to trade items if approached carefully, but any attempt to steal from them could quickly turn into a dangerous standoff.",
      "Trap Encounter: While investigating a ruined building, the party unknowingly triggers one of the Stalker's traps, designed to incapacitate or isolate intruders. The Stalker appears to confront the players, wielding their Scrap Blade.",
      "Raid on a Tech Cache: The party stumbles upon a cache of valuable tech in the wasteland, only to find the Wasteland Stalker guarding it. A tense encounter unfolds as the Stalker defends their spoils, using the environment to their advantage."
    ]
  },
  {
    id: "toxic-bloom",
    name: "Toxic Bloom",
    type: "monster",
    size: "large",
    image: `${getBasePath()}/images/creatures/toxic-bloom.png`,
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
    ],
    encounters: [
      "As the party makes their way through a jungle at dusk, the Toxic Bloom releases a cloud of spores in a sudden ambush, forcing the players to make quick decisions about whether to fight or flee while battling the effects of poison.",
      "In a forgotten ruin, the party unknowingly disturbs the Toxic Bloom’s root network, which triggers an attack. The roots lash out, entangling players and forcing them into close quarters with the plant as it unleashes toxic spores.",
      "A dense forest clearing becomes a trap as the Toxic Bloom hides among other plants. Players must differentiate between regular foliage and the deadly flower, risking a poisoned attack if they misstep, while dealing with aggressive mutated wildlife.",
      "In a dark cavern or underground bunker, the players face the Toxic Bloom, its regeneration fueled by a shaft of light. The party must act quickly, either by closing off the sunlight source or eliminating the plant before it can regenerate enough to overwhelm them."
    ],
    lairs: [
      "The Toxic Bloom resides in a large, decaying jungle clearing where the ground is slick with poisonous spores, and overgrown vines block the path. Sunlight filters through the canopy, allowing the Toxic Bloom to regenerate, but players will have to navigate dense plant life filled with smaller, venomous creatures.",
      "Nestled deep within a cave system, the Toxic Bloom grows from the roots of an ancient tree that has burrowed into the stone. The lair is dark and damp, with toxic spores filling the air, and roots twist throughout the cavern, causing difficult terrain and sudden attacks if disturbed.",
      "The Toxic Bloom has claimed an abandoned temple, its roots entwining around cracked statues and overgrown altars. The temple’s once sacred site now reeks of decay and poison, with the floor covered in toxic blooms that trigger spore bursts when disturbed.",
      "In the heart of a foggy swamp, the Toxic Bloom thrives in a patch of sunlight, surrounded by murky waters. Poisonous plants and thick, humid air create an oppressive atmosphere, and the area is teeming with wildlife mutated by the spores."
    ]
  },
  {
    id: "scrap-golem",
    name: "Scrap Golem",
    type: "monster",
    size: "large",
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
    ],
    encounters: [
      "In an abandoned research facility, the party accidentally activates the Scrap Golem by triggering a long-dormant security system. The Golem lumbers to life, using its slam attacks and electromagnetic pulse to disable any technological devices the party might rely on.",
      "The players enter a destroyed lab where a group of survivors is trapped by the Scrap Golem, which is relentlessly patrolling the area. The party must navigate the ruined environment while dealing with the Golem’s devastating slams and finding a way to disable it.",
      "While investigating an old scrapyard, the players encounter a Scrap Golem amid a violent electrical storm. The Golem’s electromagnetic pulse becomes even more dangerous, triggering nearby electrical hazards and threatening to fry any tech the players carry.",
      "The party has tracked a valuable piece of ancient technology to a ruined military outpost, but the Scrap Golem stands in their way. They’ll need to figure out how to bypass the Golem’s damage resistance and disable it without getting caught in a direct confrontation."
    ],
    lairs: [
      "The Scrap Golem roams the ruins of a long-forgotten factory, surrounded by heaps of scrap metal and abandoned assembly lines. The floor is littered with broken machinery, and the air crackles with the residual energy from old power generators, occasionally sparking.",
      "Hidden beneath a decayed city, the Scrap Golem guards a high-tech vault filled with ancient machines and salvaged relics. The lair is filled with dormant tech, and the walls hum with energy, occasionally sparking to life as the Golem’s presence interferes with the environment.",
      "Once a place of innovation, this old workshop is now a graveyard of old tools, half-finished inventions, and parts from destroyed automatons. The Scrap Golem uses these remnants to repair itself, and the area is filled with dangerous, unstable energy sources.",
      "A small military outpost, long abandoned and overtaken by rust and disrepair. The Scrap Golem stands sentinel, guarding what remains of once-advanced tech, now deteriorating. Electronics around the outpost flicker, and the air is heavy with the hum of latent energy."
    ]
  },
  {
    id: "psi-raider",
    name: "Psi-Raider",
    type: "humanoid",
    size: "medium",
    image: `${getBasePath()}/images/creatures/raiderwip.png`,
    description: "A psychically awakened bandit who uses mental powers to terrorize survivors.",
    stats: {
      hd: 4,
      hp: 18,
      armor: "none",
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
    ],
    lairs: [
      "Abandoned Watchtower: A ruined tower high above the wasteland, its walls covered in strange psychic symbols. The Psi-Raider uses the vantage point to dominate the minds of those below and control the surrounding area, watching for intruders.",
      "Underground Bunker: A hidden base deep underground, filled with makeshift psychic amplifiers and research equipment. The Psi-Raider uses the dark, claustrophobic space to trap and manipulate victims, employing psychic defenses to ward off attackers.",
      "Ruined Research Lab: An old research facility where experiments on psychic enhancement went wrong. The Psi-Raider has turned the lab into a stronghold, using the remnants of psychic technology to increase their mental powers and control weaker minds.",
      "Deserted Town Hall: An eerie, empty town hall overtaken by psychic energy. The Psi-Raider has set up a base here, using the mind-altering ambiance to manipulate survivors who come near, pushing them to act as unwitting pawns."
    ],
    encounters: [
      "Ambush in the Ruins: The players stumble into an ambush in a crumbling city, as the Psi-Raider uses their Mind Blast to catch them off-guard. The Raider forces players into a corner, using their telekinetic shield to defend against ranged attacks while picking them off one by one.",
      "Psychic Standoff: The Psi-Raider challenges the party to a mental duel. They attempt to use Mental Domination to turn players against each other, all while using Mind Blast to disorient and deal psychic damage. Players must overcome the Raider’s mental influence to stop the battle.",
      "Possession of the Strong: The Psi-Raider uses their Mental Domination ability to take control of one of the party members, forcing the others to fight against their ally or risk being overwhelmed. The party must break the charm before the dominated player can cause too much harm.",
      "High Ground Showdown: On a ruined skyscraper, the Psi-Raider uses their telekinetic shield and psychic powers to try and force the players off the high ground. The party must close the gap and fight at a distance, as the Raider uses the environment and their mind powers to disorient them."
    ]
  },
  {
    id: "rad-zombie",
    name: "Rad-Zombie",
    type: "humanoid",
    size: "medium",
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
    ],
    lairs: [
      "Radioactive Wasteland: A barren stretch of irradiated wasteland, where twisted, mutated creatures roam. The Rad-Zombie blends into the decaying landscape, lurking in the radiation-rich environment, searching for prey.",
      "Abandoned Nuclear Power Plant: The remnants of a once-thriving power plant, now overrun with radiation and the undead. The Rad-Zombie shuffles through the decayed machinery and hazardous zones, its radiation-scorched skin blending with the radioactive ruins.",
      "Ruined City Block: A destroyed part of the city, still heavily contaminated with radiation. The Rad-Zombie wanders the streets, feeding on anything it finds, with toxic air and dangerous radiation levels preventing safe travel.",
      "Fallout Shelter: A makeshift shelter deep underground, once designed for protection from radiation, now overrun with the mutated and hungry. The Rad-Zombie shuffles between the bunkers and irradiated zones, scavenging for flesh in a toxic, sealed environment."
    ],
    encounters: [
      "Radiation Ambush: As the party traverses an irradiated wasteland, the Rad-Zombie stumbles out from a pile of debris, its hunger for flesh overwhelming its caution. The party faces both the zombie and the threat of ongoing radiation sickness from the toxic environment.",
      "Shelter Breach: The party enters an abandoned fallout shelter in search of supplies, but the Rad-Zombie has already taken up residence. As the players explore, the Rad-Zombie attacks, spreading radiation sickness as it claws at their flesh.",
      "Contaminated Streets: While traveling through a ruined, radiation-soaked city, the party is stalked by a Rad-Zombie lurking in the shadows. Its slow but steady approach forces the players to either engage or flee, all while fighting the dangerous radiation around them.",
      "Nuclear Remnants: The party explores the ruins of an old nuclear power plant, unaware that the Rad-Zombie is lurking nearby. They must navigate through radiated corridors while fighting off the zombie, whose very presence exacerbates the radiation sickness in the air."
    ]
  },
  {
    id: "rust-beetle",
    name: "Rust Beetle",
    type: "beast",
    size: "medium",
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
    ],
    lairs: [
      "Rusting Scrap Yard: A vast junkyard filled with decaying vehicles, broken machinery, and piles of rusting scrap metal. The Rust Beetle hides among the heaps of metal, using its corrosive abilities to break down anything of value left behind.",
      "Abandoned Forge: An old, forgotten forge where rust has eaten away at tools and equipment. The Rust Beetle nestles among the ruined metalworks, feeding on the remnants of tools and weapons, guarding its territory with a keen sense of metal.",
      "Corroded Mineshaft: A decrepit mineshaft where the air is thick with dust and the stench of decay. Rusted mine carts and metal supports litter the area, making it an ideal lair for the Rust Beetle to thrive while corroding any exposed metal.",
      "Forgotten Industrial Complex: A once-bustling factory now abandoned and filled with decaying machines. The Rust Beetle scuttles through the labyrinth of corridors and workstations, using its corrosive touch to break down anything that might still be useful."
    ],
    encounters: [
      "Junkyard Clash: As the party explores a desolate scrap yard, the Rust Beetle emerges from a pile of rusted metal, attacking with its powerful bite and corrosive touch. The party must fight the beetle while avoiding the damage it causes to their gear.",
      "Forge Defense: The party enters an abandoned forge, only to find it infested with Rust Beetles. These creatures use their Metal Sense to target the party’s weapons and armor, corroding them on contact, while the beetles attack with their poisonous bite.",
      "Mining Disaster: While navigating through an old mineshaft, the players disturb a nest of Rust Beetles. As the creatures swarm, their corrosive abilities start to damage metal tools and weapons, forcing the party to either defend or retreat from the collapsing environment.",
      "Industrial Ambush: As the party explores an abandoned factory, they unknowingly trigger a trap set by the Rust Beetles. The creatures begin to attack in swarms, using their corrosive touch to damage the party’s armor and weapons, making a fight in the factory dangerous and costly."
    ]
  },
  {
    id: "ammon-zhul",
    name: "Ammon Zhul - WIZARD",
    type: "npc",
    size: "medium",
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
    size: "medium",
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
    size: "medium",
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
    size: "medium",
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
    size: "medium",
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
  {
    id: "fomorion",
    name: "Fomorion",
    type: "monster",
    size: "large",
    image: `${getBasePath()}/images/creatures/fomorion.png`,
    description: "Giant humanoid with a insect like head",
    stats: {
      hd: 4,
      hp: 22,
      armor: "medium",
      str: 17,
      dex: 14,
      con: 16,
      int: 8,
      wis: 7,
      cha: 7,
    },
    abilities: [
      "2 Bash attacks: 1d8+2 bludgeoning damage",
      "If both attacks are successful: auto-hit Bite d6+2 piercing damage",
    ],
    loot: [
      "A jagged obsidian blade covered in dried ichor, surprisingly sharp and worth 25 gold pieces.",
      "A pouch of oddly glowing insect carapace shards that can be used as crafting materials for alchemical items.",
      "An ancient copper circlet etched with strange, insectoid runes, faintly magical and possibly cursed.",
    ]
    ,
    lairs: [
      "A crumbling stone tower overgrown with ivy and moss, littered with the bones of large animals and half-buried broken weapons.",
      "A cavernous pit in a forest clearing, strewn with insect shells, tangled roots, and the treasure of those it has devoured.",
      "A desolate canyon riddled with crevices, where the Fomorion nests among shimmering, sticky resin that traps prey.",
      "An abandoned quarry, its central pit now filled with rainwater and surrounded by the scattered remnants of ancient machinery."
    ],
    encounters: [
      "A Fomorion lurks in a ruined bridge, attacking travelers who try to cross while scavenging metal and wood for unknown purposes.",
      "The creature emerges from a misty swamp, drawn by the noise of a nearby encampment and attacks under cover of fog.",
      "A wounded Fomorion rampages through a forest, swatting at imagined threats after being stung by giant hornets.",
      "Villagers offer up livestock as sacrifices to a Fomorion prowling near their farmland, pleading with adventurers to slay it."
    ]

  },
  {
    id: "chaos-mouther",
    name: "Chaos Mouther",
    type: "demonic",
    size: "large",
    image: `${getBasePath()}/images/creatures/chaos-mouther.png`,
    description: "Escapee from the chaos realm as a result of black magic",
    stats: {
      hd: 6,
      hp: 28,
      armor: "heavy",
      str: 16,
      dex: 14,
      con: 16,
      int: 14,
      wis: 14,
      cha: 14,
    },
    abilities: [
      "Fear: 20ft radius, 12DC Wisdom save or be frightened",
      "Chaotic Aura: 10ft radius, 1d6 psychic damage to all creatures in the area",
      "Insubstantial: Immune to non-magical weapons",
      "Incorporeal Movement: Can move through solid objects",
      "1d8 Mouth attacks: +4 to hit, 1d6 piercing damage",
    ],
    loot: [
      "tbd"
    ],
    lairs: [
      "Warped Cavern: A twisted, crumbling cave where reality seems unstable, with walls flickering between solid and ethereal, and the constant hum of psychic energy.",
      "Chaotic Nexus: A ruptured section of the material plane where the boundaries between worlds are thin, leaking chaotic energy that twists and warps everything within it.",
      "Abyssal Ruins: An ancient, decaying temple to a forgotten demonic power, now home to the Chaos Mouther, whose presence distorts time and space.",
      "Flesh-Infested Wasteland: A ruined battlefield littered with the rotting corpses of previous victims, the Mouther's chaotic aura causing them to mutate and warp into monstrous forms."
    ],
    encounters: [
      "Solo Ambush: A Chaos Mouther emerges from a tear in reality in a desolate location, its aura distorting the air around it.",
      "Cultist Summoning: The creature is accompanied by a group of fanatical cultists who are attempting to control its chaotic power, each contributing to its abilities.",
      "Rogue Elementals: The Chaos Mouther is found in the company of wild, rogue elemental spirits that it commands or is drawn to due to its unstable nature.",
      "Corrupted Travelers: A group of cursed adventurers has been possessed by the Mouther's chaotic influence, and they now fight with its abilities against anyone who comes near."
    ]
  },
]; 