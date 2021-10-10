// component/modal/index.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: '提示'
    },
    show: {
      type: Boolean,
      value: false
    },
    content: {
      type: String,
      value: ''
    },
    loading: {
      type: Boolean,
      value: false
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    color: {
      type: String,
      value: '#387DFF'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmText: {
      type: String,
      value: '确认'
    },
    top:{
      type: String,
      value: '40%'
    },
    right:{
      type: Boolean,
      value: false
    }
  },
  data: {
    visible: false
  },
  lifetimes: {
    attached() {
      this.setData({
        visible: this.properties.show
      })
      this.setCancelStyle()
      this.setConfirmStyle()
    }
  },
  methods: {
    setCancelStyle(){
      const cancelStyle = [
        `border:1rpx solid ${this.properties.color}`,
        `color:${this.properties.color}`
      ].join(';')
      this.setData({
        cancelStyle: cancelStyle
      })
    },
    setConfirmStyle(){
      const confirmStyle = [
        `border:1rpx solid ${this.properties.color}`,
        `background:${this.properties.color}`,
        `color:#FFF`
      ].join(';')
      this.setData({
        confirmStyle: confirmStyle
      })
    },
    toggle() {
      if (this.data.visible) {
        this.hide()
      } else {
        this.show()
      }
    },
    show() {
      this.setData({
        visible: true
      })
    },
    hide() {
      this.setData({
        visible: false
      })
    },
    cancel() {
      this.hide()
      this.triggerEvent('cancel', {})
    },
    confirm() {
      if (this.properties.loading) return false;
      this.triggerEvent('confirm', {})
    },
    _catchtap() { }
  }
})