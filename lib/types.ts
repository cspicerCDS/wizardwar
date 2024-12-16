export interface Stats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface Mutation {
  id: string;
  name: string;
  benefit: string;
  drawback?: string;
}

export interface MentalAbility {
  id: string;
  name: string;
  description: string;
  benefit: string;
  drawback?: string;
}

export interface Creature {
  id: string;
  name: string;
  type: string;
  size: string;
  image?: string;
  description: string;
  stats: {
    hd: number;
    hp: number;
    armor: "none" | "light" | "medium" | "heavy";
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };
  abilities: string[];
  loot: string[];
  encounters?: string[];
  lairs?: string[];
} 
