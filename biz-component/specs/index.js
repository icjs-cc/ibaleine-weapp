// component/specs/index.js
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    mainColor: {
      type: String,
      default: ''
    },
    subColor: {
      type: String,
      default: ''
    }
  },
  data: {
    skuList:[
      {
        id: "1",
        name: "颜色",
        children: [
          {name: "灰色"},
          {name: "白色"}
        ]
      },
      {
        id: "2",
        name: "产地",
        children: [
          {name: "南京"},
          {name: "东郡"}
        ]
      },
      {
        id: "3",
        name: "尺寸",
        children: [
          {name: "ML"},
          {name: "XL"}
        ]
      }
    ]
  },
  attached(){
    // this.showSpecs()
  },
  methods: {
    showSpecs(){
      this.selectComponent("#popup").show()
    },
    hideSpecs(){
      this.selectComponent("#popup").hide()
    },
  }
})
