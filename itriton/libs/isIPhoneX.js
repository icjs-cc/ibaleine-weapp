/**
 * 获取系统信息
 */

let systemInfo = null

const getSystemInfo = (isForce) => {
	if (!systemInfo || isForce) {
		try {
			systemInfo = wx.getSystemInfoSync()
		} catch(e) { /* Ignore */ }
	}

	return systemInfo
}

// iPhoneX 竖屏安全区域
export const safeAreaInset = {
	top: 88, // StatusBar & NavBar
	left: 0,
	right: 0,
	bottom: 34, // Home Indicator
}

const IPHONEX_DEVICE_HEIGHT = 812
const isIPhoneX = ({ model, platform, screenHeight, safeArea }) => {
	if(safeArea&&safeArea.top > 20){
		return true
	}else{
		return false
	}
}

export const checkIPhoneX = (isForce) => isIPhoneX(getSystemInfo(isForce))