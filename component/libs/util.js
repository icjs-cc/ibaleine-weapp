// 判断值是否为空
const isEmpty = (value) => {
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
const logWarn = (msg, getValue) => {
  console.warn(msg);
  console.log('接受到的值为：', getValue);
}

module.exports = {
  isEmpty: isEmpty,
  logWarn: logWarn
}