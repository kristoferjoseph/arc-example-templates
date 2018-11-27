const fs = require('fs')
const join = require('path').join

exports.handler = async function http (req) {
  let view = req.params.view
  let filePath = join(__dirname, 'node_modules', '@architect', 'views', view)

  let exists = fs.existsSync(filePath)
  if (exists) {
    let file = fs.readFileSync(filePath).toString()
    return {
      type: 'text/javascript; charset=utf8',
      body: file
    }
  } else {
    return {
      status: 404,
      type: 'text/html; charset=utf8',
      body: `${view} not found`
    }
  }
}
