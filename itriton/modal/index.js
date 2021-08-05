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
    hidden: {
      type: Boolean,
      value: true
    },
    content: {
      type: String,
      value: ''
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    cancelColor: {
      type: String,
      value: '#000000'
    },
    confirmText: {
      type: String,
      value: '确认'
    },
    confirmColor: {
      type: String,
      value: '#44b549'
    },
  },
  data:{
    visible: false
  },
  lifetimes: {
    attached() {
      this.setData({
        visible: this.properties.hidden
      })
    }
  },
  methods: {
    toggle() {
      if (this.data.visible) {
        this.hide()
      } else {
        this.show()
      }
    },
    show(){
      this.setData({
        visible: true
      })
    },
    hide(){
      this.setData({
        visible: false
      })
    },
    handleCancel(){
      this.triggerEvent('cancel', {});
    },
    handleConfirm() {
      this.triggerEvent('confirm', {});
    },
    _catchtap(){}
  }
})