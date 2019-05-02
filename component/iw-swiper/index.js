const config = require('../libs/config.js')
const util = require('../libs/util.js')
const default_data = {
  swiperCurrent: 0,
  swiperCurrentDot: 0
}
const default_properties = {
  swipers: {
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
  //点的形状 可选值为 圆形：circle，椭圆形：oval
  shape: {
    type: String,
    value: 'circle'
  },
  // 需要跳转的页面地址
  path: {
    type: String,
    value: ''
  },
  // 是否展示右侧箭头并开启尝试以 path 跳转
  isLink: {
    type: null,
    value: ''
  },
  // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
  linkType: {
    type: String,
    value: 'navigateTo'
  }
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
      const path = e.currentTarget.dataset.path
      // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
      const linkType = e.currentTarget.dataset.linktype || 'navigateTo'
      if (!util.isEmpty(path)) {
        const type = typeof this.data.isLink;
        this.triggerEvent('click', {});
        if (!this.data.isLink || !path || path === 'true' || path === 'false') return;
        if (type !== 'boolean' && type !== 'string') {
          util.logWarn('isLink 属性值必须是一个字符串或布尔值', this.data.isLink);
          return;
        }
        if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(linkType) === -1) {
          util.logWarn('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', linkType);
          return;
        }
        wx[linkType].call(wx, { url: path });
      }
    }
  }
})