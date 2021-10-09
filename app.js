//app.js
import config from './utils/config.js'
const collection = require('./utils/collection.js')

if(config.is_mock){
  require('./mock/modules/index.js')
}

App({
  globalData: {
    function: {
      ...collection
    },
    config
  },
})