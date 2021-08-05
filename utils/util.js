/**
 * 格式化时间 fmt=时间格式
 */
export const formatDate = (num, fmt) => {
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
export const fillZeroize = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 检查 value 是否为有效的类数组长度
 * @param value
 * @returns {boolean}
 */
export const isLength = (value) => {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= Number.MAX_SAFE_INTEGER;
}

/**
 * 检查 value 是否是类数组
 * @param value
 * @returns {boolean|*}
 */
export const isArrayLike = (value) => {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * 检测数据是不是除了symbol外的原始数据
 * @param value
 * @returns {boolean}
 */
export const isStatic = (value) => {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'undefined' ||
    value === null
  )
}

/**
 * 检测数据是不是原始数据
 * @param value
 * @returns {boolean|*}
 */
export const isPrimitive = (value) => {
  return isStatic(value) || typeof value === 'symbol'
}

/**
 * 判断数据是不是引用类型的数据 (例如： arrays, functions, objects, regexes, new Number(0),以及 new String(''))
 * @param value
 * @returns {boolean}
 */
export const isObject = (value) => {
  let type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * 检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"
 * @param value
 * @returns {boolean}
 */
export const isObjectLike = (value) => {
  return value != null && typeof value == 'object';
}

/**
 * 检查 value 是不是函数
 * @param value
 * @returns {boolean}
 */
export const isFunction = (value) => {
  return Object.prototype.toString.call(value) === '[object Function]'
}

/**
 * 获取数据类型，返回结果为 Number、String、Object、Array等
 * @param value
 * @returns {string}
 */
export const getRawType = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1)
}

/**
 * 判断数据是不是Object类型的数据
 * @param obj
 * @returns {boolean}
 */
export const isPlainObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * 判断数据是不是数组类型的数据
 * @param arr
 * @returns {boolean}
 */
export const isArray = (arr) => {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

/**
 * 判断数据是不是正则对象
 * @param value
 * @returns {boolean}
 */
export const isRegExp = (value) => {
  return Object.prototype.toString.call(value) === '[object RegExp]'
}

/**
 * 判断数据是不是时间对象
 * @param value
 * @returns {boolean}
 */
export const isDate = (value) => {
  return Object.prototype.toString.call(value) === '[object Date]'
}

/**
 * 判断数据是否为空
 */
export const isEmpty = (value) => {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value)) {
    return !value.length;
  } else if (isPlainObject(value)) {
    for (let key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

//获取某个对象在数组中的索引值
export const objectIndexInArray = (array, item, param) => {
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
export const isInArray = (val, arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return true;
    }
  }
  return false;
}

export const isJSON = (str) => {
  if (typeof str == 'string') {
    try {
      var obj = JSON.parse(str);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log('error：' + str + ' ' + e)
      return false;
    }
  }
}

export const zeroValue = (value) => {
  if (value == 'null' || value == 'undefined' || value == "NaN" || value == NaN || value == undefined || value == null) {
    return ''
  } else {
    return value
  }
}

/**
 * 产生随机数 n=位数
 */
export const randNumber = (n) => {
  var result = '';
  for (var i = 0; i < n; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}

/**
 * 横线转驼峰命名
 * @param str
 * @returns {*}
 */
export const camelize = (str) => {
  let camelizeRE = /-(\w)/g;
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  })
}

/**
 * 驼峰命名转横线命名：拆分字符串，使用 - 相连，并且转换为小写
 * @param str
 * @returns {string}
 */
export const hyphenate = (str) => {
  let hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}

/**
 * 字符串首位大写
 * @param str
 * @returns {string}
 */
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 对象克隆
 */
export const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 跳过空数据
 * @param {*} obj 
 */
export const skipNulls = obj => {
  var param = {};
  if (obj === null || obj === undefined || obj === "") return param;
  for (var key in obj) {
    if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "") {
      param[key] = obj[key];
    }
  }
  return param;
}