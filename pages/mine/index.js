// pages/mine/index.js
const app = getApp()
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
    userInfo: {},
    today: null
  },
  onShow() {
    const today = this.formatDate(new Date(), 'yyyy-MM-dd')
    this.setData({
      userInfo: this.getStorage('userInfo'),
      today
    })
  },
  onLoad(){
    setTimeout(()=>{
      this.selectComponent("#page").hideLoading()
    },2000)
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      return {
        title: `您的好友邀您使用【${this.data.project_cn}】`,
        imageUrl: '/images/common/share.jpg',
        path: "/pages/index/index",
        success: (res) => { }
      }
    }
  }
})