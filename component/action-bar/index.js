// component/action-bar/index.js
const config = require('../libs/config.js')
Component({
  externalClasses: ['iw-class'],
  properties: {
    // bgcolor:{
    //   type: String,
    //   value: ''
    // },
    // color:{
    //   type: String,
    //   value: ''
    // }
    //小按钮数组 [{image:'',name:'',type:'',color:'',num:''}]
    miniBtnArray:{
      type: Array,
      value: []
    },
    //大按钮数组 [{name:'',type:'',color:'',bgcolor:''}]
    bigBtnArray:{
      type: Array,
      value: []
    }
  },

  data: {
    colors: {
      ...config.colors
    }
  },

  methods: {
    handleTap(e) {
      if (this.data.disabled) return false;
      const dataset = e.currentTarget.dataset
      this.triggerEvent('mini', { ...dataset });
    },
    handleClick(e){
      if (this.data.disabled) return false;
      const dataset = e.currentTarget.dataset
      this.triggerEvent('big', { ...dataset } );
    }
  }
})
