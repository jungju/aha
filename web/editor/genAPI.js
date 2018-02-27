const swaggerGen = require('swagger-vue')
const ahaJsonData = require(process.env.GOPATH+'/src/github.com/jungju/aha/swagger/swagger.json')

const fs = require('fs')
const path = require('path')

let ahaOpt = {
  swagger: ahaJsonData,
  moduleName: 'ahaAPI',
  className: 'ahaAPI'
}
const ahaCodeResult = swaggerGen(ahaOpt)
fs.writeFileSync(path.join(__dirname, './src/client/index.js'), ahaCodeResult)