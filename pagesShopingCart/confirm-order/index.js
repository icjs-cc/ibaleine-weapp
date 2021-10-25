// pagesGoods/detail/index.js
const app = getApp()
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
    subsectionList:[
      {name: '自提', key: 1},
      {name: '配送', key: 2}
    ],
    current: 1
  },
  showSpecs(){
    
  },
  onLoad(){
   setTimeout(()=>{
      this.setData({
        current: 2
      })
   },3000)
  },
  subsectionChange(current){
    console.log(current)
  }
})