<script lang="ts">
  import {cls} from '$lib/util'


  let _cls = ''
  export {_cls as class}
  export let onClose = null as unknown as () => void
  export let open = false


  function handle(node: HTMLElement) {
    document.body.appendChild(node)
  }
</script>

{#if open}
  <section use:handle class={cls('shadow fixed top-0 left-0 w-full h-full', _cls)}
    on:click={() => {
      open = false
      onClose?.()
    }}>
    <section class="w-fit panel">
      <slot/>
    </section>
  </section>
{/if}

<style lang="scss">
  @use "../styles/env";

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
