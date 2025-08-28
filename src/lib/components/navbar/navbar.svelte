<script lang="ts">
  import { NavigationMenu } from "bits-ui"
  import cn from "clsx"
  import MdiChevronDown from "virtual:icons/mdi/chevron-down"

  const components: { title: string, href: string, description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/components/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Link Preview",
      href: "/docs/components/link-preview",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/components/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll Area",
      href: "/docs/components/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/components/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/components/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]

  type ListItemProps = {
    className?: string
    title: string
    href: string
    content: string
  }
</script>

{#snippet ListItem({ className, title, content, href }: ListItemProps)}
  <li>
    <NavigationMenu.Link
      class={cn(
        "block space-y-1 hover:bg-muted focus:bg-muted p-3 rounded-md outline-hidden no-underline leading-none transition-colors hover:text-accent-foreground focus:text-accent-foreground select-none",
        className,
      )}
      {href}
    >
      <div class="font-medium text-sm leading-none">{title}</div>
      <p class="text-muted-foreground text-sm line-clamp-2 leading-snug">
        {content}
      </p>
    </NavigationMenu.Link>
  </li>
{/snippet}

<NavigationMenu.Root class="z-10 relative flex justify-center w-full">
  <NavigationMenu.List
    class="group flex justify-center items-center p-1 list-none"
  >
    <NavigationMenu.Item value="getting-started">
      <NavigationMenu.Trigger
        class="group inline-flex justify-center items-center bg-transparent data-[state=open]:bg-white hover:bg-white focus-visible:bg-muted dark:data-[state=open]:bg-muted dark:hover:bg-muted disabled:opacity-50 data-[state=open]:shadow-mini px-4 py-2 rounded-[7px] focus-visible:outline-hidden w-max h-8 font-medium text-sm transition-colors hover:text-accent-foreground focus-visible:text-accent-foreground disabled:pointer-events-none"
      >
        Getting started
        <MdiChevronDown
          class="top-[1px] relative ml-1 size-3 group-data-[state=open]:rotate-180 transition-transform duration-200"
          aria-hidden="true"
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content
        class="top-0 left-0 absolute w-full sm:w-auto data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left"
      >
        <ul
          class="gap-x-2.5 grid sm:grid-rows-3 sm:grid-flow-col m-0 p-3 sm:p-[22px] sm:w-[600px] list-none"
        >
          <li class="row-span-3 mb-2 sm:mb-0">
            <NavigationMenu.Link
              href="/"
              class="flex flex-col justify-end bg-linear-to-b from-muted/50 to-muted focus:shadow-md p-6 rounded-md outline-hidden w-full h-full no-underline select-none"
            >
              <!-- <Icons.logo class="w-6 h-6" /> -->
              <div class="mt-4 mb-2 font-medium text-lg">Bits UI</div>
              <p class="text-muted-foreground text-sm leading-tight">
                The headless components for Svelte.
              </p>
            </NavigationMenu.Link>
          </li>

          {@render ListItem({
            href: "/docs",
            title: "Introduction",
            content: "Headless components for Svelte and SvelteKit",
          })}
          {@render ListItem({
            href: "/docs/getting-started",
            title: "Getting Started",
            content: "How to install and use Bits UI",
          })}
          {@render ListItem({
            href: "/docs/styling",
            title: "Styling",
            content: "How to style Bits UI components",
          })}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger
        class="group inline-flex justify-center items-center bg-transparent data-[state=open]:bg-white hover:bg-white focus-visible:bg-muted dark:data-[state=open]:bg-muted dark:hover:bg-muted disabled:opacity-50 data-[state=open]:shadow-mini px-4 py-2 rounded-[7px] focus-visible:outline-hidden w-max h-8 font-medium text-sm transition-colors hover:text-accent-foreground focus-visible:text-accent-foreground disabled:pointer-events-none"
      >
        Components
        <MdiChevronDown
          class="top-[1px] relative ml-1 size-3 group-data-[state=open]:rotate-180 transition-transform duration-200"
          aria-hidden="true"
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content
        class="top-0 left-0 absolute w-full sm:w-auto data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left"
      >
        <ul
          class="gap-3 grid md:grid-cols-2 p-3 sm:p-6 sm:w-[400px] md:w-[500px] lg:w-[600px]"
        >
          {#each components as component (component.title)}
            {@render ListItem({
              href: component.href,
              title: component.title,
              content: component.description,
            })}
          {/each}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link
        class="group inline-flex justify-center items-center bg-transparent data-[state=open]:bg-white hover:bg-white focus:bg-muted dark:data-[state=open]:bg-muted dark:hover:bg-muted disabled:opacity-50 data-[state=open]:shadow-mini px-4 py-2 rounded-[7px] focus:outline-hidden w-max h-8 font-medium text-sm transition-colors hover:text-accent-foreground focus:text-accent-foreground disabled:pointer-events-none"
        href="/docs"
      >
        <span class="hidden sm:inline"> Documentation </span>
        <span class="sm:hidden inline"> Docs </span>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Indicator
      class="top-full z-10 flex justify-center items-end opacity-100 data-[state=hidden]:opacity-0 h-2.5 overflow-hidden transition-[all,transform_250ms_ease] data-[state=hidden]:animate-fade-out data-[state=visible]:animate-fade-in duration-200"
    >
      <div
        class="top-[70%] relative bg-border rounded-tl-[2px] size-2.5 rotate-[45deg]"
      ></div>
    </NavigationMenu.Indicator>
  </NavigationMenu.List>
  <div
    class="top-full left-0 absolute flex justify-center w-full perspective-[2000px]"
  >
    <NavigationMenu.Viewport
      class="relative bg-background shadow-lg mt-2.5 border rounded-md w-full sm:w-[var(--bits-navigation-menu-viewport-width)] h-[var(--bits-navigation-menu-viewport-height)] overflow-hidden text-popover-foreground origin-[top_center] transition-[width,_height] data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in duration-200"
    />
  </div>
</NavigationMenu.Root>
