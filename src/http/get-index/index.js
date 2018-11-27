const loader = require('esm')(module)
const Home = loader('@architect/views/home.mjs').default
const lit = loader('@architect/views/lit.mjs').default
const render = require('preact-render-to-string')

exports.handler = async function http (req) {
  return {
    type: 'text/html; charset=utf8',
    body: render(lit.h`<${Home}><//>`)
  }
}
