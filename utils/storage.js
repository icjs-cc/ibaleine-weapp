const config  = require('./config')

export const getStorageInfo = () => {
  return wx.getStorageInfoSync()
}

export const setStorage = (k, v) => {
	const key = getStorageKey(k)
  wx.setStorageSync(key, v)
}

export const getStorage = (k) => {
	const key = getStorageKey(k)
  return wx.getStorageSync(key)
}

export const removeStorage = (k) => {
  const key = getStorageKey(k)
  return wx.removeStorageSync(key)
}

export const clearStorage = () => {
  return wx.clearStorageSync()
}

const getStorageKey = (k) => {
	return `${config['project_en']}_${k}`.toUpperCase()
}