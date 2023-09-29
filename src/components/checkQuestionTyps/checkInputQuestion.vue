<script setup>
import { useQuestionsStore } from '../../stores/questions';

const questionStore = useQuestionsStore();

const props = defineProps(['question']);

const saveInput = (questionNumber, text) => {
    console.log('input exec', text)
    const picked = text.target.value;
    questionStore.checkInput(questionNumber, picked);
}
</script>


<template>
    <input type="text" placeholder="Enter your answer" name="answer"
        @change="(text) => saveInput(props.question.questionNumber, text)" />
</template>


<style scoped></style>