// component/backdrop/index.js
Component({
  properties: {
    height: {
      type: Number,
      value: 100
    },
    bgColor: {
      type: String,
      value: '#387DFF'
    },
    fixed: {
      type: Boolean,
      value: false
    },
    zIndex: {
      type: Number,
      value: 0
    }
  },

  data: {
    backdropWrapStyle: '',
    backdropStyle: ''
  },
  lifetimes: {
    attached() {
      this.setBackdropStyle()
      this.setBackdropWrapStyle()
    }
  },
  methods: {
    setBackdropWrapStyle(){
      const backdropWrapStyle = [
        `height:${this.properties.height}rpx`,
        `width:100%`
      ].join(';')
      this.setData({
        backdropWrapStyle: backdropWrapStyle
      })
    },
    setBackdropStyle(){
      const backdropStyle = [
        `position: ${this.properties.fixed?'fixed':'absolute'}`,
        `height:${this.properties.height}rpx`,
        `background: ${this.properties.bgColor}`,
        `width:100%`,
        `z-index:${this.properties.zIndex}`
      ].join(';')
      this.setData({
        backdropStyle: backdropStyle
      })
    }
  }
})
