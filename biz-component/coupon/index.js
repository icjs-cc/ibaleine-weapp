Component({
  options:{
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    price:{//优惠券值
      type:String,
      value:''
    },
    title:{//优惠券title
      type:String,
      value:''
    },
    desc:{// 优惠券描述
      type:String,
      value:''
    },
    date:{// 过期时间
      type:String,
      value:''
    },
    overTime:{// 是否过期
      type:Boolean,
      value: false
    }
   
  },
})
