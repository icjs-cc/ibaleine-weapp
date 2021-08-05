// pages/mine/gzh/index.js
const config = require('../../utils/config.js')
const collection = require('../../utils/collection.js')
Page({
  ...collection,
  data: {
    ...config,
    wechatCode: "wxid_3s6q6ffh7z8k21"
  },
  copyWechatCode(){
    this.$setClipboardData(this.data.wechatCode).then(()=>{
      this.$showToast("复制成功")
    })
  }
})