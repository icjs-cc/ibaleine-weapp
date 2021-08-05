const Mock = require('../wx-mock.js')

export const getAllVersionList = Mock.mock(/\/api\/version/,{
  code: 200,
  success: true,
  "data":{
    "version|1-5":[{
      "versionId":()=>{
        return Mock.Random.id()
      },
      "versionNo":()=>{
        return `v${Mock.Random.increment()}.0.0`
      },
      "noticeContent":()=>{
        return Mock.Random.sentence()
      },
      "versionTime":()=>{
        return Mock.Random.datetime()
      },
      "versionContent":()=>{
        return `[{"value":"项目初始化"},{"value":"这是mock测试"}]`
      }
    }]
  }
})