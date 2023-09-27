// import { computed,ref } from "vue";
// import { storeToRefs } from 'pinia';
// import { useQuestionsStore } from '../stores/questions';
// import toggleButto from '../../components'


// export function currentQuestion() {
//     const questionsStore = useQuestionsStore();
//     const toggleButto  = ref(true)
//     return computed(() => {
//         const { questions } = storeToRefs(questionsStore);
        
//             return questions.value.filter(question => {
//                 if (toggleButto.value) {
//                     return question.category.toString() === '101';
//                 } else {
//                     return question.category.toString() === '102';
//                 }
//             })
//     })
// }