<script setup>
import { useQuestionsStore } from '../../stores/questions';

const questionsStore = useQuestionsStore();

let currentQuestionIndex = 0;

function showNextQuestion() {
    currentQuestionIndex += 1;
    if (currentQuestionIndex >= questionsStore.questions.length) {
        currentQuestionIndex = 0;
    }
}

</script>

<template>
    <div class="button-container">
        <button @click="showNextQuestion">Forward</button>
    </div>
</template>

<style scoped></style>