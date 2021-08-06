// pages/shopping-cart/index.js
const config = require('../../utils/config.js')
import images from '../../utils/images.js'
Page({
  data: {
    ...config,
    shoppingCartList: [
      {name: '贴布日式圆盘特殊日本木质茶盘', spec: '默认', url: images.goods1, price: '198', num: 1},
      {name: '商务办公用茶-水仙', spec: '一斤装', url: images.goods2, price: '122', num: 2},
    ]
  },
  bindInputNumber(e){
    const num = e.detail.value
    const index = e.currentTarget.dataset.index
    let shoppingCartList = this.data.shoppingCartList
    shoppingCartList[index].num = num
    this.setData({
      shoppingCartList
    })
  },
  confirm(){
    console.log('去结算')
  }
})