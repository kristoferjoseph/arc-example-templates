import { h } from '../lit.mjs'

export default function Header (props) {
  return h`
<header class="p2">
  <h1>${props.children}</h1>
</header>
  `
}
