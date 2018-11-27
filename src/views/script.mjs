import { h } from './lit.mjs'

function Script (props) {
  props = props || {}
  let src = props.src || ''
  return src
    ? h`<script src=${src} type=module crossorigin></script>`
    : ''
}

export default Script
