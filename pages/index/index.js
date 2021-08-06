const config = require('../../utils/config.js')
import images from '../../utils/images.js'
Page({
  data: {
    ...config,
    swiperList: [
      {url: '/images/resource/banner.png', name: '111'}
    ],
    menuList: [
      {url: '/images/resource/icon_classify_1.png', name: '礼品系列'},
      {url: '/images/resource/icon_classify_2.png', name: '印记传承'},
      {url: '/images/resource/icon_classify_3.png', name: '花茶系列'},
      {url: '/images/resource/icon_classify_4.png', name: '办公系列'},
      {url: '/images/resource/icon_classify_5.png', name: '品质茶具'},
      {url: '/images/resource/icon_classify_6.png', name: '存茶收藏'},
      {url: '/images/resource/icon_classify_7.png', name: '预定款'},
      {url: '/images/resource/icon_classify_8.png', name: '更多商品'}
    ],
    goodsList: [
      {url: images.goods1, name: '贴布日式圆盘特殊日本木质茶盘', price: '128.00'},
      {url: images.goods2, name: '商务办公用茶-水仙', price: '198.00'},
      {url: images.goods3, name: '商务办公用茶-肉桂', price: '200.00'},
      {url: images.goods4, name: '家用简约长方竹制茶盘方形干泡盘小号单人竹制整板', price: '218.00'},
    ]
  },
  handleSwiperClick(e){
    console.log(e)
  },
  handleMenuClick(e){
    console.log(e)
  }
})