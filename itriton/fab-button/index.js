Component({
  properties: {
    main: {
      type: Object,
      value: {}
    },
    menus: {
      type: Object,
      value: []
    }
  },

  data: {
    showMenus: true
  },

  methods: {
    handleShowClick: function() {
      let isShow = !this.data.showMenus;
      this.setData({
        showMenus: isShow,
      })
      this.triggerEvent('main', {
        "item": this.properties.main
      })
    },
    handleItemClick: function(e) {
      this.handleShowClick();
      let item = e.currentTarget.dataset.item;
      if (item) {
        this.triggerEvent('menu', {
          "item": item
        })
      }
    }
  }
})