import { defineStore } from 'pinia'
import  questions  from '../assets/questions.json'

export const useQuestionsStore = defineStore('useQuestionsStore', {
  //state
  state: () => ({
    questions: [],
    categorys: [],
  }),
  
  //computed getters
  getters: {
    getCategorys: (state) => {
      return state.categorys
    },
    getByQuestionType: (state) => {
      return (questionType) => {
        return state.questions.filter(question => question.questionType === questionType) }
    },
    getQuestionsByCategory: (state) => {
      return (category) => {
        return state.questions.filter(
          (question) => question.category === category,
        )
      }
    },
    getQuestionCount: (state) => {
        return (category) => state.questions.filter(question=> question.category === category).length
    },
    getQuestion: (state) => {
      return (category, index) => {
        return state.questions.find(
          (question) =>
            question.category === category && index == question.questionNumber,
        )
      }
    },
    getQuestionByQuestionNumber: (state) => {
      return state.questions.filter(question => question === question.questionNumber)
    }
  },
  
  //actions setter
  actions: {
    
    loadQuestions() {
      // console.log(this.questions);
      const data = questions
      console.log(data)
      Object.keys(data).forEach((key) => {
        this.categorys.push(key)
        data[key].forEach((question) => {
          this.questions.push({ ...question, category: key })
        })
      })
    },
  },

})
