<script lang="ts">
  import type { IPointerHighlightProps } from "./types"
  import { onMount } from "svelte"
  import { Spring } from "svelte/motion"
  import Pointer from "./Pointer.svelte"

  const {
    rectangleClassName = "",
    pointerClassName = "",
    containerClassName = "",
    inView = true,
    children,
  }: IPointerHighlightProps = $props()

  let container_ref: HTMLDivElement

  // Spring instance (class API)
  const spring = new Spring(
    { width: 0, height: 0 },
    { stiffness: 0.1, damping: 0.3 },
  )

  // State mirrored from spring.current for the template
  let width = $state(0)
  let height = $state(0)

  let has_run_once = $state(false)
  let resize_observer: ResizeObserver | null = null
  let intersection_observer: IntersectionObserver | null = null

  // rAF loop control
  let frame = 0
  let looping = false
  let stableFrames = 0
  const EPS = 0.25
  const REQUIRED_STABLE_FRAMES = 4
  let prevW = 0
  let prevH = 0

  function springFrame() {
    const cur = spring.current
    width = cur.width
    height = cur.height

    const dw = Math.abs(cur.width - prevW)
    const dh = Math.abs(cur.height - prevH)
    if (dw < EPS && dh < EPS) {
      stableFrames++
    }
    else {
      stableFrames = 0
    }
    prevW = cur.width
    prevH = cur.height

    if (stableFrames < REQUIRED_STABLE_FRAMES) {
      frame = requestAnimationFrame(springFrame)
    }
    else {
      looping = false
    }
  }

  function start_spring_loop() {
    if (looping)
      return
    looping = true
    stableFrames = 0
    prevW = width
    prevH = height
    frame = requestAnimationFrame(springFrame)
  }

  function set_dimensions(w: number, h: number) {
    spring.set({ width: w, height: h })
    start_spring_loop()
  }

  function update_size_now() {
    if (!container_ref)
      return
    const rect = container_ref.getBoundingClientRect()
    set_dimensions(rect.width, rect.height)
  }

  function observe_resize() {
    if (resize_observer)
      return
    resize_observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect
        set_dimensions(w, h)
      }
    })
    resize_observer.observe(container_ref)
  }

  function unobserve_resize() {
    if (resize_observer && container_ref)
      resize_observer.unobserve(container_ref)
    resize_observer = null
  }

  function observe_visibility() {
    if (intersection_observer)
      return
    intersection_observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          if (inView) {
            update_size_now()
            observe_resize()
          }
          else if (!has_run_once) {
            has_run_once = true
            update_size_now()
          }
        }
        else {
          if (inView) {
            unobserve_resize()
            set_dimensions(0, 0)
          }
        }
      },
      { threshold: 0.1 },
    )
    intersection_observer.observe(container_ref)
  }

  onMount(() => {
    if (!container_ref)
      return
    observe_visibility()
    return () => {
      intersection_observer?.unobserve(container_ref)
      intersection_observer = null
      unobserve_resize()
      cancelAnimationFrame(frame)
    }
  })
</script>

<div bind:this={container_ref} class={`relative w-fit ${containerClassName}`}>
  {#if width > 0 && height > 0}
    <div
      class="-z-10 absolute inset-0 pointer-events-none"
      style="opacity:1;transform:scale(1);transition:opacity .5s ease-out,transform .5s ease-out;"
    >
      <div
        class={`absolute inset-0 border border-neutral-800 dark:border-neutral-200 ${rectangleClassName}`}
        style={`width:${width}px;height:${height}px;transition:width 1s ease-in-out,height 1s ease-in-out;`}
      ></div>
    </div>

    <div
      class="absolute pointer-events-none"
      style={`opacity:1;transform:translate(${width + 4}px, ${height + 4}px) rotate(-90deg);transition:opacity .1s ease-in-out,transform 1s ease-in-out;`}
    >
      <Pointer className={`h-5 w-5 text-blue-500 z-50 ${pointerClassName}`} />
    </div>
  {/if}

  {@render children?.()}
</div>
