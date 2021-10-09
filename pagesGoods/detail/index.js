// pagesGoods/detail/index.js
const app = getApp()
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
  },
  showSpecs(){
    this.selectComponent("#popup").show()
  },
  hideSpecs(){
    this.selectComponent("#popup").hide()
  },
  onLoad(){
    this.showSpecs()
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