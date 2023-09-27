import { useAnswerStore } from '../stores/answer.js'

export function saveSinglChoiceAnswers(selectedValue){
    const store = useAnswerStore();
    store.saveSingleQuestions(selectedValue);
}