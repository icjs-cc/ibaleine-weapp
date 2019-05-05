// 滑动功能栏
const util = require('../libs/util.js')
const default_data = {
  swiperCurrent: 0
}
const default_properties = {
  menus: {
    type: Array,
    value: []
  },
  color:{
    type: String,
    value: '#000'
  },
  //点的形状 可选值为 圆形：circle，圆角： square
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
  }
}
Component({
  properties: {
    ...default_properties
  },
  methods: {
    handleClickItem(e) {
      const path = e.currentTarget.dataset.path
      // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
      const linkType = e.currentTarget.dataset.linktype || 'navigateTo'
      if (!util.isEmpty(path)) {
        const type = typeof this.data.isLink;
        this.triggerEvent('click', e.currentTarget.dataset);
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
