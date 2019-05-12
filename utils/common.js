const util = require('./util.js')
const navigateTo = e => {
  const url = e.currentTarget.dataset.url
  if (!util.isEmpty(url)){
    wx.navigateTo({
      url: url
    })
  }else{
    util.logWarn('暂无可调转路由',url)
  }
}

module.exports = {
  navigateTo: navigateTo
}