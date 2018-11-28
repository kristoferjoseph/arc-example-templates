import { h, render } from './lit.mjs'
import Content from './content.mjs'
import Header from './components/header.mjs'

export default function Sup () {
  let root = document.getElementById('root')
  render(
    h`
    <${Content}>
      <${Header}>
        Sup
      <//>
    <//>
    `,
    root,
    root.firstElementChild
  )
}

Sup()
