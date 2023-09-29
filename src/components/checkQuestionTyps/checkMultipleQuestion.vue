<script setup>
import { useQuestionsStore } from '../../stores/questions';


const questionStore = useQuestionsStore();

const props = defineProps(['question']);

const picked = [];

let answer = null;

const saveChoice = (questionNumber, event, test) => {

        picked.push(test)
        answer = picked.filter((answer) => answer === answer )
        console.log('arrayOUTput', picked);
        //answer = picked.splice((answer) => answer === answer )
        console.log('OUTPUTANSWER', answer);


        questionStore.checkSolvedMultipleChoice(questionNumber, picked);
        console.log('P', picked, event);
        //console.log('P2', picked2, selectedChoice);
}

</script>


<template>
        <div v-for="item in props.question.choices" :key="item.text">
                <label>
                        <input type="checkbox" :value="item.text"
                                @change="(event) => saveChoice(props.question.questionNumber, event, item.text.substring(0, 1))" />
                        {{ item.text }}
                </label>
        </div>
</template>

<style scoped></style>

<!-- === props.question.answer.substring(0,1); -->
<!-- === props.question.answer.substring(0,2); -->