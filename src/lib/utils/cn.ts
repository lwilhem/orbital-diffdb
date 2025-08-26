import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ObjectValues<T> = T[keyof T]

export function getComponentName(name: string): string {
  // convert kebab-case to title case
  return name.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase())
}

export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>

export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null }
