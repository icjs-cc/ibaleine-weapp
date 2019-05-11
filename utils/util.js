/**
 * 格式化时间 fmt=时间格式
 */
const formatDate = (num, fmt) => {
  if (num == '') {
    return ''
  }
  const date = new Date(num)
  let o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

/**
 * 补零
 */
const formatZeroize = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatBoolean2Number = n => {
  if (n) {
    return 1
  } else {
    return 0
  }
}

const formatNumber2Boolean = n => {
  if (n) {
    return true
  } else {
    return false
  }
}

/**
 * 判断数据是否为空
 */
const isEmpty = (val) => {
  if (val == null || val == undefined || val == '') {
    return true;
  } else {
    return false;
  }
}

//获取某个对象在数组中的索引值
const itemIndexInArray = (array, item, param) => {
  var index = -1
  for (var i in array) {
    if (array[i][param] === item[param]) {
      index = i
      break
    }
  }
  return index
}

/**
 * 校验数值是否存在在数组中
 */
const isInArray = (val, arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return true;
    }
  }
  return false;
}

/**
 * 产生随机数 n=位数
 */
const randNumber = (n) => {
  var result = '';
  for (var i = 0; i < n; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}

// 输出warn日志
const logWarn = (msg, getValue) => {
  console.warn(msg);
  console.log('接受到的值为：', getValue);
};

const isFunction = (obj) => {
  return typeof obj === 'function'
}

const showToast = (title, _callback) => {
  wx.showToast({
    title: title,
    icon: 'none',
    mask: true,
    success: () => {
      if (isFunction(_callback)) {
        _callback()
      }
    }
  })
}

const hideToast = () => {
  wx.hideToast()
}

const showModal = (obj, _callback) => {
  wx.showModal({
    title: obj.title || '提示',
    content: obj.content || '',
    showCancel: obj.showCancel || true,
    cancelText: obj.cancelText || '取消',
    cancelColor: obj.cancelColor || '#000000',
    confirmText: obj.confirmText || '确定',
    confirmColor: obj.confirmColor || '#f9c646',
    success(res) {
      _callback(res)
    }
  })
}

const showLoading = (title) => {
  wx.showLoading({
    title: title ? title : '加载中...',
    mask: true
  })
}

const hideLoading = () => {
  wx.hideLoading()
}

const setStorageSync = (key, val) => {
  wx.setStorageSync(key, val)
}

const getStorageSync = (key) => {
  return wx.getStorageSync(key)
}


module.exports = {
  formatDate: formatDate,
  formatZeroize: formatZeroize,
  formatBoolean2Number: formatBoolean2Number,
  formatNumber2Boolean: formatNumber2Boolean,
  itemIndexInArray: itemIndexInArray,
  randNumber: randNumber,
  isInArray: isInArray,
  isEmpty: isEmpty,
  logWarn: logWarn,
  // 基于小程序接口封装
  showToast: showToast,
  showModal: showModal,
  showLoading: showLoading,
  hideLoading: hideLoading,
  setStorageSync: setStorageSync,
  getStorageSync: getStorageSync
}

