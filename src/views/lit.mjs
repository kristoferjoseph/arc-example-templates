import preact from './preact.mjs'
import hyperx from './hyperx.mjs'
const render = preact.render
const Component = preact.Component
const h = hyperx(preact.h)
const lit = {
  h,
  render,
  Component
}

export default lit
export { h, render, Component }
