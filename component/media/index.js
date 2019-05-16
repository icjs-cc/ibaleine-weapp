// component/media/index.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    thumb:{
      type: String,
      value:''
    },
    title: {
      type: String,
      value: ''
    },
    lineClamp4Title:{
      type: Number,
      value: 1
    },
    desc: {
      type: String,
      value: ''
    },
    lineClamp4Desc:{
      type: Number,
      value: 1
    },
    position:{
      type: String,
      value: 'left'
    },
    thumbStyle: {
      type: String,
      value: ''
    }
    
  },

  data: {

  },

  methods: {

  }
})
