// pagesMine/address/list/index.js
const app = getApp()
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
  },
  handleOperate(e) {
    console.log(e)
    this.$showActionSheet(["编辑", "删除"]).then(res => {
      if (res.errMsg === "showActionSheet:ok") {
        if (res.tapIndex === 0) {
          this.handleEdit(e)
        }else{
          console.info("删除")
        }
      }
    })
  },
  handleEdit(e){
    this.router("/pagesMine/address/add-edit/index?type=u")
  }
})