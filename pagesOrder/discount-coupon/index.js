import images from '../../utils/images.js'
const app = getApp()
Page({
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
    couponList:[
      {price: 10, title: '无门槛优惠券1', desc: '满100元减10元', date: '2020.07.15-2020.07.18', overTime: true},
      {price: 20, title: '无门槛优惠券2', desc: '满100元减20元', date: '2020.07.15-2022.07.18', overTime: false},
      {price: 30, title: '无门槛优惠券3', desc: '满100元减30元', date: '2020.07.15-2050.07.18', overTime: false},
    ],
    shoppingCartList: [
      {name: '贴布日式圆盘特殊日本木质茶盘', spec: '默认', url: images.goods1, price: '198', num: 1},
      {name: '商务办公用茶-水仙', spec: '一斤装', url: images.goods2, price: '122', num: 2},
    ],
    info:{
      1:{
        name:'黄先生',
        phone: null,
        address:'福建省厦门市思明区湖滨南路227号之7号（屋后茶山香苑）'
      },
    },
  
  },
  onLoad(){
   setTimeout(()=>{
      this.computedData();
      this.setData({
        current: 1,
      })
   },1000)
  },
  // 计算价格
  computedData(){
    let totalNum = 0;
    let totalPrice = 0;
    let confirmPrice = 0;
    this.data.shoppingCartList.forEach(ele =>{
      totalNum += ele.num;
      totalPrice += ele.num * ele.price;
    });
    confirmPrice = totalPrice - this.data.coupon;
    this.setData({
      totalNum,
      totalPrice,
      confirmPrice
    })
  },
  bindInputNumber(e){
    let num = e.detail.value
    let shoppingCartList = this.data.shoppingCartList
    const index = e.currentTarget.dataset.index
    if(num===0){
      this.$showModal({content: '确定要删除此商品？'}).then(res=>{
        if(res.confirm){
          console.log("确认删除")
        }else{
          console.log("取消删除")
        }
      })
    }
    shoppingCartList[index].num = num
    this.setData({
      shoppingCartList
    });
    this.computedData();
  },
  // 分段器change方法
  subsectionChange(e){
    this.setData({current:e.detail})
  },
  confirm(){
    this.$showModal({content: '确定支付'}).then(res=>{
      if(res.confirm){
        console.log("确认删除")
      }else{
        console.log("取消删除")
      }
    })
  }
})