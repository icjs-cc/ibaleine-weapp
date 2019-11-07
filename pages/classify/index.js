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
    title: '最新',
    goodsList:[
      { title: '醉品朴茶·醇朴 2018年秋茶 安溪铁观音 经典口碑款 清香型 NGY0840-250g', thumb: 'http://ipratt.icjs.ink/resource/iwhale-ui/goods1.png', price: 89, primeCost: 100, tag: '新品', sales: 100 },
      { title: '醉品朴茶 2018年安溪铁观音 口碑好茶 皇冠100g', thumb: 'http://ipratt.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶 2018年安溪铁观音 口碑好茶 皇冠100g', thumb: 'http://ipratt.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶 2018年安溪铁观音 口碑好茶 皇冠100g', thumb: 'http://ipratt.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶 2018年安溪铁观音 口碑好茶 皇冠100g', thumb: 'http://ipratt.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶 2018年安溪铁观音 口碑好茶 皇冠100g', thumb: 'http://ipratt.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶 2018年安溪铁观音 口碑好茶 皇冠100g', thumb: 'http://ipratt.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶 2018年安溪铁观音 口碑好茶 皇冠100g', thumb: 'http://ipratt.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 }
    ],
    inputNumber: 0
  },
  handleInputNumber(e) {
    const value = e.detail.value
    this.setData({
      inputNumber: value
    })
  },
  handleChangeTab({
    detail
  } = {}) {
    this.setData({
      current: detail.key,
      title: this.data.tabs[detail.key].title
    })
  }
})