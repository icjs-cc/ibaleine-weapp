Component({
  behaviors: ['wx://form-field'],
  externalClasses: ['t-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String
    },
    // text || textarea || password || number
    type: {
      type: String,
      value: 'text'
    },
    required: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    border: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    },
    autofocus: {
      type: Boolean,
      value: false
    },
    mode: {
      type: String,
      value: 'normal'
    },
    right: {
      type: Boolean,
      value: false
    },
    error: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number,
      value: -1
    },
    //输入框头部图标
    prefix: {
      type: String,
      value: ''
    },
    //输入框尾部图标
    suffix: {
      type: String,
      value: ''
    },
    captcha: {
      type: String,
      value: ''
    },
    fontWeight: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    handleInputChange(event) {
      const {
        detail = {}
      } = event
      const {
        value = ''
      } = detail;
      this.setData({
        value
      });
      this.triggerEvent('change', {...event.detail})
    },
    handleInputFocus(event) {
      this.triggerEvent('focus', {...event.detail})
    },
    handleInputBlur(event) {
      this.triggerEvent('blur', {...event.detail})
    },
    handleClickSuffix(event) {
      this.triggerEvent('suffix', event)
    }
  }
})