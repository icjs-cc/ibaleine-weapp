// biz-component/notice/index.js
Component({
  properties: {
    color: {
      type: String,
      value: '#387DFF'
    },
    list: {
      type: Array,
      value: []
    }
  },

  data: {
    animate: false,
    noticeList: []
  },
  observers: {
    'list': function (newVal, oldVal) {
      this.setData({
        noticeList: newVal,
        content: newVal[0]
      })
    }
  },
  ready(){
    setInterval(()=>{
        this.data.noticeList.push(this.data.noticeList[0])
        this.data.noticeList.shift()
        this.update(this.data.noticeList[0])
    }, 3000);
  },
  methods:{
    bindClick(e){
      this.triggerEvent('click', e.currentTarget.dataset.item)
    },
    update(content) {
      let animation = wx.createAnimation()

      // 旧消息向上平移
      animation.translateY(-30).step({
        duration: 1000,
        timingFunction: 'ease-in'
      })
      // 为了实现下一条新内容向上平移的效果，必须把内容很快平移到下方，并且不能被用户看见，这里其原理类似轮播图的思路。
      // 实现方法：动画时间设置为1ms，过渡效果设置为"动画第一帧就跳至结束状态直到结束"
      animation.opacity(0).translateY(30).step({
        duration: 50,
        timingFunction: 'step-start'
      })
      // 新消息向上平移的同时恢复透明
      animation.opacity(1).translateY(0).step({
        duration: 1000,
        timingFunction: 'ease-out'
      })
      this.setData({
        animationData: animation.export()
      })
      // 更新内容的延时必须大于第一步动画时间
      setTimeout(this.setData.bind(this, { content: content }), 1000)
    }
  }
})
