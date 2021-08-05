// pages/mine/setting/index.js
const config = require('../../utils/config.js')
const collection = require('../../utils/collection.js')
Page({
  ...collection,
  data: {
    ...config,
    storageInfo: {}
  },
  logout(){
    this.setStore('userInfo', null)
    this.back()
  },
  switchAccount(){
    this.router('/pagesAuthority/switch-account/index')
  },
  onShow() {
    this.setData({
      storageInfo: this.getStoreInfo()
    })
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      return {
        title: `您的好友邀您使用【${config.project_cn}】哦~`,
        imageUrl: '/images/common/share.jpg',
        path: "/pages/index/index",
        success: (res) => { }
      }
    }
  }
})