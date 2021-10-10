// component/date-modal/index.js
const dateTimePicker = require('./dateTimePicker.js');
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: '选择时间'
    },
    show: {
      type: Boolean,
      value: false
    },
    content: {
      type: String,
      value: ''
    },
    loading: {
      type: Boolean,
      value: false
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    color: {
      type: String,
      value: '#387DFF'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmText: {
      type: String,
      value: '确认'
    },
    top: {
      type: String,
      value: '30%'
    },
    right: {
      type: Boolean,
      value: false
    },
    startTime: {
      type: String
    },
    endTime: {
      type: String
    }
  },
  data: {
    visible: false,
    startDate: '',
    endDate: '',
    dateTimeArray: null,
    dateTime: null,
    startYear: 2000,
    endYear: 2050
  },
  pageLifetimes: {
    show() {
      let startTimePicker = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear, this.properties.endTime);
      let endTimePicker = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear, this.properties.endTime);
      this.setData({
        visible: this.properties.show,
        startDate: startTimePicker.dateTime,
        startDateArray: startTimePicker.dateTimeArray,
        endDate: endTimePicker.dateTime,
        endDateArray: endTimePicker.dateTimeArray,
      })
      this.setCancelStyle()
      this.setConfirmStyle()
    }
  },
  methods: {
    setCancelStyle() {
      const cancelStyle = [
        `border:1rpx solid ${this.properties.color}`,
        `color:${this.properties.color}`
      ].join(';')
      this.setData({
        cancelStyle: cancelStyle
      })
    },
    setConfirmStyle() {
      const confirmStyle = [
        `border:1rpx solid ${this.properties.color}`,
        `background:${this.properties.color}`,
        `color:#FFF`
      ].join(';')
      this.setData({
        confirmStyle: confirmStyle
      })
    },
    toggle() {
      if (this.data.visible) {
        this.hide()
      } else {
        this.show()
      }
    },
    show() {
      this.setData({
        visible: true
      })
    },
    hide() {
      this.setData({
        visible: false
      })
    },
    cancel() {
      this.hide()
      this.triggerEvent('cancel', {})
    },
    confirm() {
      const startDateArray = this.data.startDateArray
      const startDate = this.data.startDate
      let startTime = `${startDateArray[0][startDate[0]]}/${startDateArray[1][startDate[1]]}/${startDateArray[2][startDate[2]]} ${startDateArray[3][startDate[3]]}:${startDateArray[4][startDate[4]]}:${startDateArray[5][startDate[5]]}`

      const endDateArray = this.data.endDateArray
      const endDate = this.data.endDate
      let endTime = `${endDateArray[0][endDate[0]]}/${endDateArray[1][endDate[1]]}/${endDateArray[2][endDate[2]]} ${endDateArray[3][endDate[3]]}:${endDateArray[4][endDate[4]]}:${endDateArray[5][endDate[5]]}`

      this.triggerEvent('confirm', {startTime, endTime})
      this.hide()
    },
    changeDateTime(e) {
      const param = e.currentTarget.dataset.param
      this.setData({
        [param]: e.detail.value
      });
    },
    changeDateTimeColumn(e) {
      const param = e.currentTarget.dataset.param
      let arr = this.data[param],
        dateArr = this.data[`${param}Array`];

      arr[e.detail.column] = e.detail.value;
      dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

      this.setData({
        [`${param}Array`]: dateArr,
        [param]: arr
      })
    },
    _catchtap() {}
  }
})