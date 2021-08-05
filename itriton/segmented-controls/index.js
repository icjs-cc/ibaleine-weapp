// component/segmented-controls/index.js
Component({
  properties: {
    controls:{
      type: Array,
      value: []
    },
    bgcolor: {
      type: String,
      value: '#00bcff'
    },
    color: {
      type: String,
      value: '#ffffff'
    },
    active:{
      type: Array,
      value: []
    }
  },
  methods: {
    changeControls(e){
      this.triggerEvent('change', {
        value: e.currentTarget.dataset.item
      })
    }
  }
})
