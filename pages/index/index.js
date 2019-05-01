const app = getApp()
Page({
  data: {
    swipers: [
      { url: 'http://aliyun121.icjs.ink/resource/iwhale-ui/iw-swiper.png' },
      { url: 'http://aliyun121.icjs.ink/resource/iwhale-ui/iw-swiper.png' }
    ],
    menus: [
      { title: '丹红系列', linkType: 'navigateTo', url: 'http://aliyun121.icjs.ink/resource/iwhale-ui/iw-menu-tabs-1.png', path: '/pages/navbar/index' },
      { title: '观音系列', linkType: 'switchTab', url: 'http://aliyun121.icjs.ink/resource/iwhale-ui/iw-menu-tabs-2.png', path: '/pages/discover/index' },
      { title: '谦白系列', linkType: 'switchTab', url: 'http://aliyun121.icjs.ink/resource/iwhale-ui/iw-menu-tabs-3.png', path: '/pages/discover/index' },
      { title: '岩韵系列', linkType: 'switchTab', url: 'http://aliyun121.icjs.ink/resource/iwhale-ui/iw-menu-tabs-4.png', path: '/pages/shoppingcart/index' }
      ]
  }
})
