// component/check-box/index.js
Component({
  externalClasses: ['t-class'],
  options: {
    addGlobalClass: true
  },
  properties: {
    checkboxArray: {
      type: Array,
      value: []
    },
    color: {
      type: String,
      value: '#387DFF'
    }
  },
  data: {
    activeStyle: ''
  },
  lifetimes: {
    attached() {
      this.setActiveStyle()
    }
  },
  methods: {
    setActiveStyle() {
      const activeStyle = [
        `color:${this.properties.color}`,
        `border: 1rpx solid ${this.properties.color}`
      ].join(';')
      this.setData({
        activeStyle: activeStyle
      })
    },
    bindtap(e){
      this.triggerEvent('click', {...e.currentTarget.dataset})
    }
  }
})