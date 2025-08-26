import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getComponentName(name: string): string {
  // convert kebab-case to title case
  return name.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase())
}
