const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    swipers: [
      { url: 'http://ipratt.icjs.ink/resource/iwhale-ui/iw-swiper.png' },
      { url: 'http://ipratt.icjs.ink/resource/iwhale-ui/iw-swiper.png' }
    ],
    menus: [
      { title: '丹红系列', linkType: 'navigateTo', url: 'http://ipratt.icjs.ink/resource/iwhale-ui/iw-menu-tabs-1.png', path: '/pages/navbar/index' },
      { title: '观音系列', linkType: 'switchTab', url: 'http://ipratt.icjs.ink/resource/iwhale-ui/iw-menu-tabs-2.png', path: '/pages/discover/index' },
      { title: '谦白系列', linkType: 'switchTab', url: 'http://ipratt.icjs.ink/resource/iwhale-ui/iw-menu-tabs-3.png', path: '/pages/discover/index' },
      { title: '岩韵系列', linkType: 'switchTab', url: 'http://ipratt.icjs.ink/resource/iwhale-ui/iw-menu-tabs-4.png', path: '/pages/shoppingcart/index' }
    ],
    goods: [
      { title: '醉品朴茶·醇朴 2018年秋茶 安溪铁观音 经典口碑款 清香型 NGY0840-250g', thumb: 'http://ipratt.icjs.ink/resource/iwhale-ui/goods1.png', price: 89, primeCost: 100, tag: '新品', sales:100 },
      { title: '醉品朴茶 2018年安溪铁观音 口碑好茶 皇冠100g', thumb: 'http://ipratt.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales:210 }
    ]
  },
  onLoad(){
    // const userInfo = util.getStorageSync('userInfo')
    // if(util.isEmpty(userInfo)){
    //   wx.redirectTo({
    //     url: '/pages/login/index'
    //   })
    // }
  }
})
