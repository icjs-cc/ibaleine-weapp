// component/word-cloud/index.js
const config = require('../libs/config.js')
Component({
  properties: {
    value: {
      type: Object,
      value: []
    },
    width: {
      type: String,
      value: '750rpx'
    },
    height: {
      type: String,
      value: '500rpx'
    },
    colors: {
      type: Array,
      value: []
    }
  },
  data: {
    wordCloudEle: [],
    wordCloudStyle: ""
  },
  ready() {
    this._setWordCloudStyle()
    this._init()
  },
  methods: {
    _init() {
      let wordCloudEle = []
      let colors = []
      if (this.properties.colors.length) {
        colors = this.properties.colors
      } else {
        for (let key in config.colors) {
          colors.push(config.colors[key])
        }
      }
      this.properties.value.forEach((item, index) => {
        const type = typeof item
        wordCloudEle.push({
          title: type == 'object' ? item.title : item,
          index: index,
          item: item,
          color: colors[index % colors.length],
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
      let angleX, angleY
      for (let i = 0; i < wordCloudEle.length; i++) {
        angleX = Math.PI / 100
        angleY = Math.PI / 100
        let k = (2 * (i + 1) - 1) / wordCloudEle.length - 1;
        //计算按圆形旋转
        let a = Math.acos(k);
        let b = a * Math.sqrt(wordCloudEle.length * Math.PI);
        //计算元素x，y坐标
        let numx = 120 * Math.sin(a) * Math.cos(b)
        let numy = 120 * Math.sin(a) * Math.sin(b);
        let numz = 220 * Math.cos(a);
        //计算元素缩放大小
        wordCloudEle[i].x = numx * 2
        wordCloudEle[i].y = numy * 2
        wordCloudEle[i].z = numz
        wordCloudEle[i].s = 250 / (400 - wordCloudEle[i].z)
      }
      //动画
      let cos, sin, y1, z1, x1;
      setInterval(() => {
        for (let i = 0; i < wordCloudEle.length; i++) {
          wordCloudEle[i].s = 250 / (400 - wordCloudEle[i].z)
          cos = Math.cos(angleX);
          sin = Math.sin(angleX);
          y1 = wordCloudEle[i].y * cos - wordCloudEle[i].z * sin;
          z1 = wordCloudEle[i].z * cos + wordCloudEle[i].y * sin;
          wordCloudEle[i].y = y1;
          wordCloudEle[i].z = z1;

          cos = Math.cos(angleY);
          sin = Math.sin(angleY);
          x1 = wordCloudEle[i].x * cos - wordCloudEle[i].z * sin;
          z1 = wordCloudEle[i].z * cos + wordCloudEle[i].x * sin;
          wordCloudEle[i].x = x1;
          wordCloudEle[i].z = z1;
          this.setData({
            wordCloudEle: wordCloudEle
          })
        }
      }, 100)
    },
    _setWordCloudStyle() {
      const wordCloudStyle = [
        `height:${this.properties.height}`,
        `width: ${this.properties.width}`
      ].join(";")
      this.setData({wordCloudStyle})
    },
    _bindtap(e) {
      const item = e.currentTarget.dataset.item
      this.triggerEvent('click', item);
    }
  }
})