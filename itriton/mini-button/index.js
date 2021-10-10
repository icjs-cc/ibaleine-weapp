// component/mini-button/index.js
Component({
  properties: {
    fontSize:{
      type: String,
      value: '28rpx'
    },
    bgColor:{
      type: String,
      value: '#E1F5FE'
    },
    color: {
      type: String,
      value: '#387DFF'
    },
    border:{
      type: String,
      value: '#387DFF'
    },
    // circle, square
    shape: {
      type: String,
      value: 'square'
    },
    height: {
      type: Number,
      value: 50
    }
  },

  data: {
    buttonStyle: ''
  },
  lifetimes: {
    attached() {
      this.setButtonStyle()
    }
  },
  methods: {
    setButtonStyle(){
      const buttonStyle = [
        `font-size:${this.properties.fontSize}`,
        `background: ${this.properties.bgColor}`,
        `border: 1rpx solid ${this.properties.border}`,
        `color: ${this.properties.color}`,
        `border-radius:${this.properties.shape == 'circle' ? (this.properties.height / 1.8):10}rpx`,
        `line-height:${this.properties.height}rpx`,
        `opacity: ${this.properties.opacity}`
      ].join(';')
      this.setData({
        buttonStyle: buttonStyle
      })
    }
  }
})
