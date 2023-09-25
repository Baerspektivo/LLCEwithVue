<script setup>
import { useQuestionsStore } from '../../stores/questions';

const questionsStore = useQuestionsStore();

let currentQuestionIndex = 0;

function showPreviusQuestion() {
    currentQuestionIndex -= 1;
    if (currentQuestionIndex <= 0) {
        currentQuestionIndex = questionsStore.questions.length - 1;
    }
}

</script>

<template>
    <div class="button-container">
        <button @click="showPreviusQuestion">Forward</button>
    </div>
</template>

<style scoped></style>