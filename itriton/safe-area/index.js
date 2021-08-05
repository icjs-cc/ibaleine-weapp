// component/safe-area/index.js
import { safeAreaInset, checkIPhoneX } from '../libs/isIPhoneX'
Component({
  properties: {

  },

  data: {

  },
  attached() {
    this.setData({
      isIphoneX: checkIPhoneX(),
      safeAreaInset: checkIPhoneX() ? safeAreaInset : 0
    })
  },
  methods: {

  }
})
