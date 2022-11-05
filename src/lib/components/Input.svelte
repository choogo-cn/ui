<script lang="ts">
  import {getContext} from 'svelte'
  import {css} from '@emotion/css'
  import {defaultTheme} from './ThemeProvider.svelte'
  import {cls} from '$lib/util'

  export let placeholder = ''
  export let variant: 'standard' | 'outline' = 'standard'
  export let color: keyof Theme = 'primary'

  const theme = getContext<Theme>('theme') ?? defaultTheme

  $: cssID = css`:focus{border-color: ${theme[color].main}}`
</script>


<input {placeholder} {variant} class={cls(cssID)}/>


<style lang="scss" scoped>
  @use "$lib/style/env";

  input {
    appearance: none;
    outline: none;
    height: 28px;
    padding: 0 .5rem;
    border-color: #ccc;

    &::placeholder {
      color: #ccc;
    }

    &[variant="standard"] {
      border-width: 0 0 1px 0;
      border-radius: 0;
    }

    &[variant="outline"] {
      border-width: 1px;
      border-style: solid;
      border-radius: env.$border-radius;
    }
  }
</style>
