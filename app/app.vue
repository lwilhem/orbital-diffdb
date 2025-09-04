<script setup lang="ts">
import { NavTriggerStyle } from './components/Navbar'

const components: { title: string, href: string, description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/components/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/components/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/components/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/components/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/components/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/components/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]
</script>

<template>
  <NavbarRoot>
    <NavbarList>
      <NavbarItem>
        <NavbarTrigger>Getting started</NavbarTrigger>
        <NavbarContent>
          <ul class="gap-3 grid lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)] p-6 md:w-[400px] lg:w-[500px]">
            <li class="row-span-3">
              <NavbarLink as-child>
                <a
                  class="flex flex-col justify-end bg-gradient-to-b from-muted/50 to-muted focus:shadow-md p-6 rounded-md outline-none w-full h-full no-underline select-none"
                  href="/"
                >
                  <img src="https://www.reka-ui.com/logo.svg" class="w-6 h-6">
                  <div class="mt-4 mb-2 font-medium text-lg">
                    shadcn/ui
                  </div>
                  <p class="text-muted-foreground text-sm leading-tight">
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </a>
              </NavbarLink>
            </li>

            <li>
              <NavbarLink as-child>
                <a
                  href="/docs/introduction"
                  class="block space-y-1 hover:bg-accent focus:bg-accent p-3 rounded-md outline-none no-underline leading-none transition-colors hover:text-accent-foreground focus:text-accent-foreground select-none"
                >
                  <div class="font-medium text-sm leading-none">Introduction</div>
                  <p class="text-muted-foreground text-sm line-clamp-2 leading-snug">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </p>
                </a>
              </NavbarLink>
            </li>
            <li>
              <NavbarLink as-child>
                <a
                  href="/docs/installation"
                  class="block space-y-1 hover:bg-accent focus:bg-accent p-3 rounded-md outline-none no-underline leading-none transition-colors hover:text-accent-foreground focus:text-accent-foreground select-none"
                >
                  <div class="font-medium text-sm leading-none">Installation</div>
                  <p class="text-muted-foreground text-sm line-clamp-2 leading-snug">
                    How to install dependencies and structure your app.
                  </p>
                </a>
              </NavbarLink>
            </li>
            <li>
              <NavbarLink as-child>
                <a
                  href="/docs/typography"
                  class="block space-y-1 hover:bg-accent focus:bg-accent p-3 rounded-md outline-none no-underline leading-none transition-colors hover:text-accent-foreground focus:text-accent-foreground select-none"
                >
                  <div class="font-medium text-sm leading-none">Typography</div>
                  <p class="text-muted-foreground text-sm line-clamp-2 leading-snug">
                    Styles for headings, paragraphs, lists...etc
                  </p>
                </a>
              </NavbarLink>
            </li>
          </ul>
        </NavbarContent>
      </NavbarItem>
      <NavbarItem>
        <NavbarTrigger>Components</NavbarTrigger>
        <NavbarContent>
          <ul class="gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
            <li v-for="component in components" :key="component.title">
              <NavbarLink as-child>
                <a
                  :href="component.href"
                  class="block space-y-1 hover:bg-accent focus:bg-accent p-3 rounded-md outline-none no-underline leading-none transition-colors hover:text-accent-foreground focus:text-accent-foreground select-none"
                >
                  <div class="font-medium text-sm leading-none">{{ component.title }}</div>
                  <p class="text-muted-foreground text-sm line-clamp-2 leading-snug">
                    {{ component.description }}
                  </p>
                </a>
              </NavbarLink>
            </li>
          </ul>
        </NavbarContent>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink href="/docs/introduction" :class="NavTriggerStyle()">
          Documentation
        </NavbarLink>
      </NavbarItem>
    </NavbarList>
  </NavbarRoot>
</template>
