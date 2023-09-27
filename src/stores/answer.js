import { defineStore } from 'pinia'
import SingleQuestion from '../components/checkQuestionTyps/checkSingleQuestion.vue'
// import checkMultipleQuestion from '../components/checkQuestionTyps/checkMultipleQuestion.vue'
// import checkInputQuestion from '../components/checkQuestionTyps/checkInputQuestion.vue'

export const useAnswerStore = defineStore('useAnswerStore', {
    //state
    state: () => ({
      single: [],
      multiple: [],
      input:[],
    }),
    
    //computed getters
     getters: {
     },
    
    //actions setter
    actions: { 
        saveSingleQuestions(){
            Object.keys(SingleQuestion.getPicked()).forEach(() => {
                this.single.push(...SingleQuestion.getPicked())
            })
            
        }
    }
  
  })