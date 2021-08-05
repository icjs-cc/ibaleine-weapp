const config  = require('./config')

export const getStoreInfo = () => {
  return wx.getStorageInfoSync()
}

export const setStore = (k, v) => {
	const key = getStoreKey(k)
  wx.setStorageSync(key, v)
}

export const getStore = (k) => {
	const key = getStoreKey(k)
  return wx.getStorageSync(key)
}

export const removeStore = (k) => {
  const key = getStoreKey(k)
  return wx.removeStorageSync(key)
}

export const clearStore = () => {
  return wx.clearStorageSync()
}

const getStoreKey = (k) => {
	return `${config['project_en']}_${k}`.toUpperCase()
}