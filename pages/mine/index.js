// pages/mine/index.js
const util = require('../../utils/util.js')
const common = require('../../utils/common.js')
Page({
  ...util,
  ...common,
  data: {
    modules:[
      { icon: 'http://aliyun121.icjs.ink/resource/iwhale-ui/address.png', title:'我的地址'},
      { icon: 'http://aliyun121.icjs.ink/resource/iwhale-ui/order.png', title: '我的订单'},
      { icon: 'http://aliyun121.icjs.ink/resource/iwhale-ui/about-us.png', title: '关于我们'}
    ],
    userInfo: {}
  },
  handleLogout(){
    this.setData({
      userInfo: {}
    })
    this.setStorageSync('userInfo', {})
    wx.navigateTo({
      url: '/pages/login/index'
    })
  },
  onLoad(options) {
    
  },
  onShow(){
    this.setData({
      userInfo: this.getStorageSync('userInfo')
    })
  }
})