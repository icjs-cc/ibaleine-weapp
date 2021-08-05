// component/datetime-picker/index.js
Component({
  properties: {
    fixed: {
      type: '',
      value: false
    },
    startDate: {
      type: String,
      value: ''
    },
    endDate: {
      type: String,
      value: ''
    }
  },
  data: {
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAIAAAAJNFjbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTlDOUI1NUI3OUY0MTFFOUJDN0VEQTI4MzJEOTNGODIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTlDOUI1NUM3OUY0MTFFOUJDN0VEQTI4MzJEOTNGODIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOThCRjU1Qzc5RjQxMUU5QkM3RURBMjgzMkQ5M0Y4MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOThCRjU1RDc5RjQxMUU5QkM3RURBMjgzMkQ5M0Y4MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmulGgcAAANwSURBVHjaxFZbKGxhFN572wzJ7YE0oYhJzDQkxgsheaHmASmZF8qD5IUHLzNNJBSlGSXlWcIDD8KDS0zNRAqJYlwe5HqQW7nP+c759Z+dfTHOGZ31wJpv1r++PWuv/1uLvb29ZUR2c3NTXV19d3fX1dWl1WoZGcPZmpoaBHd2dur1eskYThL98dseHh52d3cZeTs/Pz87O0PYwcGBXAxP/h0dHa2vrz8/P8NPTExUqVQ04vT0dGlpSXxSLozjuPj4+JSUlHcCj8fT19c3Ojr69vZGoMrKysLCQnpyf3+/u7tbTKAclpmZabVag4ODeaQeHh4GlJqaqtPpwJ+WliZMpFarkUtMIBd2eHjocDiWl5fxYlpaWvjx8XGgZWVl9fX1NHpvb4/6cXFxtbW1kvWVC1tYWLBYLIuLi5eXlxyqD8hkMjG+s9zcXPCh+MfHxxxKj0qFhYUJIwICAogTGBiokIh+S+OFFcNfJOclT8bExHR0dKDN8/LyFAiQBYXGPVAI4+W+yM7O9qYaBoNBOeAXwePjI1qK8ant7Oz8IXh5eZmfn2e+x3jyrtra2nybd2BgYGtr653Az88vIyPDtwQjIyNKYnd9fQ0JE+MQHNTzA4hehOrJMUkQ9PT0GI3G0tLStbU1Cr6+vjY2NlZUVFRVVQnTXVxcACkvL6+rq5N8Jk48CcbGxuDc398PDg5SHGQrKytwTk5OJiYmKD45OUm0YHNzkwR8QhAUFBQaGiq8jcQiIyOhg8SPjo7+cGNhLMtGRUV9ftH8/f3b29uHhoaQEdOK4rGxsWazeXp6GqJbVFRE8fz8fMyc1dXVgoKCpKQkMQGL/oEWCX+1T6y5udnlctntdo75ZvsfBOi2mZkZjOgPOKbH1NSUwnz3Vk2bmpo2NjaIU1JSQkCsMBhYWDV4nrfZbHSmf/kXXF1dkeyw2dlZiqPNkZ0oo9Pp/PsShYeHY9oRPysri+IajSYkJIT0e3p6+tdKhHUIekLuEc739vbOzc1FRETk5OQIifv7+zHHcQ8Udj1qT09P7wTQarzV7e3t5ORkAuEmQ4skByS0yJunRkIycLCZceRxMIGVt0TvDc3W2tqKeY6SYsVjoVANDQ1ECCFEaJJ/yY5VBf1GSo0mLC4uZkHldrtRXzQ+hrMPZiTPJyQkQMOxHeHjTwEGAP/Lkwi8ehhfAAAAAElFTkSuQmCC',
    startDate: '',
    endDate: ''
  },
  ready(){
    this.setData({
      startDate: this.properties.startDate,
      endDate: this.properties.endDate
    })
  },
  methods: {
    bindDateChange(e){
      const param = e.currentTarget.dataset.param
      const value = e.detail.value
      this.setData({
        [param]: value
      })
      this.triggerEvent('change', [this.data.startDate,this.data.endDate])
    },
    handleClear(e){
      const param = e.currentTarget.dataset.param
      this.setData({
        [param]: ''
      })
      this.triggerEvent('change', [this.data.startDate, this.data.endDate])
    }
  }
})
