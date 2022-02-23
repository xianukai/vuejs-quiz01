new Vue({
  el: '#app',
  data: {
    questions: [
      {
        question: '囲碁の石の大きさはどっちが大きい？',
        answers: [
            '白い石',
            '黒い石',
            'どちらも同じ',
        ],
        answer: 1
      },
      {
        question: 'コンビニチェーンのセブンイレブン。アルファベット表記で１文字だけ小文字なのは？',
        answers: [
            'N',
            'L',
            'V',
        ],
        answer: 0
      },
      {
        question: 'カラオケは「空○○」略です。空欄に入る言葉は何？',
        answers: [
            'OK',
            'オーケストラ',
            'おけら',
        ],
        answer: 1
      }
    ],
    questionIndex: 0,
    answers: [],
  },
  computed: {
    currentQuestion: function() {
      return this.questions[this.questionIndex];
    },
    completed: function() {
      return (this.questions.length == this.answers.length);
    }
  },
  methods: {
    addAnswer: function(index) {
      this.answers.push(index);

    if(!this.completed) {

        this.questionIndex++;

    }
  
  }
  }
})