import { defineStore } from 'pinia'
import  questions  from '../assets/questions.json'

export const useQuestionsStore = defineStore('useQuestionsStore', {
  //state
  state: () => ({
    questions: [],
    categorys: [],
    currentQuestionGetter: [],
    toggleButton: true,
    currentQuestionIndex: 0,
  }),
  
  //computed getters
   getters: {
    currentQuestionGetter(state){
      return state.questions[state.currentQuestionIndex];
    },
    
   },
  
  //actions setter
  actions: {
    
    loadQuestions() {
      const data = questions
      Object.keys(data).forEach((key) => {
        this.categorys.push(key)
        data[key].forEach((question) => {
          this.questions.push({ ...question, category: key })
        })
      })
    },
    toggleCatalog(catalog){
      if (this.toggleButton) {
        return this.questions.filter ((questions) => questions.category === catalog)
      }else{
        return questions.filter ((questions) => questions.category === catalog)
      }
    
    },
      
    setCurrentQuestions(questions){
      this.currentQuestionGetter = questions;
    },
    showNextQuestion() {
      this.currentQuestionIndex += 1;
      if (this.currentQuestionIndex >= this.questions.length) {
          this.currentQuestionIndex = 0;
      }
    },
  
   showPreviusQuestion() {
      this.currentQuestionIndex -= 1;
      if (this.currentQuestionIndex < 0) {
          this.currentQuestionIndex = this.questions.length - 1;
      }
    },
  },

})
