// pages/discover/index.js
Page({
  data: {
    tabs: [{
      key: 1,
      title: '最新'
    }, {
      key: 2,
      title: '红茶'
    }, {
      key: 3,
      title: '绿茶'
    }, {
      key: 4,
      title: '岩茶'
    }],
    current: 1
  },
  handleChangeTab({ detail } = {}) {
    this.setData({
      current: detail.key
    })
  }
})