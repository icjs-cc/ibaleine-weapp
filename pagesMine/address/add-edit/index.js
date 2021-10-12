// pagesMine/address/add-edit/index.js
const app = getApp()
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
    type: 'c'
  },
  handleOperate(){
    this.$showActionSheet(["编辑","删除"]).then(res=>{
      console.log(res)
    })
  },
  onLoad({type}){
    this.setData({type})
  }
})