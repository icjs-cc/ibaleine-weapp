// component/rick-text/index.js
let WxParse = require('../wx-parse/wxParse.js');
Component({
  properties: {
    html: {
      type: String,
      value: "",
      observer(){
        this.parseHtml()
      }
    }
  },
  data: {
    content: ''
  },
  methods: {
    parseHtml(){
      const content = this.properties.html.replace(/pt/g, '*2rpx')
      WxParse.wxParse('content', 'html', content || '<html></html>', this, 5);
    }
  }
})
