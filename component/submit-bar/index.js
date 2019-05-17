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
    color:{
      type: String,
      value: '#fff'
    },
    loading: {
      type: Boolean,
      value: false
    }
  },

  data: {

  },

  methods: {
    handleClick(e) {
      if (this.data.loading) return false;
      this.triggerEvent('submit');
    }
  }
})
