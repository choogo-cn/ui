<script lang="ts">
  import {afterUpdate} from 'svelte'
  import {cls} from '$lib/util'

  export let onClose = null as unknown as () => void
  export let open = false
  let _cls = ''
  export {_cls as class}

  let root: HTMLElement

  afterUpdate(() => {
    root && root.parentElement !== document.body && document.body.appendChild(root)
  })
</script>

{#if open}
  <section class={cls('shadow fixed top-0 left-0 w-full h-full', _cls)}
    on:click={() => {
      open = false
      onClose?.()
    }}
    bind:this={root}>
    <section class="w-fit panel">
      <slot/>
    </section>
  </section>
{/if}

<style lang="scss">
  @use "$lib/css/env";

  .shadow {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    @include env.animate() {
      from {
        background-color: rgba(0, 0, 0, 0);
      }

      to {
        background-color: rgba(0, 0, 0, .5);
      }
    }
  }

  .panel {
    border-radius: .5rem;
    background-color: #fff;
    padding: .5rem;
  }
</style>
