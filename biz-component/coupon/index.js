Component({
  options:{
    addGlobalClass:true
  },
  properties: {
    price:{
      type:String,
      value:''
    },
    title:{
      type:String,
      value:''
    },
    desc:{
      type:String,
      value:''
    },
    date:{
      type:String,
      value:''
    },
    overTime:{
      type:Boolean,
      value: false
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
