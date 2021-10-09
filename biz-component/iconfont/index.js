// biz-component/iconfont/index.js
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    icon: {
      type: String,
      value: ''
    },
    size: {
      type: String,
      value: '32rpx'
    },
    color: {
      type: String,
      value: '#000'
    },
    fontWeight: {
      type: String,
      value: 'normal'
    }
  },

  data: {
    iconStyle: ''
  },

  lifetimes: {
    attached() {
      this.setIconStyle()
    }
  },

  methods: {
    setIconStyle(){
      let iconStyle = [
        `font-size:${this.properties.size}`,
        `color:${this.properties.color}`,
        `height: ${this.properties.size}`,
        `width: ${this.properties.size}`,
        `font-weight:${this.properties.fontWeight}`
      ].join(';')
      this.setData({
        iconStyle: iconStyle
      })
    }
  }
})
