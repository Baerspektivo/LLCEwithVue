<script setup>
import { useQuestionsStore } from '../../stores/questions';

const questionStore = useQuestionsStore();

const props = defineProps(['question']);

const saveInput = (questionNumber, event) => {
    console.log('input exec', event)
        const picked = event.target.value;
questionStore.checkInput(questionNumber, picked);
}

</script>


<template>
    
        <form @submit="(event) => saveInput(props.question.questionNumber, event)">
            <input type="text" placeholder="Enter your answer" name="answer" />
            <button @submit="console.log('  push da button ')"> push </button>
        </form>

</template>

<!-- (event) => saveInput(props.question.questionNumber, event) -->

<style scoped>
</style>