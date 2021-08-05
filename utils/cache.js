const {
	setStore,
	getStore,
	removeStore,
	clearStore
} = require('./storage.js')
const config  = require('./config')

let dtime = '_deadtime'
/**
 * k: key
 * v: value
 * t: time (second)
 */
export const setCache = (k, v, t) => {
	const key = getCacheKey(k)
	setStore(key, v)
	var seconds = parseInt(t)
	if (seconds > 0) {
		var timestamp = Date.parse(new Date())
		timestamp = timestamp / 1000 + seconds
		setStore(`${key}${dtime}`.toUpperCase(), `${timestamp}`)
	} else {
		removeStore(`${key}${dtime}`.toUpperCase())
	}
}

/**
 * k: key
 * def: 可选参数，表示无缓存数据时返回值（支持字符串、json、数组、boolean等）
 */
export const getCache = (k, def) => {
	const key = getCacheKey(k)
	var deadtime = parseInt(getStore(`${key}${dtime}`.toUpperCase()))
	if (deadtime) {
		if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {
			if (def) {
				return def;
			} else {
				return
			}
		}
	}
	var res = getStore(key);
	if (res) {
		return res
	} else {
		return def
	}
}

/**
 * 移除cache
 */
export const removeCache = (k) => {
	const key = getCacheKey(k)
	removeStore(key)
	removeStore(`${key}dtime`.toUpperCase())
}

// 清除cache
export const clearCache = () => {
	clearStore()
}

const getCacheKey = (k) => {
	return `${k}`.toUpperCase()
}
