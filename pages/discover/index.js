// pages/discover/index.js
import images from '../../utils/images.js'
const app = getApp()
Page({
  data: {
    ...app.globalData.config,
    tabList: [
      {name: '最新', key: 'new'},
      {name: '全部', key: 'all'}
    ],
    current: 'new',
    images
  },
  handleChange({ detail }){
    this.setData({
      current: detail.key
    })
  },
  onLoad(){
    setTimeout(()=>{
      this.selectComponent("#page").hideLoading()
    },2000)
  },
})