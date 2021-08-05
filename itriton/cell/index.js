// component/cell/index.js
const util = require('../libs/util.js')
Component({
  externalClasses: ['t-class'],
  options: {
    multipleSlots: true
  },
  relations: {
    '../cell-group/index': {
      type: 'parent'
    }
  },
  properties: {
    // 左侧标题
    title: {
      type: String,
      value: ''
    },
    //图标
    icon: {
      type: null,
      value: ''
    },
    // 标题下方的描述信息
    label: {
      type: String,
      value: ''
    },
    // 右侧内容
    value: {
      type: String
    },
    // 只有点击 footer 区域才触发 tab 事件
    onlyTapFooter: {
      type: Boolean,
      value: ''
    },
    // 是否展示右侧箭头并开启尝试以 url 跳转
    isLink: {
      type: null,
      value: ''
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    url: {
      type: String,
      value: ''
    },
    openType: String,
    border: {
      type: Boolean,
      value: false
    },
    required: {
      type: String,
      value: ''
    }
  },

  data: {
    isLastCell: true
  },
  methods: {
    ...util,
    navigateTo() {
      const {
        url
      } = this.data;
      const type = typeof this.data.isLink;

      this.triggerEvent('click', {});

      if (!this.data.isLink || !url || url === 'true' || url === 'false') return;

      if (type !== 'boolean' && type !== 'string') {
        this.logWarn('isLink 属性值必须是一个字符串或布尔值', this.data.isLink);
        return;
      }

      if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.data.linkType) === -1) {
        this.logWarn('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', this.data.linkType);
        return;
      }
      wx[this.data.linkType].call(wx, {
        url
      });
    },
    handleTap() {
      if (!this.data.onlyTapFooter) {
        this.navigateTo();
      }
    },
    updateIsLastCell(isLastCell) {
      this.setData({
        isLastCell
      });
    }
  }
});