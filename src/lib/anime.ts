import {css} from '@emotion/css'

const tick = () => new Promise(resolve => {
  requestAnimationFrame(resolve)
})

export function slide<T>(node: HTMLElement, args?: T) {
  const parent = node.parentElement
  const h = parseFloat(getComputedStyle(node).height)
  const cssID = css(`transition: height .3s`)

  node.style.height = '0'
  tick().then(() => {
    node.style.height = `${h}px`
    node.classList.add(cssID)
  })

  return {
    destroy() {
      parent?.appendChild(node)
      node.addEventListener('transitionend', () => node.remove())
      tick().then(() => {
        node.classList.add(cssID)
        return tick()
      }).then(() => {
        node.style.height = '0'
      })
    }
  }
}
