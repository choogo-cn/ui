<script lang="ts">
  import {cache} from '@emotion/css'
  import {setContext} from 'svelte'
  import merge from 'deepmerge'

  const defaultTheme: Theme = {
    primary: {
      main: '#30aecf',
      contrastText: '#fff',
    },

    success: {
      main: '#68b88e',
      contrastText: '#fff'
    }
  }

  export let theme: DeepPartial<Theme> = {}

  setContext<DeepPartial<Theme>>('theme', merge(defaultTheme, theme))
</script>


{#if typeof window == 'undefined'}
  {@html '<' + `style>${Object.values(cache.inserted).join('\n')}</style>`}
{/if}

<slot/>
