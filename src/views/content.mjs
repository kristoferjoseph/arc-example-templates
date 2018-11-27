import { h } from './lit.mjs'

function Content (props) {
  return h`
<section>${props.children}</section>
  `
}

export default Content
