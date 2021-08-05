// component/filter-search/index.js
Component({
  properties: {
    fixed: {
      type: '',
      value: false
    },
    filterValue: {
      type: String,
      value: ''
    },
    filterKey: {
      type: String,
      value: 'name'
    },
    filterPickerData:{
      type: Array,
      value: []
    },
    filterPlaceholder: {
      type: String,
      value: '请选择筛选条件'
    },
    searchValue: {
      type: String,
      value: ''
    },
    searchPlaceholder: {
      type: String,
      value: '请输入关键字搜索'
    },
  },
  data(){
    inputValue: ''
  },
  ready(){
    this.setData({
      inputValue: this.properties.searchValue
    })
  },
  methods: {
    bindFilterChange(e){
      const value = e.detail.value
      if (this.properties.filterPickerData.length){
        this.triggerEvent('filter', {
          index: value,
          item: this.properties.filterPickerData[value]
        })
      }
    },
    handleInput(e) {
      const value = e.detail.value
      this.triggerEvent('search', {
        value: e.detail.value
      })
      this.setData({
        inputValue: value
      })
    },
    handleClear(){
      this.setData({
        inputValue: ''
      })
      console.log(this.data.inputValue)
      this.triggerEvent('search', {
        value:''
      })
    }
  }
})