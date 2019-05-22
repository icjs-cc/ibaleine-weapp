// pages/word-cloud/index.js
Page({

  data: {
    wordCloudArray:[
      'iwhale-ui', 'python', 'ios', 'weapp', 'java', 'nodejs', 'php'
    ],
    wordCloudObjectArray: [
      { id: 1, title: 'iwhale-ui'},
      { id: 2, title: 'python' },
      { id: 3, title: 'ios' },
      { id: 4, title: 'weapp' },
      { id: 5, title: 'java' },
      { id: 6, title: 'nodejs' },
      { id: 7, title: 'php' },
      { id: 8, title: 'Android' },
      { id: 9, title: 'Objective-C' },
      { id: 10, title: 'C#' },
      { id: 11, title: 'Go' },
      { id: 12, title: 'C++' },
      { id: 13, title: 'HTML' },
      { id: 14, title: 'Swift' },
      { id: 15, title: 'Ruby' }
    ],
    colors: ["#EE2C2C", "#ff7070", "#EEC900", "#4876FF", "#ff6100",
      "#7DC67D", "#E17572", "#7898AA", "#C35CFF", "#33BCBA", "#C28F5C",
      "#FF8533", "#6E6E6E", "#428BCA", "#5cb85c", "#FF674F", "#E9967A",
      "#66CDAA", "#00CED1", "#9F79EE", "#CD3333", "#FFC125", "#32CD32",
      "#00BFFF", "#68A2D5", "#FF69B4", "#DB7093", "#CD3278", "#607B8B"]
  },
  handleClick(e){
    console.log(e)
  },
  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {

  }
})