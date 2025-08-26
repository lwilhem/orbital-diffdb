import type { WithElementRef } from "bits-ui"
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

export const button_variants = tv({
  base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      "default": "",
      "secondary": "",
      "outline": "",
      "outline-secondary": "",
      "destructive": "",
      "ghost": "",
      "link": "",
    },
    size: {
      default: "",
      sm: "",
      lg: "",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export type TButtonVariant = VariantProps<typeof button_variants>["variant"]
export type TButtonSize = VariantProps<typeof button_variants>["size"]

export type TButtonProps = WithElementRef<HTMLButtonAttributes>
  & WithElementRef<HTMLAnchorAttributes> & {
    variant?: TButtonVariant
    size?: TButtonSize
  }
