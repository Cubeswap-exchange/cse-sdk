
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cubeswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./cubeswap-sdk.cjs.development.js')
}
