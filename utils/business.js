import {
  getStore
} from "./storage"
import {
  isEmpty
} from "./util"
import { routeToLogin } from "./router"

/**
 * 是否登录
 */
export const isLogin = () => {
  const userInfo = getStore('userInfo')
  if (isEmpty(userInfo)) {
    return false
  }
  return true
}

/**
 * 未登录拦截到登录页
 */
export const noLoginIntercept = () => {
  const userInfo = getStore('userInfo')
  if (isEmpty(userInfo)) {
    routeToLogin()
  }
}

/**
 * 设置页面formData数据
 */
export const bindInputFormData = (e) => {
  const param = e.currentTarget.dataset.param
  const value = e.detail.value
  const pages = getCurrentPages()
  const curPage = pages[pages.length - 1]
  let formData = curPage.data.formData
  formData[param] = value
  curPage.setData({
    formData
  })
}

/**
 * 克隆页面中的初始化formData
 */
export const cloneFormData = () => {
  const pages = getCurrentPages()
  const curPage = pages[pages.length - 1]
  let formData = util.clone(util.clone(curPage.__data__.formData))
  curPage.setData({
    defaultFormData: {
      ...formData
    }
  })
}