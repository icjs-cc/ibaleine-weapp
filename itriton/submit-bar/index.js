// component/submit-bar/index.js
import {
  safeAreaInset,
  checkIPhoneX
} from '../libs/isIPhoneX'
const config = require('../libs/config.js')
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
    left: {
      type: String,
      value: ''
    },
    center: {
      type: String,
      value: ''
    },
    text: {
      type: String,
      value: ''
    },
    bgcolor: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: '#fff'
    },
    loading: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    full: {
      type: Boolean,
      value: false
    },
    self: {
      type: Boolean,
      value: false
    },
    border:{
      type: Boolean,
      value: false
    },
    zIndex:{
      type: Number,
      value: 1
    },
    safeArea: {
      type: Boolean,
      value: false
    }
  },

  data: {
    colors: {
      ...config.colors
    }
  },
  attached() {
    console.log(this.properties.safeArea)
    if (this.properties.safeArea) {
      this.setData({
        isIphoneX: checkIPhoneX(),
        safeAreaInset: checkIPhoneX() ? safeAreaInset : 0
      })
    }
  },
  methods: {
    handleClick(e) {
      if (this.data.loading || this.data.disabled) return false;
      this.triggerEvent('submit');
    }
  }
})