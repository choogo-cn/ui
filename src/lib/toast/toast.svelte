<script lang="ts">
  // todo
  // export let position: {
  //   x: 'center' | 'left' | 'right'
  //   y: 'top' | 'bottom'
  // } = {
  //   x: 'center',
  //   y: 'top'
  // }
</script>

<script lang="ts" context="module">
  import {writable, get} from 'svelte/store'
  import {slide} from 'svelte/transition'
  const list = writable<{id: number, msg: string}[]>([])
  let id = 0
  export function toast(msg: string, opts: {duration: number} = {duration: 3}) {
    const _id = id++

    list.set([...get(list), {msg, id: _id}])

    setTimeout(() => {
      list.set(get(list).filter(item => item.id !== _id))
    }, opts.duration * 1e3)
  }
</script>

<section class="w-fit">
  {#each $list as {msg}}
    <div class="text-center text-sm"
      transition:slide={{delay: 0, duration: 3e2}}
    >{msg}</div>
  {/each}
</section>


<style lang="scss">
  section {
    position: fixed;
    left: 0;
    right: 0;
    top: 1rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    max-width: 80%;
    width: fit-content;


    & > div {
      background-color: #333;
      color: #fff;
      border-radius: .2rem;
      padding: .5rem 1rem;
      min-width: 9rem;
      overflow: hidden;
      word-break: break-all;
      text-align: center;
    }
  }
</style>
