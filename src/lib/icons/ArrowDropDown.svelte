<script lang="ts" context="module">
  import type {ComponentProps} from 'svelte'
  import Box from './Box.svelte'
</script>

<script lang="ts">
  type Props = ComponentProps<Box>
  const {color, class: cls, style}: Props = {}
  export {
    color,
    style,
    cls as class
  }
</script>

<Box {...$$props}><path d="m7 10 5 5 5-5z"/></Box>
