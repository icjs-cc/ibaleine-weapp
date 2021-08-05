// pages/discover/index.js
const config = require('../../utils/config.js')
Page({
  data: {
    ...config,
    tabList: [
      {name: '最新', key: 'new'},
      {name: '全部', key: 'all'}
    ],
    current: 'new'
  },
  handleChange({ detail }){
    this.setData({
      current: detail.key
    })
  }
})