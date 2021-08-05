const Mock = require('../wx-mock.js')

export const getAllNoticeList = Mock.mock(/\/api\/notice/,{
  code: 200,
  success: true,
  "data|1-20":{
    notice:[{
      "noticeId":()=>{
        return Mock.Random.cname()
      },
      "noticeTitle":()=>{
        return Mock.Random.title()
      },
      "noticeContent":()=>{
        return Mock.Random.sentence()
      },
      "createTime":()=>{
        return Mock.Random.datetime()
      },
      "updateTime":()=>{
        return Mock.Random.datetime()
      }
    }]
  }
})