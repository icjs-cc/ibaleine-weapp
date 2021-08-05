// biz-component/collapse/index.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    }
  },
  data: {
    animationData: {},
    visible: false
  },
  methods: {
    toggle(){
      const visible = this.data.visible
      if (visible){
        this.hide()
      }else{
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
    }
  }
})
