<script lang="ts">
  import {getContext} from 'svelte'

  let cls = null as string
  export {cls as class}

  export let style = ''
  export let color: keyof Theme = 'primary'
  let theme = getContext<Theme>('theme') ?? defaultTheme
  console.log(color)
</script>

<script lang="ts" context="module">
  import {defaultTheme} from '$lib/components/ThemeProvider.svelte'
</script>

<svg
  {style}
  class={cls}
  focusable="false"
  aria-hidden="true"
  viewBox="0 0 24 24"
  fill={theme[color].contrastText}
><slot/></svg>

<style lang="scss">
  @use "./styles/core";

  svg {
    @extend %svg;
  }
</style>
