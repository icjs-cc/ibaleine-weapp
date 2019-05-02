// pages/navbar/index.js
import WxValidate from '../../utils/wx-validate.js'
const util = require('../../utils/util.js')
Page({
  data: {
    loading: false,
    loginText: '登录',
    formData:{
      username:'',
      password:'',
      captcha:''
    },
    inputNumber: 0
  },
  handleInputChange(e) {
    let formData = this.data.formData
    let param = e.target.dataset.param
    let value = e.detail.detail.value
    formData[param] = value
    this.setData({
      formData: formData
    })
  },
  handleInputNumber(e) {
    const value = e.detail.value
    this.setData({
      inputNumber: value
    })
  },
  handle2Home(){
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },
  handleLogin(){
    let formData = this.data.formData
    //校验表单
    if (!this.wxValidate.checkForm(formData)) {
      const error = this.wxValidate.errorList[0]
      util.showToast(error.msg)
      return false
    }
    this.setData({
      loading: true,
      loginText: '提交中...'
    })
    setTimeout(()=>{
      util.showToast('提交成功')
      this.setData({
        loading: false,
        loginText: '登录'
      })
    },1000)
  },
  initValidate() {
    const rules = {
      username: {
        required: true,
        minlength: 1
      },
      password: {
        required: true,
        minlength: 1
      },
      captcha: {
        required: true,
        minlength: 1
      }
    }
    const messages = {
      username: {
        required: '请填写手机号或邮箱',
        minlength: '请输入正确的手机号或邮箱'
      },
      password: {
        required: '请填写密码',
        minlength: '请输入正确的密码'
      },
      captcha: {
        required: '请填写验证码',
        minlength: '请输入正确的验证码'
      }
    }
    this.wxValidate = new WxValidate(rules, messages)
  },
  onLoad: function (options) {
    this.initValidate()
  }
})