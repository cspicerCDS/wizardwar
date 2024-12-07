export interface MentalAbility {
  id: number;
  name: string;
  description: string;
  benefit: string;
  drawback?: string;
  category: 'telepathic' | 'precognitive' | 'kinetic' | 'empathic' | 'projective';
}

export const mentalAbilities: MentalAbility[] = [
  {
    id: 1,
    name: "Telepathy",
    description: "Direct reading of thoughts and emotions of others",
    benefit: "Can communicate telepathically and read surface thoughts within 30 feet",
    drawback: "Must succeed on a Wisdom save or be overwhelmed by others' thoughts in crowds",
    category: "telepathic"
  },
  {
    id: 2,
    name: "Clairvoyance",
    description: "Seeing visions of past, present, or future events",
    benefit: "Can use an action to see and hear a location within 1 mile for 10 minutes",
    drawback: "Vulnerable to psychic damage while viewing",
    category: "precognitive"
  },
  {
    id: 3,
    name: "Precognition",
    description: "Having premonitions or glimpses of future events",
    benefit: "Once per long rest, can reroll one failed save or attack roll",
    drawback: "Occasionally experiences disorienting visions at GM's discretion",
    category: "precognitive"
  },
  {
    id: 4,
    name: "Telekinesis",
    description: "Moving objects with the mind",
    benefit: "Can move objects up to 20 pounds within 30 feet as a bonus action",
    drawback: "Concentration check required when taking damage while maintaining telekinesis",
    category: "kinetic"
  },
  {
    id: 5,
    name: "Astral Projection",
    description: "Projecting consciousness outside the physical body",
    benefit: "Can project consciousness up to 100 feet while body remains unconscious",
    drawback: "Physical body is vulnerable while projecting",
    category: "projective"
  },
  {
    id: 6,
    name: "Mind Control",
    description: "Influencing or manipulating thoughts and actions of others",
    benefit: "Can attempt to charm one humanoid (DC 15 Wisdom save to resist)",
    drawback: "Target becomes hostile when effect ends and knows it was manipulated",
    category: "telepathic"
  },
  {
    id: 7,
    name: "Psychometry",
    description: "Gaining information by touching objects",
    benefit: "Can learn the recent history of an object by touching it for 1 minute",
    drawback: "May experience traumatic memories associated with objects",
    category: "empathic"
  },
  {
    id: 8,
    name: "Empathy",
    description: "Feeling the emotions of others intensely",
    benefit: "Advantage on Insight checks and detecting lies",
    drawback: "Disadvantage on concentration checks when near strong emotions",
    category: "empathic"
  },
  {
    id: 9,
    name: "Pyrokinesis",
    description: "Creating and controlling fire with the mind",
    benefit: "Can create and control flames within 30 feet, dealing 1d6 fire damage",
    drawback: "Must make Constitution save when wet or cold or temporarily lose ability",
    category: "kinetic"
  },
  {
    id: 10,
    name: "Healing Touch",
    description: "Accelerating natural healing through mental focus",
    benefit: "Can heal 1d8 + Wisdom modifier HP as an action, usable twice per long rest",
    drawback: "Takes half of healed damage as psychic damage",
    category: "projective"
  }
];

export const getMentalAbilityById = (id: number): MentalAbility | undefined => {
  return mentalAbilities.find(ability => ability.id === id);
};

export const getMentalAbilitiesByCategory = (category: MentalAbility['category']): MentalAbility[] => {
  return mentalAbilities.filter(ability => ability.category === category);
}; 