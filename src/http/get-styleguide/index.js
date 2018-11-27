
exports.handler = async function http (request) {
  return {
    type: 'text/html; charset=utf8',
    body: 'Hello world!'
  }
}
