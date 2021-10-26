// pages/shopping-cart/index.js
import images from '../../utils/images.js'
const app = getApp()
Page({
  ...getApp(),
  ...app.globalData.function,
  data: {
    ...app.globalData.config,
    shoppingCartList: [
      {name: '贴布日式圆盘特殊日本木质茶盘', spec: '默认', url: images.goods1, price: '198', num: 1},
      {name: '商务办公用茶-水仙', spec: '一斤装', url: images.goods2, price: '122', num: 2},
    ]
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
    })
  },
  confirm(){
    console.log('去结算')
    this.router("/pagesShopingCart/confirm-order/index")
  },
  onLoad(){
    setTimeout(()=>{
      this.selectComponent("#page").hideLoading()
    },2000)
  },
})