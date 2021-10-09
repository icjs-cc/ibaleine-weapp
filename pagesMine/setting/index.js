// pages/mine/setting/index.js
const app = getApp()
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
    storageInfo: {}
  },
  logout(){
    this.setStorage('userInfo', null)
    this.back()
  },
  switchAccount(){
    this.router('/pagesAuthority/switch-account/index')
  },
  onShow() {
    this.setData({
      storageInfo: this.getStorageInfo()
    })
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      return {
        title: `您的好友邀您使用【${this.data.project_cn}】哦~`,
        imageUrl: '/images/common/share.jpg',
        path: "/pages/index/index",
        success: (res) => { }
      }
    }
  }
})