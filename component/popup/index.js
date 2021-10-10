// component/popup/index.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    bottom: {
      type: String,
      value: '110rpx'
    }
  },
  data: {
    visible: false,
    wrapAnimate: 'wrapAnimate',
    bgOpacity: 0,
    frameAnimate: 'frameAnimate',
  },
  methods: {
    toggle(){
      if(this.data.visible){
        this.hide()
      }else{
        this.show()
      }
    },
    show() {
      this.setData({
        visible: true,
        wrapAnimate: 'wrapAnimate',
        frameAnimate: 'frameAnimate'
      })
    },
    hide() {
      this.setData({
        wrapAnimate: 'wrapAnimateOut',
        frameAnimate: 'frameAnimateOut'
      });
      setTimeout(() => {
        this.setData({
          visible: false
        })
        clearTimeout()
      }, 400)
    },
    _catchtap() {},
    _showEvent() {
      this.triggerEvent("show")
    },
    _hideEvent() {
      this.triggerEvent("hide")
    }
  }
})