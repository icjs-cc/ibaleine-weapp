Component({
  externalClasses: ['iw-class'],

  relations: {
    '../tabs/index': {
      type: 'parent'
    }
  },

  properties: {
    key: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    dot: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 0
    }
  },

  data: {
    current: false,
    currentColor: '',
    scroll: false,
    direction: 'horizontal'
  },
  ready() {
    this.setData({
      direction: this.getRelationNodes('../tabs/index')[0].data.direction
    })
  },
  methods: {
    changeCurrent(current) {
      this.setData({
        current
      });
    },
    changeCurrentColor(currentColor) {
      this.setData({
        currentColor
      });
    },
    changeScroll(scroll) {
      this.setData({
        scroll
      });
    },
    handleClickItem() {
      const parent = this.getRelationNodes('../tabs/index')[0];
      parent.emitEvent(this.data.key);
    }
  }
});