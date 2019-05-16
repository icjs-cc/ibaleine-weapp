// pages/discover/index.js
Page({
  data: {
    tabs: [{
      key: 1,
      title: '最新'
    }, {
      key: 2,
      title: '红茶'
    }, {
      key: 3,
      title: '绿茶'
    }, {
      key: 4,
      title: '岩茶'
    }],
    current: 1,
    discoverList:[{
      thumb:'http://aliyun121.icjs.ink/resource/iwhale-ui/discover-1.png',
      title:'祁门红茶-中国',
      desc:'祁门红茶，简称祁红，是中国传统功夫红茶的珍品，为历史名茶，出产于19世纪后期，是世界三大高香茶之一，有“茶中英豪”，“群芳最”，“王子茶”等美誉。祁门红茶依其品质高低分为1～7级，主要产于安徽省祁门县，与其毗邻的石台，东至，黟县及贵池等县也有少量生产，主要出口英国，荷兰，德国，日本，俄罗斯等几十个国家和地区，多年来一直是中国的国事礼茶。'
    },
      {
        thumb: 'http://aliyun121.icjs.ink/resource/iwhale-ui/discover-2.png',
        title: '福鼎白茶',
        desc: '福鼎白茶就是用产自福鼎“华茶1号”或“华茶2号”茶树的芽叶，不炒不揉，特殊工艺制作而成，其外形芽毫完整，汤色杏黄清澈，滋味清淡、清甜爽口的品质特点。根据采摘芽叶的不同，白茶可分为：白毫银针、白牡丹、寿眉、新工艺白茶等，近年来，根据市场需要又推出紧压白茶等。'
      }]
  },
  handleChangeTab({ detail } = {}) {
    this.setData({
      current: detail.key
    })
  }
})