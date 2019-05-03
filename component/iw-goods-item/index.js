// 商品卡片
const config = require('../libs/config.js')
const default_data = {
  swiperCurrent: 0
}
const default_properties = {
  //商品标题
  title: {
    type: String,
    value: ''
  },
  //商品图片
  thumb: {
    type: String,
    value: ''
  },
  //商品原价
  primeCost: {
    type: String,
    value: ''
  },
  //商品售价
  price: {
    type: String,
    value: ''
  },
  // 商品售价价格 default, primary, ghost, info, success, warning, error
  priceColor:{
    type: String,
    value: 'error'
  },
  //商品标签
  tag: {
    type: String,
    value: ''
  },
  //商品销量
  sales: {
    type: String,
    value: ''
  },
  //原价显示
  primeCostVisible: {
    type: null,
    value: ''
  },
  //底部标签、销量显示
  footerVisible:{
    type: null,
    value: ''
  }
}
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    ...default_properties
  },
  data: {
    colors: {
      ...config.colors
    }
  }
})
