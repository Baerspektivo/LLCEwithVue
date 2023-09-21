import { defineStore } from 'pinia'
import { questions } from '../assets/questions'

export const useQuestionsStore = defineStore('useQuestionsStore', {
  //state
  state: () => ({
    questions: [],
    categorys: [],
  }),
  getters: {
    getCategorys: (state) => {
      return state.categorys
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
  },
  //actions
  actions: {
    loadQuestions() {
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

  //getters
})
