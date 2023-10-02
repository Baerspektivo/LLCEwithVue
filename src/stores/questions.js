import { defineStore } from 'pinia'
import  questions  from '../assets/questions.json'

export const useQuestionsStore = defineStore('useQuestionsStore', {
  //state
  state: () => ({
    questions: [],
    categories: [],
    currentQuestionGetter: [],
    currentQuestionIndex: 0,
    activeCategory: '101',
    wrongCounter: 0,
    rightCounter: 0,
  }),

  //computed getters
   getters: {
    currentQuestionGetter(state){
      const filteredQuestions = this.questions.filter ((questions) => questions.category === state.activeCategory);
      return filteredQuestions[state.currentQuestionIndex];
    },
    categoryQuestions(state) {
      return this.questions.filter ((questions) => questions.category === state.activeCategory);
    },
    numberOfCategoryQuestions(state) {
      return this.questions.filter ((questions) => questions.category === state.activeCategory).length;
    }
   },

  //actions setter
  actions: {

    loadQuestions() {
      const data = questions;
      Object.keys(data).forEach((key) => {
        this.categories.push(key)
        data[key].forEach((question) => {
          this.questions.push({ ...question, category: key, solved: false })
        })
      })
      this.toggleCatalog(this.activeCategory);
    },

    checkSolvedSingleChoice(questionNumber, answer){
      this.questions = this.questions.map(question => {
        if (question.questionNumber.toString() === questionNumber.toString()) {
          return {... question, solved: answer.substring(0,1) === question.answer}
        } else {
          return question;
        }
      });
    },

    checkSolvedMultipleChoice(questionNumber, answer){
      this.questions = this.questions.map(question => {
        if (question.questionNumber.toString() === questionNumber.toString()) {
          const solved = answer === question.answer.split('').sort().join('');
          return {... question, solved}
        } else {
          return question;
        }
      });
    },

    checkInput(questionNumber, answer){
      this.questions = this.questions.map(question => {
        if (question.questionNumber.toString() === questionNumber.toString()) {
          return {...question, solved: answer === question.answer}
        } else {
          return question;
        }
      })
    },

    toggleCatalog(catalog){
      this.currentQuestionIndex = 0;
      this.activeCategory = catalog;
    },

    setCurrentQuestions(questions){
      this.currentQuestionGetter = questions;
    },
    showNextQuestion() {
      if (this.currentQuestionIndex < this.numberOfCategoryQuestions - 1) {
          this.currentQuestionIndex++;
      }
    },
   showPreviusQuestion() {
     if (this.currentQuestionIndex > 0) {
          this.currentQuestionIndex--;
      }
    },
    setWrongCounter(){
      const currentQuestion = this.currentQuestionGetter;
      if (currentQuestion && !currentQuestion.solved) {
        this.wrongCounter++;
        console.log('WRONG:', this.wrongCounter)
      }
    },
    setRightCounter(){
      const currentQuestion = this.currentQuestionGetter;
      if (currentQuestion && currentQuestion.solved) {
        this.rightCounter++;
        console.log('RIGHT:', this.rightCounter)
      }
    },
  },

})
