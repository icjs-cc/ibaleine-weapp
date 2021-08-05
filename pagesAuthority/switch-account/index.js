// pages/mine/switch-account/index.js
const config = require('../../utils/config.js')
import {
  routeToHome,
  routeToLogin
} from '../../utils/router'
import { getStore, setStore } from '../../utils/storage'
import { showActionSheet, toast } from '../../utils/common'
Page({
  routeToHome,
  routeToLogin,
  data: {
    ...config,
    loginAccount: [],
    userInfo: {}
  },
  switchAccount(e){
    const userInfo = e.currentTarget.dataset.item
    setStore('token', userInfo.token)
    setStore('userInfo', userInfo)
    setStore('isSwitchAccount', true)
    this.setData({userInfo})
  },
  handleDelete(e){
    const item = e.currentTarget.dataset.item
    const index = e.currentTarget.dataset.index
    showActionSheet(['删除账号'], res => {
      if (res.tapIndex == 0) {
        let loginAccount = this.data.loginAccount
        const userInfo = this.data.userInfo
        if(userInfo.userId === loginAccount[index].userId){
          this.$showToast('请先切换到其他账号再进行删除操作')
        }else{
          loginAccount.splice(index,1)
          setStore('loginAccount',loginAccount)
        }
        this.setData({loginAccount})
      }
    })
  },
  onLoad(){
    const loginAccount = getStore('loginAccount')||[]
    const userInfo = getStore('userInfo')
    this.setData({loginAccount,userInfo})
  }
})