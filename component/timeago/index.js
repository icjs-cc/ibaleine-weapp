// component/timeago/index.js
import { parse, diff, format } from './time-handle.js'
Component({
  externalClasses: ['iw-class'],
  properties: {
    to: {
      type: null,
      value: null,
      observer(newVal) {
        const { from, lang } = this.data
        this.updated(newVal, from, lang)
      },
    },
    from: {
      type: null,
      value: null,
      observer(newVal) {
        const { to, lang } = this.data
        this.updated(to, newVal, lang)
      },
    },
    refreshable: {
      type: Boolean,
      value: false,
      observer(newVal) {
        const { to, from, lang } = this.data
        this.updated(to, from, lang, true)
      },
    },
  },

  data: {
    currentTo: null,
    currentFrom: null,
    timeago: null,
  },
  methods: {
    /**
     * 更新时间
     * @param {Any} currentTo   当前开始时间
     * @param {Any} currentFrom 当前截止时间
     * @param {String} lang     返回文本的语言，可选值为 en、zh_CN、zh_TW
     * @param {Boolean} isForce 是否强制更新
     */
    updated(currentTo, currentFrom, lang, isForce) {
      // clearTimeout
      this.clearTimer()

      // check datetime
      if (currentTo !== this.data.currentTo || currentFrom !== this.data.currentFrom || isForce) {
        const diffTime = diff(currentTo, currentFrom)
        const timeago = format(diffTime, {
          second: ['刚刚', '片刻后'],
          seconds: ['%d 秒前', '%d 秒后'],
          minute: ['大约 1 分钟前', '大约 1 分钟后'],
          minutes: ['%d 分钟前', '%d 分钟后'],
          hour: ['大约 1 小时前', '大约 1 小时后'],
          hours: ['%d 小时前', '%d 小时后'],
          day: ['1 天前', '1 天后'],
          days: ['%d 天前', '%d 天后'],
          month: ['大约 1 个月前', '大约 1 个月后'],
          months: ['%d 月前', '%d 月后'],
          year: ['大约 1 年前', '大约 1 年后'],
          years: ['%d 年前', '%d 年后'],
        })
        this.setData({ currentTo, currentFrom, timeago }, () => {
          // check refreshable
          if (this.data.refreshable && !this.data.from) {
            const howOld = diff(currentTo, currentFrom, 'minute')
            const secondsUntilUpdate = howOld < 1 && 1 || howOld < 60 && 30 || howOld < 180 && 300 || 3600
            // setTimeout
            this.timeout = setTimeout(() => {
              this.updated(currentTo, this.getNow(), lang)
            }, secondsUntilUpdate * 1000)
          }
        })
      }
    },
    /**
     * 清除定时器
     */
    clearTimer() {
      if (this.timeout) {
        clearTimeout(this.timeout)
        this.timeout = null
      }
    },
    /**
     * 获取当前截止时间
     */
    getNow() {
      const { from } = this.data
      return from ? from && parse(from) : new Date()
    },
  },
  detached() {
    this.clearTimer()
  }
})
