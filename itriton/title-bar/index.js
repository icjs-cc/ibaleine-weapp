// component/title-bar/index.js
const config = require('../libs/config.js')
const util = require('../libs/util.js')
Component({
  externalClasses: ['t-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    type: {
      type: String,
      value: 'primary'
    },
    color: {
      type: String,
      value: ''
    },
    //形状 可选值为 圆形：circle，线： line
    shape: {
      type: String,
      value: 'circle'
    },
    title: {
      type: String,
      value: ''
    },
    height: {
      type: String,
      value: ''
    },
    bgColor:{
      type: String,
      value: 'rgba(255,255,255,0)'
    },
    extra:{
      type: String,
      value: ''
    }
  },
  data: {
    colors: {
      ...config.colors
    }
  },
  methods: {
    ...util,
    handleClick(e) {
      this.triggerEvent('click', {})
    }
  }
})
