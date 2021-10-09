// pages/classify/index.js
import images from '../../utils/images.js'
const app = getApp()
Page({
  data: {
    ...app.globalData.config,
    tabList: [
      {name: '礼品系列', key: '1'},
      {name: '花茶系列', key: '2'},
      {name: '办公用茶', key: '3'},
      {name: '茶具茶生活', key: '4'},
      {name: '存茶(收藏)', key: '5'},
      {name: '预定款', key: '6'},
    ],
    current: '1',
    offset: '0rpx',
    offsetTimeout: null,
    list: [
      {name: '茶盘', url: images.classify1},
      {name: '茶荷', url: images.classify2},
      {name: '烧水壶', url: images.classify3},
      {name: '茶巾', url: images.classify4},
      {name: '茶盘', url: images.classify1},
      {name: '茶荷', url: images.classify2},
      {name: '烧水壶', url: images.classify3},
      {name: '茶巾', url: images.classify4},

    ]
  },
  getOffset(){
    const offsetTimeout = setTimeout(() => {
      let query = wx.createSelectorQuery();
      query.select('.header').boundingClientRect(rect=>{
        let clientHeight = rect.height;
        let clientWidth = rect.width;
        let ratio = 750 / clientWidth;
        let height = clientHeight * ratio;
        this.setData({
          offset: `${height}rpx`
        })
      }).exec();
    }, 300)
    this.setData({offsetTimeout})
  },
  handleChange({ detail }){
    this.setData({
      current: detail.key
    })
  },
  onLoad(){
    setTimeout(()=>{
      this.selectComponent("#page").hideLoading()
      this.getOffset() // 计算头部高度
    },2000)
  },
  onUnload(){
    if(this.data.offsetTimeout) clearTimeout(this.data.offsetTimeout)
  }
})