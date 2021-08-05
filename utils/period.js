/**
   1.const GetPeriod = require("../../utils/getperiod.js");
   2.在 onLoad 周期函数中 new GetPeriod()，并且用变量接收
    Page({
      onLoad(){
        this.time = new GetPeriod();
      }
    })
   3.方法说明
    let period = this.time.getPeriod(OBJECT);
 */
class Period {
  constructor() {
    this.now = new Date();
    this.nowYear = this.now.getYear(); //当前年 
    this.nowMonth = this.now.getMonth(); //当前月 
    this.nowDay = this.now.getDate(); //当前日 
    this.nowDayOfWeek = this.now.getDay() == 0 ? 7 : this.now.getDay(); //今天是本周的第几天
    this.nowYear += (this.nowYear < 2000) ? 1900 : 0;

    this.ms = 24 * 3600 * 1000 //一天的毫秒数
  }
  //格式化数字
  formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
  //格式化日期
  formatDate(date) {
    let myyear = date.getFullYear();
    let mymonth = date.getMonth() + 1;
    let myweekday = date.getDate();
    return [myyear, mymonth, myweekday].map(this.formatNumber).join('-');
  }
  //获取几天前的日期
  getAFewDaysAgo(num) {
    let aFewDaysAgo = this.formatDate(new Date(this.now.getTime() - num * this.ms))
    return aFewDaysAgo;
  }
  //获取几周前的日期
  getAFewWeeksAgo(num) {
    let aFewWeeksAgo = this.formatDate(new Date(new Date(this.getWeekStartDate()).getTime() - num * 7 * this.ms))
    return aFewWeeksAgo;
  }
  //获取几月前的日期
  getAFewMonthsAgo(num) {
    var day = new Date();
    day.setMonth(day.getMonth() - num);
    day.setDate(1)
    let aFewMonthsAgo = this.formatDate(day)
    return aFewMonthsAgo;
  }
  //获取某月的天数
  getMonthDays(myMonth) {
    let monthStartDate = new Date(this.nowYear, myMonth, 1);
    let monthEndDate = new Date(this.nowYear, myMonth + 1, 1);
    let days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
  }
  //获取本季度的开始月份
  getQuarterStartMonth() {
    let startMonth = 0;
    if (this.nowMonth < 3) {
      startMonth = 0;
    }
    if (2 < this.nowMonth && this.nowMonth < 6) {
      startMonth = 3;
    }
    if (5 < this.nowMonth && this.nowMonth < 9) {
      startMonth = 6;
    }
    if (this.nowMonth > 8) {
      startMonth = 9;
    }
    return startMonth;
  }
  //获取今天的日期
  getNowDate() {
    return this.formatDate(new Date(this.nowYear, this.nowMonth, this.nowDay));
  }
  //获取本周的开始日期
  getWeekStartDate() {
    return this.formatDate(new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek + 1));
  }
  //获取本周的结束日期
  getWeekEndDate() {
    return this.formatDate(new Date(this.nowYear, this.nowMonth, this.nowDay + (6 - this.nowDayOfWeek + 1)));
  }
  //获取本月的开始日期
  getMonthStartDate() {
    return this.formatDate(new Date(this.nowYear, this.nowMonth, 1));
  }
  //获取本月的结束日期
  getMonthEndDate() {
    return this.formatDate(new Date(this.nowYear, this.nowMonth, this.getMonthDays(this.nowMonth)));
  }
  //获取本季度的开始日期
  getQuarterStartDate() {
    return this.formatDate(new Date(this.nowYear, this.getQuarterStartMonth(), 1));
  }
  //获取本季度的结束日期 
  getQuarterEndDate() {
    return this.formatDate(new Date(this.nowYear, this.getQuarterStartMonth() + 2, this.getMonthDays(this.getQuarterStartMonth() + 2)));
  }
  //获取本年的开始日期
  getYearStartDate() {
    return this.formatDate(new Date(this.nowYear, 0, 1));
  }
  //获取本年的结束日期
  getYearEndDate() {
    return this.formatDate(new Date(this.nowYear, 11, 31));
  }
  //获取时段方法
  getPeriod(obj) {
    let opts = obj || {},
      time = null;
    opts = {
      periodType: opts.periodType || 'now',
      spaceType: opts.spaceType || '~'
    }

    function formatNumber(param1, param2) {
      return [param1, param2].join(opts.spaceType);
    }
    if (opts.periodType == 'week') {
      time = formatNumber(this.getWeekStartDate(), this.getWeekEndDate());
    } else if (opts.periodType == 'month') {
      time = formatNumber(this.getMonthStartDate(), this.getMonthEndDate());
    } else if (opts.periodType == 'quarter') {
      time = formatNumber(this.getQuarterStartDate(), this.getQuarterEndDate());
    } else if (opts.periodType == 'year') {
      time = formatNumber(this.getYearStartDate(), this.getYearEndDate());
    } else {
      time = formatNumber(this.getNowDate(), this.getNowDate());
    }
    return time;
  }
}
module.exports = Period;