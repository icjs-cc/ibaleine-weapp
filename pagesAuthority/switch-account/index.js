// pages/mine/switch-account/index.js
const app = getApp()
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
    loginAccount: [],
    userInfo: {}
  },
  switchAccount(e){
    const userInfo = e.currentTarget.dataset.item
    this.setStorage('token', userInfo.token)
    this.setStorage('userInfo', userInfo)
    this.setStorage('isSwitchAccount', true)
    this.setData({userInfo})
  },
  handleDelete(e){
    const item = e.currentTarget.dataset.item
    const index = e.currentTarget.dataset.index
    this.showActionSheet(['删除账号'], res => {
      if (res.tapIndex == 0) {
        let loginAccount = this.data.loginAccount
        const userInfo = this.data.userInfo
        if(userInfo.userId === loginAccount[index].userId){
          this.$showToast('请先切换到其他账号再进行删除操作')
        }else{
          loginAccount.splice(index,1)
          this.setStorage('loginAccount',loginAccount)
        }
        this.setData({loginAccount})
      }
    })
  },
  onLoad(){
    const loginAccount = this.getStorage('loginAccount')||[]
    const userInfo = this.getStorage('userInfo')
    this.setData({loginAccount,userInfo})
  }
})