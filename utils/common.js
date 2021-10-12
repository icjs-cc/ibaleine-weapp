const config = require('./config')
export const $showToast = (title) => {
	return new Promise((resolve, reject) => {
		wx.showToast({
			title,
			icon: 'none',
			mask: true,
			duration: 2000,
			success: (res) => {
				resolve(res)
			},
			fail: (error) => {
				reject(error)
			}
		})
	})
}

export const $hideToast = () => {
	wx.hideToast()
}

export const $showModal = ({
	title = '提示',
	content = '',
	showCancel = true,
	cancelText = '取消',
	cancelColor = '#000000',
	confirmText = '确定',
	confirmColor = config['main_color']
}) => {
	return new Promise((resolve, reject) => {
		wx.showModal({
			title,
			content,
			showCancel,
			cancelText,
			cancelColor,
			confirmText,
			confirmColor,
			success: (res) => {
				resolve(res)
			},
			fail: (error) => {
				reject(error)
			}
		})
	})
}

export const $showActionSheet = (itemList) => {
	return new Promise((resolve, reject)=>{
		wx.showActionSheet({
			itemList: itemList,
			success: (res) => {
				resolve(res)
			},
			fail: (error) => {
				if(error.errMsg!=="showActionSheet:fail cancel"){
					reject(error)
				}
			}
		})
	})
}

export const $showLoading = (title) => {
	wx.showLoading({
		title: title ? title : '加载中...',
		mask: true
	})
}

export const $hideLoading = () => {
	wx.hideLoading()
}

export const $setClipboardData = (data) => {
	return new Promise((resolve, reject)=>{
		wx.setClipboardData({
			data,
			success: (res) => {
				resolve(res)
			},
			fail: (error)=>{
				reject(error)
			}
		})
	})
}