// component/image/index.js
import images from '../libs/images.js'
Component({
  externalClasses: ['t-class'],
  properties: {
    // circle || square || rectangle
    shape: {
      type: String,
      value: 'rectangle'
    },
    placeholder: {
      type: String,
      value: 'default'
    },
    broken: {
      type: String
    },
    src: {
      type: String
    },
    mode: {
      type: String,
      value: 'scaleToFill'
    },
    lazyLoad: {
      type: Boolean,
      value: false
    }
  },
  data: {
    type: null,
    defaultImage: images.defaultImage
  },
  attached() {
    const image = this.properties.placeholder;
    if (image === 'default') {
      this.setData({
        type: 'default'
      });
    } else if (image.startsWith('data:') || image.startsWith('http')) {
      this.setData({
        type: 'network'
      });
    } else {
      this.setData({
        type: 'native'
      });
    }
  },
  methods: {
    _onerror: function(e) {
      this.setData({
        src: this.properties.broken||this.data.defaultImage
      })
      this.triggerEvent('error');
    }
  }
})