// component/subsection/index.js
Component({
  options:{
    addGlobalClass:true
  },
  properties: {
    subsectionList:{
      type: Array,
      value: []
    },
    width:{
      type:String,
      value:'710'
    },
    height:{
      type:String,
      value:'80'
    },
    color:{
      type:String,
      value:'#387DFF'
    },
    textColor:{
      type:String,
      value:'#FFFFFF'
    },
    current:{
      type:Number,
      value: 0,
      observer:function(newVal) {
        if(newVal && this.data.activeKey !== newVal){
          this.setData({activeKey: newVal})
        }
      }
    }
  },
  lifetimes:{
    attached() {
      this.setSubsectionStyle()
    }
  },
  data: {
    activeKey: null
  },
  methods: {
    handleClickItem(e){
      if(this.data.activeKey !== e.target.dataset.key){
        this.setData({activeKey: e.target.dataset.key});
        this.triggerEvent('change', e.target.dataset.key);
      }
    },
    setSubsectionStyle(){
      const subsectionStyle = [
        `width: ${this.properties.width}rpx`,
        `height: ${this.properties.height}rpx`,
        `border-color: ${this.properties.color}`,
        `color: ${this.properties.color}`
      ].join(';');
      const activeStyle = [
        `color: ${this.properties.textColor}`,
        `background-color: ${this.properties.color}`
      ].join(';');
      this.setData({
        subsectionStyle:subsectionStyle,
        activeStyle:activeStyle
      })
    },
  }
})
