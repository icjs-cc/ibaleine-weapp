// component/submit-bar/index.js
import {
  safeAreaInset,
  checkIPhoneX
} from '../libs/isIPhoneX'
const config = require('../libs/config.js')
Component({
  externalClasses: ['iw-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    type: {
      type: String,
      value: 'primary'
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