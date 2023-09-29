<script setup>
import { useQuestionsStore } from '../../stores/questions';
import { ref } from 'vue';

const questionStore = useQuestionsStore();

const props = defineProps(['question']);

const saveChoice = (questionNumber, selectedChoice1, selectedChoice2) => {
        const picked1 = selectedChoice1.substring(0,1) === props.question.answer.substring(0,1);
        const picked2 = selectedChoice2.substring(0,1) === props.question.answer.substring(0,2);
        
        questionStore.checkSolvedMultipleChoice(questionNumber, picked1, picked2);
        console.log('P1', picked1, selectedChoice1.substring(0,1));
        console.log('P2', picked2, selectedChoice2.substring(0,1));
        
}


</script>


<template>
        <div v-for="item in props.question.choices" :key="item.text">
                <label>
                        <input type="checkbox" value="item.text" 
                                @change="saveChoice(props.question.questionNumber, item.text, item.text)" />
                        {{ item.text }}
                </label>
        </div>
</template>

<style scoped></style>