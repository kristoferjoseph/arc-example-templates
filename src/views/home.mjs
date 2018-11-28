import { h } from './lit.mjs'
import Layout from './layout.mjs'

function Home (props) {
  let scripts = [
    '/js/sup.mjs'
  ]
  return h`
<${Layout} scripts=${scripts}>
  <h1>HOME</h1>
<//>
  `
}
export default Home
