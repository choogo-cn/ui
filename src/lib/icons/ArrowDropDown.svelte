<script lang="ts" context="module">
  import type {ComponentProps} from 'svelte'
  import Box from './Box.svelte'
</script>

<script lang="ts">
  type $$Props = ComponentProps<Box>
</script>

<Box {...$$props}><path d="m7 10 5 5 5-5z"/></Box>
