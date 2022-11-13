<script lang="ts" context="module">
  import {getContext} from 'svelte'
  import chroma from 'chroma-js'
</script>

<script lang="ts">
  import {css} from '@emotion/css'

  import {cls} from '$lib/util'
  import {defaultTheme} from '$lib/components/ThemeProvider.svelte'
  import type {Theme} from '$lib/type'

  let _cls = ''

  export {_cls as class}
  export let disabled = false
  export let variant: 'contained' | 'text' | 'outlined' = 'contained'
  export let color: keyof Theme = 'primary'
  export let onClick = null as unknown as svelteHTML.MouseEventHandler<HTMLButtonElement>
  const theme = getContext<Theme>('theme') ?? defaultTheme

  let cssID = ''

  $: {
    switch (variant) {
      case 'text': {
        const c = chroma(theme[color].main)

        cssID = css`color: ${theme[color].main};&[variant="text"]:hover{background-color: ${c.brighten(2).alpha(.2).css()};}`
        break
      }

      case 'outlined': {
        cssID = css`border-color: ${theme[color].main}`
        break
      }

      case 'contained': {
        cssID = css`background-color: ${theme[color].main}; color: ${theme[color].contrastText}`
        break
      }
    }
  }
</script>

<button {variant} {disabled} on:click={onClick} class={cls(_cls, cssID)}>
  <slot/>
</button>

<style lang="scss">
  button {
    padding: .5rem 1rem;
    border-radius: .2rem;
    cursor: pointer;
    appearance: none;
    border: none;

    &[variant="text"] {
      padding: .2rem .5rem;
      background-color: transparent;
    }

    &[variant="contained"] {
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

      &:active {
        box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
      }
    }
  }
</style>
