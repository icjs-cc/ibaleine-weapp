const Mock = require('../wx-mock.js')

export const login = Mock.mock(/\/api\/user\/login/,{
  code: 200,
  success: true,
  data:{
    "authorization": "ibaleine_token",
  }
})

export const getUserInfo = Mock.mock(/\/api\/user\/getUserInfo/,{
  code: 200,
  success: true,
  data:{
    user:{
      "userId": 1,
      "nickname": "陈剑术",
      "username": "ibaleine"
    }
  }
})

export const updatePassword = Mock.mock(/\/user\/password/,{
  code: 200,
  success: true,
  message: "修改密码成功"
})