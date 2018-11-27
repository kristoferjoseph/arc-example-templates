import Layout from './layout.mjs'
import { h, render } from './lit.mjs'
import Content from './content.mjs'
import Header from './components/header.mjs'

(function () {
  if (typeof window !== 'undefined') {
    run()
  }
}())

function run () {
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

function Home (props) {
  let scripts = [
    '/js/home.mjs'
  ]
  return h`
<${Layout} scripts=${scripts}>
  <h1>HOME</h1>
<//>
  `
}
export default Home
