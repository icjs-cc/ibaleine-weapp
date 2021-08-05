/**
 * 跳转到登录页
 */
export const routeToLogin = () => {
	router('/pagesAuthority/login/index', 'navigateTo')
}

/**
 * 跳转到首页
 */
export const routeToHome = () => {
	router('/pages/index/index', 'reLaunch')
}

/**
 * 路由 navigateTo, redirectTo, switchTab, reLaunch
 */
export const router = (url, type = 'navigateTo') => {
	isRouterType(type)
	wx[type].call(wx, {
		url
	})
}

/**
 * 关闭当前页面，返回上一页面或多级页面
 */
export const back = (delta) => {
	wx.navigateBack({
		delta: delta || 1
	})
}

const isRouterType = (t) => {
	if (!['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].includes(t)) {
		console.warn('type 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', t)
		return false
	}

	return true
}