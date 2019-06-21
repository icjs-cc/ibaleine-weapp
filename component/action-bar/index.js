// component/action-bar/index.js
import { safeAreaInset, checkIPhoneX } from '../libs/isIPhoneX'
const config = require('../libs/config.js')
Component({
  externalClasses: ['iw-class'],
  properties: {
    //小按钮数组 [{image:'',name:'',type:'',color:'',num:''}]
    miniBtnArray:{
      type: Array,
      value: []
    },
    //大按钮数组 [{name:'',type:'',color:'',bgcolor:'',loading: false, disabled: false}]
    bigBtnArray:{
      type: Array,
      value: []
    },
    safeArea:{
      type: Boolean,
      value: false
    }
  },

  data: {
    colors: {
      ...config.colors
    }
  },
  attached() {
    if (this.properties.safeArea){
      this.setData({
        isIphoneX: checkIPhoneX(),
        safeAreaInset: checkIPhoneX() ? safeAreaInset : 0
      })
    }
  },
  methods: {
    handleTap(e) {
      const dataset = e.currentTarget.dataset
      this.triggerEvent('mini', { ...dataset });
    },
    handleClick(e){
      const dataset = e.currentTarget.dataset
      if (dataset.item.loading || dataset.item.disabled) return false;
      this.triggerEvent('big', { ...dataset } );
    }
  }
})
