import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string): string {
  const cleanPath = path.replace(/^\/+/, '');
  return process.env.NODE_ENV === 'production' 
    ? `/ww/${cleanPath}`
    : `/${cleanPath}`;
}

export function getStatModifier(stat: number): number {
  if (stat === 3) return -3;
  if (stat >= 4 && stat <= 5) return -2;
  if (stat >= 6 && stat <= 8) return -1;
  if (stat >= 9 && stat <= 12) return 0;
  if (stat >= 13 && stat <= 15) return 1;
  if (stat >= 16 && stat <= 17) return 2;
  if (stat === 18) return 3;
  return 0;
}

export function formatModifier(modifier: number): string {
  return modifier >= 0 ? `+${modifier}` : `${modifier}`;
}

export function getBasePath(): string {
  return process.env.NODE_ENV === 'production' ? '/ww' : '';
}

export const ensureMinimumHP = (hp: number): number => {
  return Math.max(1, hp);
};

