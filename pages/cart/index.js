// pages/cart/index.js
Page({
  data: {
    goodsList: [
      { title: '醉品朴茶·醇朴 2018年秋茶 安溪铁观音 经典口碑款 清香型 NGY0840-250g', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods1.png', price: 89, primeCost: 100, tag: '新品', sales: 100 },
      { title: '醉品朴茶 2018年安溪铁观音 口碑好茶 皇冠100g', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶 2018年安溪铁观音 口碑好茶 皇冠100g', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶 2018年安溪铁观音 口碑好茶 皇冠100g', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶 2018年安溪铁观音 口碑好茶 皇冠100g', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 },
      { title: '醉品朴茶 2018年安溪铁观音 口碑好茶 皇冠100g', thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/goods2.png', price: 100, primeCost: 110, tag: '推荐', sales: 210 }
    ],
    miniBtnArray: [
      { image: '../../images/common/cart.png', name: '购物车', type: 'lightPrimary' }
    ],
    bigBtnArray: [
      { name: '加入购物车', type: 'lightPrimary', color: '#43A047', bgcolor:'#C8E6C9' },
      { name: '立即购买', type: 'primary', color: '#FFFFFF', bgcolor: '#81C784' },
    ],
  },
  handleTap(e){
    console.log(e)
  },
  handleClick(e){
    console.log(e)
  }
})