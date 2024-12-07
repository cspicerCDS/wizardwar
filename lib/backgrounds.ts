export interface Background {
  id: string;
  name: string;
  species: string[];
  classes: string[];
  description: string;
  proficiencies: string[];
  equipment: string[];
}

const backgrounds: Background[] = [
  // Pure-Strain Human Backgrounds
  {
    id: 'vault-dweller',
    name: 'Vault Dweller',
    species: ['pure-strain'],
    classes: ['tech-adept', 'scavenger'],
    description: 'You grew up in a sealed vault, protected from the wasteland. Your knowledge of pre-war technology is extensive, but the outside world is strange and new.',
    proficiencies: ['Ancient Technology', 'Vault Protocol'],
    equipment: ['Vault Jumpsuit', 'Pip-device', 'Water Purification Tablets']
  },
  {
    id: 'tribal-elder',
    name: 'Tribal Elder',
    species: ['pure-strain'],
    classes: ['mystic'],
    description: 'You were a respected leader in your tribe, keeping the old ways alive through oral tradition and ritual.',
    proficiencies: ['Leadership', 'Ancient Lore'],
    equipment: ['Tribal Staff', 'Ceremonial Robes', 'Healing Herbs']
  },
  {
    id: 'scavenger-merchant',
    name: 'Scavenger Merchant',
    species: ['pure-strain'],
    classes: ['scavenger', 'tech-adept'],
    description: 'You made your living trading salvaged technology between settlements, learning the safest routes and best hiding spots.',
    proficiencies: ['Bartering', 'Tech Identification'],
    equipment: ['Trade Ledger', 'Salvaged Tools', 'Hidden Compartment Pack']
  },
  {
    id: 'settlement-guard',
    name: 'Settlement Guard',
    species: ['pure-strain'],
    classes: ['warrior', 'scavenger'],
    description: 'You protected one of the last bastions of civilization from raiders and mutants.',
    proficiencies: ['Perimeter Defense', 'Threat Assessment'],
    equipment: ['Guard Badge', 'Patrol Map', 'Signal Whistle']
  },

  // Mutant Backgrounds
  {
    id: 'lab-escapee',
    name: 'Lab Escapee',
    species: ['mutant'],
    classes: ['warrior', 'mystic'],
    description: 'You escaped from a facility where experiments were conducted on you, giving you both trauma and unique insights.',
    proficiencies: ['Laboratory Knowledge', 'Survival'],
    equipment: ['Lab Coat', 'Experimental Serum', 'Broken Restraints']
  },
  {
    id: 'wasteland-nomad',
    name: 'Wasteland Nomad',
    species: ['mutant'],
    classes: ['scavenger', 'warrior'],
    description: 'You wandered the wastes, learning to survive while dealing with your mutations.',
    proficiencies: ['Navigation', 'Scavenging'],
    equipment: ['Weathered Map', 'Radiation Detector', 'Scavenged Tools']
  },
  {
    id: 'mutation-prophet',
    name: 'Mutation Prophet',
    species: ['mutant'],
    classes: ['mystic'],
    description: 'Your mutations gave you visions of possible futures, making you both revered and feared.',
    proficiencies: ['Prophecy', 'Mutation Lore'],
    equipment: ['Prophet\'s Robes', 'Vision Journal', 'Mutation Stabilizer']
  },
  {
    id: 'tech-scavenger',
    name: 'Tech Scavenger',
    species: ['mutant'],
    classes: ['tech-adept', 'scavenger'],
    description: 'Your mutations helped you survive radiation zones while salvaging valuable technology.',
    proficiencies: ['Radiation Resistance', 'Tech Salvage'],
    equipment: ['Rad-Suit', 'Salvage Tools', 'Geiger Counter']
  },

  // Hybrid Backgrounds
  {
    id: 'pack-alpha',
    name: 'Pack Alpha',
    species: ['hybrid'],
    classes: ['warrior', 'scavenger'],
    description: 'You led a pack of fellow hybrids, establishing territory in the dangerous wastes.',
    proficiencies: ['Pack Tactics', 'Territory Control'],
    equipment: ['Pack Marker', 'Alpha Token', 'Territory Map']
  },
  {
    id: 'tech-hunter',
    name: 'Tech Hunter',
    species: ['hybrid'],
    classes: ['tech-adept', 'warrior'],
    description: 'Your enhanced senses made you exceptional at tracking down and recovering lost technology.',
    proficiencies: ['Tech Tracking', 'Combat Engineering'],
    equipment: ['Enhanced Goggles', 'Tech Tracker', 'Weapon Repair Kit']
  },
  {
    id: 'hybrid-shaman',
    name: 'Hybrid Shaman',
    species: ['hybrid'],
    classes: ['mystic'],
    description: 'You learned to channel both your animal and human nature into powerful rituals.',
    proficiencies: ['Beast Speech', 'Nature Rituals'],
    equipment: ['Ritual Fetishes', 'Beast Charm', 'Medicinal Herbs']
  },

  // Psychant Backgrounds
  {
    id: 'hive-scholar',
    name: 'Hive Scholar',
    species: ['psychant'],
    classes: ['mystic', 'tech-adept'],
    description: 'You were responsible for preserving knowledge within your hive\'s collective consciousness.',
    proficiencies: ['Collective Memory', 'Information Analysis'],
    equipment: ['Memory Crystal', 'Hive Codex', 'Psychic Focus']
  },
  {
    id: 'scout-drone',
    name: 'Scout Drone',
    species: ['psychant'],
    classes: ['scavenger', 'warrior'],
    description: 'You served as an explorer for your hive, mapping dangerous territories.',
    proficiencies: ['Reconnaissance', 'Hive Communication'],
    equipment: ['Signal Enhancer', 'Mapping Tools', 'Emergency Beacon']
  },
  {
    id: 'tech-coordinator',
    name: 'Tech Coordinator',
    species: ['psychant'],
    classes: ['tech-adept', 'scavenger'],
    description: 'You coordinated the hive\'s technological operations through the collective consciousness.',
    proficiencies: ['Tech Integration', 'Hive Optimization'],
    equipment: ['Neural Interface', 'Tech Schematics', 'Coordination Matrix']
  },

  // Zombo Backgrounds
  {
    id: 'remembered-one',
    name: 'Remembered One',
    species: ['zombo'],
    classes: ['mystic'],
    description: 'Unlike most zombos, you retain clear memories of your past life, giving you unique insights.',
    proficiencies: ['Past Life Knowledge', 'Memory Retention'],
    equipment: ['Memory Trinket', 'Old World Map', 'Personal Journal']
  },
  {
    id: 'reanimated-soldier',
    name: 'Reanimated Soldier',
    species: ['zombo'],
    classes: ['warrior', 'scavenger'],
    description: 'Your military training survived your transformation, making you a disciplined fighter.',
    proficiencies: ['Military Training', 'Combat Tactics'],
    equipment: ['Military Tags', 'Worn Combat Manual', 'Medal of Service']
  },
  {
    id: 'tech-revenant',
    name: 'Tech Revenant',
    species: ['zombo'],
    classes: ['tech-adept', 'warrior'],
    description: 'Your technical expertise persisted through death, making you a valuable asset.',
    proficiencies: ['Ancient Tech', 'Mechanical Intuition'],
    equipment: ['Tech Manual', 'Repair Kit', 'Diagnostic Tools']
  }
];

export const getBackgroundsBySpeciesAndClass = (species: string, characterClass: string): Background[] => {
  return backgrounds.filter(bg => 
    bg.species.includes(species) && 
    bg.classes.includes(characterClass)
  );
};

export const getBackgroundById = (id: string): Background | undefined => {
  return backgrounds.find(bg => bg.id === id);
}; 