// component/signal/index.js
Component({
  properties: {
    //大小
    size: {
      type: String,
      value: '100rpx'
    },
    //背景颜色
    bgColor: {
      type: String,
      value: 'rgba(255,255,255,0)'
    },
    //总的信号数
    count: {
      type: Number,
      value: 3
    },
    // 默认信号颜色
    normalColor: {
      type: String,
      value: '#ccc'
    },
    // 信号强度
    activeIndex: {
      type: Number,
      value: 0
    },
    // 有信号时颜色
    activeColor: {
      type: String,
      value: '#000'
    }
  }
})
