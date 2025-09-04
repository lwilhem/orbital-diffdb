import { cva } from 'class-variance-authority'

export { default as NavbarContent } from './NavbarContent.vue'
export { default as NavbarIndicator } from './NavbarIndicator.vue'
export { default as NavbarItem } from './NavbarItem.vue'
export { default as NavbarLink } from './NavbarLink.vue'
export { default as NavbarList } from './NavbarList.vue'
export { default as NavbarRoot } from './NavbarRoot.vue'
export { default as NavbarTrigger } from './navbarTrigger.vue'
export { default as NavbarViewport } from './NavbarViewport.vue'

export const NavTriggerStyle = cva(
  'group inline-flex justify-center items-center bg-background data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 hover:bg-accent focus:bg-accent disabled:opacity-50 px-4 py-2 rounded-md focus:outline-none w-max h-10 font-medium text-sm transition-colors hover:text-accent-foreground focus:text-accent-foreground disabled:pointer-events-none',
)
