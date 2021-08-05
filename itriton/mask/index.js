// component/modal/index.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    hidden: {
      type: Boolean,
      value: true
    },
    opacity:{
      type: String,
      value:'.5'
    }
  },
  data:{
    visible: false
  },
  lifetimes: {
    attached() {
      this.setData({
        visible: !this.properties.hidden
      })
    }
  },
  methods:{
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
    _catchtap() { }
  }
})