const fs = require('fs')
const join = require('path').join

exports.handler = async function http (req) {
  let component = req.params.component
  let filePath = join(__dirname, 'node_modules', '@architect', 'views', 'components', component)
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
      body: `${component} not found`
    }
  }
}
