// pages/mine/notice/detail/index.js
const config = require('../../../utils/config.js')
const collection = require('../../../utils/collection.js')
Page({
  ...collection,
  data: {
    ...config
  },
  onLoad(){
    this.setData({
      notice: this.getStore('notice')
    })
  }
})