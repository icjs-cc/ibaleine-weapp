// component/search-bar/index.js
import { rpx2px } from '../libs/util.js'
Component({

  properties: {
    fixed: {
      type: '',
      value: false
    },
    placeholder: {
      type: '',
      value: '请输入关键字搜索'
    },
    isBorder: {
      type: Boolean,
      value: true
    }
  },

  data: {
    inputVal: '',
    size: 14
  },
  attached(){
    this.setData({
      size: rpx2px(28)
    })
  },
  methods: {
    handleInput(e) {
      const value = e.detail.value
      this.triggerEvent('search', {
        value: value
      })
      this.setData({
        inputVal: value
      })
    },
    handleClear(){
      this.triggerEvent('search', {
        value: ''
      })
      this.setData({
        inputVal: ''
      })
    }
  }
})