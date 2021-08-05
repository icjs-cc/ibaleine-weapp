// component/dot/index.js
Component({
  properties: {
    color: {
      type: String,
      value: '#2d8cf0'
    },
    text: {
      type: String,
      value: ''
    },
    processing:{
      type: Boolean,
      value: false
    }
  },
  observers: {
    'color': function (newVal, oldVal) {
      this.setStatusDotStyle()
    }
  },
  lifetimes:{
    attached(){
      this.setStatusDotStyle()
    }
  },
  methods: {
    setStatusDotStyle(){
      const statusDotStyle = [
        `border:0.5rpx solid ${this.properties.color}`,
        `background-color: ${this.properties.color}`
      ].join(';')

      const statusDotProcessingStyle = [
        `border:0.5rpx solid ${this.properties.color}`,
        `box-shadow: 1rpx 1rpx 10rpx ${this.properties.color}`
      ].join(';')

      this.setData({
        statusDotStyle: statusDotStyle,
        statusDotProcessingStyle: statusDotProcessingStyle
      })
    }
  }
})
