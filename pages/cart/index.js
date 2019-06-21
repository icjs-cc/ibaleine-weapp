// pages/cart/index.js
Page({
  data: {
    goodsList: [
      { title: '醉品朴茶·醇朴', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods1.png', price: 89, primeCost: 100, tag: '新品', sales: 100 },
      { title: '醉品朴茶·醇朴', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶·醇朴', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶·醇朴', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶·醇朴', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶·醇朴', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶·醇朴', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶·醇朴', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶·醇朴end', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 }
    ],
    miniBtnArray: [
      { image: '../../images/common/cart.png', name: '购物车', type: 'lightPrimary' }
    ],
    bigBtnArray: [
      { name: '加入购物车', type: 'lightPrimary', color: '#43A047', bgcolor: '#C8E6C9', loading: false, disabled: true },
      { name: '立即购买', type: 'primary', color: '#FFFFFF', bgcolor: '#81C784', loading: false, disabled: false },
    ],
    text: '结算',
    loading: false
  },
  handleTap(e){
    console.log(e)
  },
  handleClick(e){
    const index = e.detail.index
    let bigBtnArray = this.data.bigBtnArray
    bigBtnArray[index].loading = true
    this.setData({
      bigBtnArray: bigBtnArray
    })
    setTimeout(() => {
      bigBtnArray[index].loading = false
      this.setData({
        bigBtnArray: bigBtnArray
      })
    }, 3000)
  },
  handleSubmit(){
    this.setData({
      loading: true,
      text: '结算中...'
    })
    setTimeout(()=>{
      this.setData({
        loading: false,
        text: '结算'
      })
    },3000)
  }
})