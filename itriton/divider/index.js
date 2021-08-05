Component({
  externalClasses: ['t-class'],
  properties: {
    width: {
      type: String,
      value: '85%'
    },
    text: {
      type: String,
      value: ''
    },
    color:{
      type: String,
      value: ''
    },
    line: {
      type: Boolean,
      value: true
    },
    loading: {
      type: Boolean,
      value: false
    },
    loadingColor:{
      type: String,
      value: '#2d8cf0'
    }
  }
});