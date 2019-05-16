// component/submit-bar/index.js
Component({
  externalClasses: ['iw-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    text:{
      type: String,
      value: ''
    },
    bgcolor:{
      type: String,
      value: '#f44'
    },
    loading: {
      type: Boolean,
      value: false
    }
  },

  data: {

  },

  methods: {

  }
})
