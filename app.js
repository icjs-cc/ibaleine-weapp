//app.js
import config from './utils/config.js'
if(config.is_mock){
  require('./mock/modules/index.js')
}

App({
  onShow() {
    
  },
  globalData: {
    userInfo: null
  },
})