import type { Snippet } from "svelte"

export interface IPointerHighlightProps {
  rectangleClassName?: string
  pointerClassName?: string
  containerClassName?: string
  inView?: boolean
  children: Snippet
}
