// pages/nav-bar/nav-bar.js

Component({
  options: {
    multipleSlots: true
  },
  properties: {
    background: {
      type: String,
      value: 'rgba(255, 255, 255, 1)'
    },
    type: {
      type: String,
      value: 'light'
    },
    btnColor: {
      type: String,
      value: 'rgba(255, 255, 255, 1)'
    },
    textColor: {
      type: String,
      value: 'rgba(0, 0, 0, 1)'
    },
    title: {
      type: String,
      value: ''
    },
    visible: {
      type: Boolean,
      value: true
    },
    left: {
      type: String,
      value: ''
    }
  },
  lifetimes:{
    ready() {
      this.setNavSize()
      this.setStyle()
    },
  },
  data: {
    fontSize: 16
  },
  methods: {
    // 通过获取系统信息计算导航栏高度
    setNavSize() {
      let sysinfo = wx.getSystemInfoSync(),
        statusHeight = sysinfo.statusBarHeight,
        isiOS = sysinfo.system.indexOf('iOS') > -1,
        navHeight;
      if (!isiOS) {
        navHeight = 48;
      } else {
        navHeight = 44;
      }
      this.setData({
        status: statusHeight,
        navHeight: navHeight
      })
    },
    setStyle() {
      let containerStyle, textStyle, iconStyle;
      containerStyle = [
        'background:' + this.data.background
      ].join(';');
      textStyle = [
        'color:' + this.data.textColor,
        'font-size:' + this.data.fontSize + 'px'
      ].join(';');
      iconStyle = [
        'width: ' + this.data.iconWidth + 'px',
        'height: ' + this.data.iconHeight + 'px'
      ].join(';');
      this.setData({
        containerStyle: containerStyle,
        textStyle: textStyle,
        iconStyle: iconStyle
      })
    },
    bindToBack() {
      const pages = getCurrentPages();
      if (pages.length > 1) {
        wx.navigateBack({
          delta: 1
        })
      }
      this.triggerEvent('back', {
        back: 1
      })
    },
    bindToHome() {
      this.triggerEvent('home', {});
    },
    leftClick() {
      this.triggerEvent('left', {});
    }
  }
})