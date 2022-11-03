<script lang="ts">
  import {getContext} from 'svelte'
  import {css} from '@emotion/css'

  import {cls} from '$lib/util'
  import {defaultTheme} from '$lib/components/ThemeProvider.svelte'

  let _cls = ''

  export {_cls as class}
  export let disabled = false
  export let variant: 'contained' | 'text' | 'outlined' = 'contained'
  export let color: 'primary' | 'success' = 'primary'
  export let onClick = null as unknown as svelteHTML.MouseEventHandler<HTMLButtonElement>
  const theme = getContext<Theme>('theme') ?? defaultTheme

  $: cssID = variant === 'contained' ? css`background-color: ${theme[color].main}; color: ${theme[color].contrastText}` :
    variant === 'text' ? css`color: ${theme[color].contrastText}` :
    variant === 'outlined' ? css`border-color: ${theme[color].main}` : ''
</script>

<button {variant} {disabled} on:click={onClick} class={cls(_cls, cssID)}>
  <slot/>
</button>

<style lang="scss" scoped>
  button {
    padding: .5rem 1rem;
    border-radius: .2rem;
    cursor: pointer;
    appearance: none;
    border: none;

    &[variant="text"] {
      padding: 0;
      background-color: transparent;
    }

    &[type="contained"] {
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

      &:active {
        box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
      }
    }
  }
</style>
