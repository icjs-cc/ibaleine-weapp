// biz-component/page/index.js
Component({
  properties: {
    defaultLoading: {
      type: Boolean,
      value: true
    },
  },
  data: {
    loading: true
  },
  attached(){
    this.setData({
      loading: this.properties.defaultLoading
    })
  },
  methods: {
    showLoading(){
      this.setData({
        loading: true
      })
    },
    hideLoading(){
      this.setData({
        loading: false
      })
    },
  }
})
