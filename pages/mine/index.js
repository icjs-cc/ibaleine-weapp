// pages/mine/index.js
const config = require('../../utils/config.js')
const collection = require('../../utils/collection.js')
Page({
  data: {
    ...config,
    userInfo: {},
    today: null
  },
  ...collection,
  onShow() {
    const today = this.formatDate(new Date(), 'yyyy-MM-dd')
    this.setData({
      userInfo: this.getStore('userInfo'),
      today
    })
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      return {
        title: `您的好友邀您使用【${config.project_cn}】`,
        imageUrl: '/images/common/share.jpg',
        path: "/pages/index/index",
        success: (res) => { }
      }
    }
  }
})