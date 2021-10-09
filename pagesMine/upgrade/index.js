import { getAllVersionList } from '../../utils/api/modules/version'
const app = getApp()
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
    versionList:[]
  },
  setVersionBadge() {
    let versionBadge = [
      `background:${this.data.main_color}`,
      `background: -moz-linear-gradient(-45deg, ${this.data.sub_color} 0%, ${this.data.main_color} 100%)`,
      `background: -webkit-linear-gradient(-45deg, ${this.data.sub_color} 0%, ${this.data.main_color} 100%)`,
      `background: linear-gradient(135deg, ${this.data.sub_color} 0%, ${this.data.main_color} 100%)`
    ].join(';')
    this.setData({
      versionBadge
    })
  },
  getAllVersionList(){
    getAllVersionList().then(res=>{
      let versionList = res.data.version
      versionList.forEach(item=>{
        return item.versionContent = JSON.parse(item.versionContent)
      })
      this.setData({versionList})
    })
  },
  onLoad(){
    this.getAllVersionList()
    this.setVersionBadge()
  }
})