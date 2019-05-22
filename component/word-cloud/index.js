// component/word-cloud/index.js
const config = require('../libs/config.js')
Component({
  properties: {
    value:{
      type: Object,
      value: []
    },
    width:{
      type: String,
      value: '750rpx'
    },
    height: {
      type: String,
      value: '500rpx'
    },
    colors:{
      type: Array,
      value: []
    }
  },
  data: {
    wordCloudEle: []
  },
  ready(){
    this.init()
  },
  methods: {
    init() {
      let wordCloudEle = []
      let colors = []
      if(this.properties.colors.length){
        colors = this.properties.colors
      }else{
        for (var key in config.colors) {
          colors.push(config.colors[key])
        }
      }
      this.properties.value.forEach((item,index)=>{
        const type = typeof item
        wordCloudEle.push({
          title: type == 'object' ? item.title : item,
          index: index,
          item: item,
          color: colors[index%colors.length],
          x: 0,
          y: 0,
          z: 0,
          s: 0,
          o: 1,
          f: 15,
          angleX: 0,
          angleY: 0
        })
      })
      for (var i = 0; i < wordCloudEle.length; i++) {
        var fallLength = 100 //圆的焦点
        var angleX = Math.PI / 100
        var angleY = Math.PI / 100
        var k = (2 * (i + 1) - 1) / wordCloudEle.length - 1;
        //计算按圆形旋转
        var a = Math.acos(k);
        var b = a * Math.sqrt(wordCloudEle.length * Math.PI);
        //计算元素x，y坐标
        var numx = 120 * Math.sin(a) * Math.cos(b)
        var numy = 120 * Math.sin(a) * Math.sin(b);
        var numz = 220 * Math.cos(a);
        //计算元素缩放大小
        wordCloudEle[i].x = numx * 2
        wordCloudEle[i].y = numy * 2
        wordCloudEle[i].z = numz
        wordCloudEle[i].s = 250 / (400 - wordCloudEle[i].z)
      }
      //动画
      setInterval(() => {
        for (var i = 0; i < wordCloudEle.length; i++) {
          var a = Math.acos(k);
          var numz = 240 * Math.cos(a);
          wordCloudEle[i].s = 250 / (400 - wordCloudEle[i].z)
          var cos = Math.cos(angleX);
          var sin = Math.sin(angleX);
          var y1 = wordCloudEle[i].y * cos - wordCloudEle[i].z * sin;
          var z1 = wordCloudEle[i].z * cos + wordCloudEle[i].y * sin;
          wordCloudEle[i].y = y1;
          wordCloudEle[i].z = z1;

          var cos = Math.cos(angleY);
          var sin = Math.sin(angleY);
          var x1 = wordCloudEle[i].x * cos - wordCloudEle[i].z * sin;
          var z1 = wordCloudEle[i].z * cos + wordCloudEle[i].x * sin;
          wordCloudEle[i].x = x1;
          wordCloudEle[i].z = z1;
          this.setData({
            wordCloudEle: wordCloudEle
          })
        }
      }, 100)
    },
    handleTap(e){
      const item = e.currentTarget.dataset.item
      this.triggerEvent('click',item);
    }
  }
})
