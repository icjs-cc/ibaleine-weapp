const config = require('./config.js')
/**
 * 方法说明:网络请求模块
 * var option = {
 *     url: 'API',
 *     data: {
 *       "pageNum": 1,
 *       "pageSize": 6
 *     }
 * };
 * utils.request(option,
 *   function (res) {
 * 
 *   }
 * );
 */
const request = (option, successCb, errorCb, completeCb) => {
  wx.request({
    url: config[config.DEV_ENV].url + option.url,// 开发者服务器接口地址
    data: option.data ? option.data : {},//请求的参数
    method: option.method ? option.method : 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: option.header ? option.header : { 'content-type': 'application/json' }, // 设置请求的 header
    success: function (res) {//收到开发者服务成功返回的回调函数
      if (res.data.status === -1){ //根据自己的需求进行修改
        wx.showToast({
          title: res.Msg ||'登录过期，请重新登录',
          icon: 'none',
          success(){
            wx.clearStorage()
            wx.redirectTo({
              url: '/pages/index/index',
            })
          }
        })
      }
      isFunction(successCb) && successCb(res.data);
    },
    error: function () {//接口调用失败的回调函数
      isFunction(errorCb) && errorCb();
    },
    complete: function () {//接口调用结束的回调函数（调用成功、失败都会执行）
      isFunction(completeCb) && completeCb();
    }
  });
}
// /.网络请求模块

function isFunction(obj) {
  return typeof obj === 'function';
}

module.exports = {
  request: request
}
