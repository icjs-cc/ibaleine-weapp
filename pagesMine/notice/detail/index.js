// pages/mine/notice/detail/index.js
const app = getApp()
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config
  },
  onLoad(){
    this.setData({
      notice: this.getStorage('notice')
    })
  }
})