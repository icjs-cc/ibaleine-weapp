// pages/classify/index.js
Page({
  data: {
    tabs: [{
      key: 0,
      title: '最新'
    }, {
      key: 1,
      title: '红茶'
    }, {
      key: 2,
      title: '绿茶'
    }, {
      key: 3,
      title: '岩茶'
    }],
    current: 0,
    title:'最新'
  },
  handleChangeTab({ detail } = {}) {
    this.setData({
      current: detail.key,
      title: this.data.tabs[detail.key].title
    })
  }
})