// component/card/index.js
Component({
  externalClasses: ['iw-class'],

  options: {
    multipleSlots: true
  },

  properties: {
    header: {
      type: null,
      value: ''
    },
    full: {
      type: Boolean,
      value: false
    },
    thumb: {
      type: String,
      value: ''
    },
    circle: {
      type: null,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    color:{
      type: String,
      value: '#000'
    },
    extra: {
      type: String,
      value: ''
    },
    border:{
      type: null,
      value: ''
    },
    //底部标签、销量显示
    footer: {
      type: null,
      value: ''
    }
  }
});
