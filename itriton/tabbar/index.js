import { safeAreaInset, checkIPhoneX } from '../libs/isIPhoneX'
Component({
  properties: {
    tabbar: {
      type: Object,
      value: {}
      // {
      //   "backgroundColor": "#ffffff",
      //   "color": "#979795",
      //   "selectedColor": "#1c1c1b",
      //   "list": [
      //     {
      //       "pagePath": "pages/index/index",
      //       "iconPath": "icon/home_unselected.png",
      //       "selectedIconPath": "icon/home_selected.png",
      //       "text": "首页"
      //     },
      //     {
      //       "pagePath": "pages/middle/middle",
      //       "iconPath": "icon/icon_release.png",
      //       "isSpecial": true,
      //       "text": "发布"
      //     },
      //     {
      //       "pagePath": "pages/mine/index",
      //       "iconPath": "icon/mine_unselected.png",
      //       "selectedIconPath": "icon/mine_selected.png",
      //       "text": "我的"
      //     }
      //   ]
      // }
    }
  },

  data: {
    isIphoneX: false
  },
  attached(){
    wx.hideTabBar()
    this.setData({
      tabbarObject: this.properties.tabbar,
      isIphoneX: checkIPhoneX()
    })
    this.setcurrentPage()
  },
  methods: {
    handleClick(e){
      if(e.currentTarget.dataset.item.isSpecial){
        this.triggerEvent('click', e.currentTarget.dataset.item)
      }else{
        this.setcurrentPage()
        wx.switchTab({
          url: e.currentTarget.dataset.url,
        })
      }
    },
    setcurrentPage(){
      let tabbar = this.data.tabbar
      let currentPages = getCurrentPages();
      let pagePath = currentPages[currentPages.length - 1].route;
      (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
      for (let i in tabbar.list) {
        tabbar.list[i].selected = false;
        (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true)
      }
      this.setData({
        tabbarObject: this.properties.tabbar
      })
    }
  }
})
