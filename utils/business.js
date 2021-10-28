import {
  getStorage
} from "./storage"
import {
  isEmpty
} from "./util"
import { routeToLogin, router } from "./router"

/**
 * 是否登录
 */
export const isLogin = () => {
  const userInfo = getStorage('userInfo')
  if (isEmpty(userInfo)) {
    return false
  }
  return true
}

/**
 * 未登录拦截到登录页
 */
export const noLoginIntercept = () => {
  const userInfo = getStorage('userInfo')
  if (isEmpty(userInfo)) {
    routeToLogin()
  }
}

/**
 * 跳转到下一页
 * @param {*} e 
 */
export const routeToNext = (e) => {
  const isauth = e.currentTarget.dataset.isauth
  const url = e.currentTarget.dataset.url
  const type = e.currentTarget.dataset.type
  if(url){
    if(isauth){
      console.info("处理需要权限的路由")
    }else{
      router(url, type)
    }
  }else{
    console.warn("ERROR:[routeToNext] url is empty")
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

export const $page = (delta) => {
 const pages = getCurrentPages();
 const len = pages.length;
 return pages[len - 1 + delta]
}