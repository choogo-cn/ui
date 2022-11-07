<script lang="ts">
  import {v4 as uuid} from 'uuid'
  import {css} from '@emotion/css'
  import {cls} from '$lib/util'
  import deepmerge from 'deepmerge'

  export let autoClose = true

  const _position = {x: 'center', y: 'top'} as typeof position

  export let position: {
    x?: 'center' | 'left' | 'right'
    y?: 'top' | 'bottom' | 'center'
  } = {
    x: 'center',
    y: 'top'
  }

  $: $config.autoClose = autoClose
  $: position = deepmerge(_position, position)
  $: cssID = css`${[
    position.x === 'left' ? 'left: 1rem' : position.x === 'right' ? 'right: 1rem' : 'left: 0; right: 0',
    position.y === 'top' ? 'top: 1rem' : position.y === 'bottom' ? 'bottom: 1rem' : 'top: 0; bottom: 0'
  ].join(';')}`
</script>

<script lang="ts" context="module">
  import {writable, get} from 'svelte/store'
  import {slide} from 'svelte/transition'
  const list = writable<{id: string, msg: string}[]>([])
  const config = writable({autoClose: true})

  export function toast(msg: string, opts: {duration: number} = {duration: 3}) {
    const id = uuid()

    list.set([...get(list), {msg, id}])

    get(config).autoClose && setTimeout(() => {
      list.set(get(list).filter(item => item.id != id))
    }, opts.duration * 1e3)
  }
</script>

<section class={cls(cssID)}>
  {#each $list as item (item.id)}
    <div class="text-center text-sm" transition:slide|local>{item.msg}</div>
  {/each}
</section>


<style lang="scss">
  section {
    position: fixed;
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
      padding: 0 1rem;
      height: 40px;
      line-height: 40px;
      min-width: 9rem;
      word-break: break-all;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
  }
</style>
