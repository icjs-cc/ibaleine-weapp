// pages/mine/gzh/index.js
const app = getApp()
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
    wechatCode: "wxid_3s6q6ffh7z8k21"
  },
  copyWechatCode(){
    this.$setClipboardData(this.data.wechatCode).then(()=>{
      this.$showToast("复制成功")
    })
  }
})