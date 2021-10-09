// pages/login/index.js
import WxValidate from '../../utils/wx-validate'
import { login, getUserInfo } from '../../utils/api/modules/security'
const app = getApp()
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
    formData:{
      username: null,
      password: null
    },
    loading: false
  },
  login(){
    let formData = this.clone(this.data.formData)
    if (!this.wxValidate.checkForm(formData)) {
      const error = this.wxValidate.errorList[0]
      this.$showToast(error.msg)
      return false
    }
    this.setData({loading: true})
    login(formData).then(res=>{
      if(res.success){
        const token = res.data.authorization
        this.setStorage("token", token)
        getUserInfo({userId: res.data.userId}).then(res=>{
          if(res.success){
            const userInfo = res.data.user
            this.setStorage("userInfo", userInfo)
            let loginAccount = this.getStorage('loginAccount')||[]
            const existIndex = this.objectIndexInArray(loginAccount, userInfo, 'userId')
            if(existIndex===-1){
              loginAccount.push({
                token,
                ...userInfo
              })
            }else{
              loginAccount.splice(existIndex, 1, {
                token,
                ...userInfo
              })
            }
            this.setStorage("loginAccount", loginAccount)
            this.routeToHome()
          }
        })
      }else{
        this.$showToast(res.message)
      }
    }).finally(()=>{
      this.setData({loading: false})
    })
  },
  initValidate() {
    const rules = {
      username: {
        required: true
      },
      password: {
        required: true
      }
    }
    const messages = {
      username: {
        required: '请填写帐号'
      },
      password: {
        required: '请填写密码'
      }
    }
    this.wxValidate = new WxValidate(rules, messages)
  },
  onLoad(options) {
    this.initValidate()
  }
})