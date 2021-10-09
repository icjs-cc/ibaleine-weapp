// pages/mine/notice/index.js
import {getAllNoticeList} from '../../utils/api/modules/notice'
const app = getApp()
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
    noticeList: [],
    searchForm:{
      noticeTitle: null
    }
  },
  getAllNoticeList(){
    getAllNoticeList({
      ...this.data.searchForm
    }).then(res=>{
      const noticeList = res.data.notice
      this.setData({
        noticeList
      })
    })
  },
  search(e){
    const noticeTitle = e.detail.value
    this.setData({searchForm:{noticeTitle}})
    this.getAllNoticeList()
  },
  detail(e){
    const item = e.currentTarget.dataset.item
    this.setStorage('notice', item)
    this.router('/pagesMine/notice/detail/index')
  },
  onLoad(){
    this.getAllNoticeList()
  }
})