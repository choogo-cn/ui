<script lang="ts">
  import {getContext} from 'svelte'
  import {css} from '@emotion/css'

  import {cls} from '$lib/util'

  let _cls = ''

  export {_cls as class}
  export let disabled = false
  export let type: 'primary' | 'plain' = 'primary'
  export let color: 'primary' | 'success' = 'primary'
  export let onClick = null as unknown as svelteHTML.MouseEventHandler<HTMLButtonElement>
  const theme = getContext<Theme>('theme')
</script>

<button {type} {disabled} on:click={onClick} class={cls(_cls, type === 'primary' ? css`background-color: ${theme[color].main}; color: ${theme[color].contrastText}` : `background-color: transparent; color: ${theme[color].contrastText}`)}>
  <slot/>
</button>

<style lang="scss" scoped>
  button {
    padding: .5rem 1rem;
    border-radius: .2rem;
    cursor: pointer;
    appearance: none;
    border: none;

    &:not([type="plain"]) {
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

      &:active {
        box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
      }
    }
  }
</style>
