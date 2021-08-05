const default_properties = {
  list: {
    type: Array,
    value: []
  },
  color:{
    type: String,
    value: '#333333'
  },
  scrollX:{
    type: Boolean,
    value: false
  },
  column:{
    type: Number,
    value: 4
  }
}
Component({
  properties: {
    ...default_properties
  },
  methods: {
    handleClickItem(e) {
      const item = e.currentTarget.dataset.item
      this.triggerEvent('click', item)
    }
  }
})
