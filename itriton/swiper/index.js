const config = require('../libs/config.js')
const util = require('../libs/util.js')
const default_data = {
  swiperCurrent: 0,
  swiperCurrentDot: 0
}
const default_properties = {
  list: {
    type: Array,
    value: []
  },
  height: {
    type: String,
    value: '380rpx'
  },
  activeColor: {
    type: String,
    value: config.colors.primary
  },
  //点的形状 可选值为 圆形：circle，正方形：square
  shape: {
    type: String,
    value: 'circle'
  },
  borderRadius: {
    type: String,
    value: '0'
  },
}
Component({
  properties: {
    ...default_properties
  },

  data: {
    ...default_data
  },

  methods: {
    swiperChange: function(e) {
      this.setData({
        swiperCurrent: e.detail.current,
        swiperCurrentDot: e.detail.current
      })
    },
    handleClickItem(e){
      const item = e.currentTarget.dataset.item
      this.triggerEvent('click', item);
    }
  }
})