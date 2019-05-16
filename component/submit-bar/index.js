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
    },
    disabled:{
      type: Boolean,
      value: false
    }
  },

  data: {

  },

  methods: {
    handleClick(e) {
      console.log(this.data.disabled)
      if (this.data.loading) return false;
      this.triggerEvent('submit');
    }
  }
})
