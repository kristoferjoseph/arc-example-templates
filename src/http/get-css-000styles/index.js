const styles = `
* {
 margin: 0;
 padding: 0;
}

html {
  font-weight: 18px;
}

body {
  font-family: sans-serif;
}
`
exports.handler = async function http (request) {
  return {
    type: 'text/css; charset=utf8',
    body: styles
  }
}
