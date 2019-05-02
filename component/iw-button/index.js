const config = require('../libs/config.js')
Component({
  externalClasses: ['iw-class'],

  properties: {
    // default, primary, ghost, info, success, warning, error
    type: {
      type: String,
      value: config.colors.primary,
    },
    customBackground: {
      type: String,
      value: ''
    },
    customColor:{
      type: String,
      value: ''
    },
    // default, large, small
    size: {
      type: String,
      value: '',
    },
    // circle, square
    shape: {
      type: String,
      value: 'square'
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    long: {
      type: Boolean,
      value: false
    },
    openType: String,
    formType: String,
    appParameter: String,
    hoverStopPropagation: Boolean,
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    lang: {
      type: String,
      value: 'en'
    },
    sessionFrom: {
      type: String,
      value: ''
    },
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean
  },
  data: {
    colors:{
      ...config.colors
    }
  },
  methods: {
    handleTap() {
      if (this.data.disabled) return false;
      this.triggerEvent('click');
    }
  }
});