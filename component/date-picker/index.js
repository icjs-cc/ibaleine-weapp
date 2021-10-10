// component/date-picker/index.js
const Period = require("../../utils/period.js");//时间获取工具类
Component({
  externalClasses: ['t-class'],
  properties: {
    color: {
      type: String,
      value: '#387dff'
    },
  },

  data: {
    granularity: 0,
    scope: 0,
    granularityList: [{
        name: '日',
          value: [{
            name: '今日'
          },{
            name: '近7天'
          },
          {
            name: '近30天',
            value: 1
          },
        ]
      },
      {
        name: '周',
        value: [{
          name: '本周'
        },{
          name: '近6周'
        }]
      },
      {
        name: '月',
        value: [{
          name: '本月'
        },{
          name: '近6月'
        }]
      }
    ],
    startDate: '',
    endDate: ''
  },
  attached(){
    this.period = new Period();
    this.setData({
      startDate: this.period.getNowDate(),
      endDate: this.period.getNowDate()
    })
  },
  methods: {
    getInitDate(){
      return {
        startDate: this.data.startDate + ' 00:00:00',
        endDate: this.data.endDate + ' 23:59:59'
      }
    },
    bindSelectChange(e){
      const type = e.currentTarget.dataset.type
      const index = e.currentTarget.dataset.idx
      if (type ==='granularity'){
        this.setData({
          scope: 0
        })
      }
      this.setData({
        [type]: index
      })
      const granularity = this.data.granularity, scope = this.data.scope
      let startDate = '', endDate = ''
      // 今日
      if (granularity == 0 && scope == 0){
        startDate = this.period.getNowDate()
        endDate = this.period.getNowDate()
      }
      // 近7天
      if (granularity == 0 && scope == 1) {
        startDate = this.period.getAFewDaysAgo(7)
        endDate = this.period.getNowDate()
      }
      // 近30天
      if (granularity == 0 && scope == 2) {
        startDate = this.period.getAFewDaysAgo(30)
        endDate = this.period.getNowDate()
      }
      // 本周
      if (granularity == 1 && scope == 0) {
        startDate = this.period.getWeekStartDate()
        endDate = this.period.getWeekEndDate()
      }
      // 近6周
      if (granularity == 1 && scope == 1) {
        startDate = this.period.getAFewWeeksAgo(6)
        endDate = this.period.getWeekEndDate()
      }
      // 本月
      if (granularity == 2 && scope == 0) {
        startDate = this.period.getMonthStartDate()
        endDate = this.period.getMonthEndDate()
      }
      // 近6个月
      if (granularity == 2 && scope == 1) {
        startDate = this.period.getAFewMonthsAgo(6)
        endDate = this.period.getMonthEndDate()
      }
      this.setData({ startDate,endDate })
      this.triggerEvent('change', {
        startDate: `${startDate} 00:00:00`,
        endDate: `${endDate} 23:59:59` 
      });
    },
    bindDateChange(e) {
      const param = e.currentTarget.dataset.param
      this.setData({
        [param]: e.detail.value,
        scope: -1
      })
      this.triggerEvent('change', {
        startDate: `${this.data.startDate} 00:00:00`,
        endDate: `${this.data.endDate} 23:59:59`
      });
    }
  }
})