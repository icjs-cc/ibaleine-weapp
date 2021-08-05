// 判断值是否为空
export const isEmpty = (value) => {
  if (Array.isArray(value)) {
    return value.length === 0
  } else if (typeof value === 'object') {
    if (value) {
      for (const _ in value) {
        return false
      }
    }
    return true
  } else {
    return !value
  }
}

// 输出warn日志
export const logWarn = (msg, getValue) => {
  console.warn(msg);
  console.log('接受到的值为：', getValue);
}

// rpx转px
export const rpx2px = (rpx) =>{
  return rpx / 750 * wx.getSystemInfoSync().windowWidth
}

// px转rpx
export const px2rpx = (px) => {
  return (px * 750) / wx.getSystemInfoSync().windowWidth
}