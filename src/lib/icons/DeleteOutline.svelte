<script lang="ts" context="module">
  import type {ComponentProps} from 'svelte'
  import Box from './Box.svelte'
</script>

<script lang="ts">
  type $$Props = ComponentProps<Box>
</script>

<Box {...$$props}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"/></Box>
