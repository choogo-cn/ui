<script lang="ts">
  import {cache} from '@emotion/css'
  import {setContext} from 'svelte'
  import merge from 'deepmerge'
  import type {Theme} from '$lib/type'


  export let theme: DeepPartial<Theme> = {}

  setContext<DeepPartial<Theme>>('theme', merge(defaultTheme, theme))
</script>

<script lang="ts" context="module">
  export const defaultTheme: Theme = {
    primary: {
      main: '#30aecf',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffc',
      contrastText: '#fff'
    },
    success: {
      main: '#68b88e',
      contrastText: '#fff'
    },
    warning: {
      main: '#f43e06',
      contrastText: '#fff'
    },
    error: {
      main: '#f43e06',
      contrastText: '#fff'
    }
  }
</script>


{#if typeof window == 'undefined'}
  {@html '<' + `style>${Object.values(cache.inserted).join('\n')}</style>`}
{/if}

<slot/>
