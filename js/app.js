var app = new Vue({
  el: '#app',
  data: {
    questionsArray: [{}],
    activeQuestion: 0,
    selectAnswers: [],
    activeDisplay: 0
  },
  mounted: function () {
    var self = this

    axios.get('./js/data.json')
      .then(function (response) {
        self.questionsArray = response.data
      })
  },
  methods: {
    getSelectedAnswer: function (answer) {
      this.selectAnswers.push(answer)

      if(this.activeQuestion < (this.questionsArray.length - 1))
        this.activeQuestion++
      else
        this.activeDisplay++
    },
    checkDisplay: function (id) {
      if (id == this.activeDisplay)
        return 'd-block'
      else
        return 'd-none'
    }
  }
})