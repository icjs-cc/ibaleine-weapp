const {
  getRequest,
	postRequest,
	putRequest
} = require('../request.js')

export const login = (params) => {
  return postRequest('/user/login', params, true)
}

export const getUserInfo = (params) => {
  return getRequest(`/user/getUserInfo`, params)
}

export const updatePassword = (params) => {
  return putRequest('/user/password', params, true)
}