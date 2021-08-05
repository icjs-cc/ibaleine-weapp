// pages/mine/update-password/index.js
import WxValidate from '../../utils/wx-validate.js'
import { updatePassword } from '../../utils/api/modules/security.js'
const collection = require('../../utils/collection.js')
const config = require('../../utils/config.js')
Page({
  ...collection,
  data: {
    ...config,
    formData: {
      oldPassword: '',
      newPassword: '',
      reEntPassword: ''
    },
    loading: false
  },
  initValidate() {
    const rules = {
      oldPassword: {
        required: true
      },
      newPassword: {
        required: true,
        minlength: 6,
        maxlength: 18
      },
      reEntPassword: {
        required: true
      }
    }
    const messages = {
      oldPassword: {
        required: '请填写旧密码'
      },
      newPassword: {
        required: '请填写新密码',
        minlength: '密码长度为6 - 18个字符哦～',
        maxlength: '密码长度为6 - 18个字符哦～'
      },
      reEntPassword: {
        required: '请再次填写新密码'
      }
    }
    this.wxValidate = new WxValidate(rules, messages)
  },
  confirm() {
    let formData = this.data.formData
    if (!this.wxValidate.checkForm(formData)) {
      const error = this.wxValidate.errorList[0]
      this.$showToast(error.msg)
      return false
    }
    if (formData.newPassword != formData.reEntPassword) {
      this.$showToast('两次填写密码不一致哦～')
      return
    }
    this.setData({
      loading: true
    })
    updatePassword({
      ...formData,
      username: this.getStore('userInfo').username
    }).then(res => {
      if (res.success) {
        this.$showToast('修改密码成功')
        this.setData({
          formData: {
            oldPassword: '',
            newPassword: '',
            reEntPassword: ''
          }
        })
      } else {
        this.$showToast(res.message || '修改密码失败')
      }
    }).catch(error => {
      this.$showToast(error)
    }).finally(()=>{
      this.setData({
        loading: false
      })
    })
  },
  onLoad(options) {
    this.initValidate()
  }
})