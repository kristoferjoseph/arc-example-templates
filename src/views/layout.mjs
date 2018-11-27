import { h } from './lit.mjs'
import Script from './script.mjs'

function Layout (props) {
  props = props || {}
  let title = props.title || 'Let\'s Begin'
  let scripts = props.scripts || []
  return h`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  ${props.children}
  <div id="root"></div>
  ${scripts.map(s => h`<${Script} src=${s}><//>`)}
</body>
</html>
  `
}

export default Layout
