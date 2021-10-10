// pagesGoods/detail/index.js
const app = getApp()
let WxParse = require('../../component/wx-parse/wxParse.js');
import images from '../../utils/images.js'
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
    images: images.goods1,
    swiperList: [
      {url: '/images/resource/1.png', name: '礼品系列'},
      {url: '/images/resource/1.png', name: '印记传承'},
      {url: '/images/resource/1.png', name: '花茶系列'},
      {url: '/images/resource/1.png', name: '办公系列'},
      {url: '/images/resource/1.png', name: '品质茶具'},
    ],
    html: "<html><h1>123</h1></html>"
  },
  showSpecs(){
    this.selectComponent("#bizSpecs").showSpecs()
  },
  onLoad(){
    this.setData({
      html: "<html><body>商品图文详情</body></html>"
    })
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