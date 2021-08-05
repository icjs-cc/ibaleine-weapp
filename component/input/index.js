// biz-components/input/index.js
Component({
  externalClasses: ['t-class'],
  properties: {
    type: {
      type: String,
      value: 'text'
    },
    password: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ''
    },
    placeholder:{
      type: String,
      value: ''
    },
    disabled:{
      type: Boolean,
      value: false
    },
    unit: {
      type: String,
      value: ''
    },
    width: {
      type: Number,
      value: 180
    },
    height: {
      type: Number,
      value: 35
    },
    textAlign:{
      type: String,
      value: 'left'
    }, 
    focusColor: {
      type: String,
      value: '#387dff'
    },
    required:{
      type: String,
      value: ''
    }
  },

  data: {
    isFocus: false
  },

  methods: {
    bindinput(e){
      this.triggerEvent('input', e.detail);
    },
    bindfocus(){
      this.setData({
        isFocus: true
      })
    },
    bindblur(){
      this.setData({
        isFocus: false
      })
    }
  }
})
