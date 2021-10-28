import images from '../../utils/images.js'
const app = getApp()
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
    couponList:[
      {price: 10, title: '无门槛优惠券1', desc: '满100元减10元', date: '2020.07.15-2020.07.18', overTime: true, id: 1},
      {price: 20, title: '无门槛优惠券2', desc: '满100元减20元', date: '2020.07.15-2022.07.18', overTime: false, checked: false, id: 2},
      {price: 30, title: '无门槛优惠券3', checked: false, desc: '满100元减30元', date: '2020.07.15-2050.07.18', overTime: false, id: 3},
    ],
    discountPrice: 0,
    discountId:0,
    flag: null, 
  },
  onLoad(options){
    let flag = options.flag;
    let discountId = options.discountId;
    console.log(options)
    let couponList = this.data.couponList;
    let discountPrice = this.data.discountPrice;
    couponList.forEach((ele,index) =>{
      if(+discountId === ele.id){
        ele.checked = !ele.checked;
        ele.checked ? discountPrice = ele.price : null;
        ele.checked ? discountId = ele.id : null;
      }
      if(+discountId !== ele.id){
        ele.checked = false;
      }
    })
    this.setData({flag,couponList,discountPrice,discountId})
    wx.setNavigationBarTitle({
      title: flag == 1 ? '选择优惠券' : '礼券中心',
    })
  },

  checkChange(e){
    let couponList = this.data.couponList;
    let discountPrice = this.data.discountPrice;
    let discountId = this.data.discountId;
    couponList.forEach((ele,index) =>{
      if(index === e.target.dataset.index){
        ele.checked = !ele.checked;
        ele.checked ? discountPrice = ele.price : null;
        ele.checked ? discountId = ele.id : null;
      }
      if(index !== e.target.dataset.index){
        ele.checked = false;
      }
    })
    this.setData({couponList,discountPrice,discountId})
  },
  confirm(){
     const prevPage = this.$page(-1);
     const discountPrice = this.data.discountPrice;
     const discountId = this.data.discountId;
     prevPage.setData({discountPrice,discountId})
     prevPage.computedData();
    this.back();
  }
})