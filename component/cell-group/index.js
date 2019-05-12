// component/cell-group/index.js
Component({
  externalClasses: ['iw-class'],
  relations: {
    '../cell/index': {
      type: 'child',
      linked() {
        this.updateIsLastCell()
      },
      linkChanged() {
        this.updateIsLastCell()
      },
      unlinked() {
        this.updateIsLastCell()
      }
    }
  },

  methods: {
    updateIsLastCell() {
      let cells = this.getRelationNodes('../cell/index')
      const len = cells.length;
      if (len > 0) {
        let lastIndex = len - 1;
        cells.forEach((cell, index) => {
          cell.updateIsLastCell(index === lastIndex)
        })
      }
    }
  }
});