<script setup>
import { useQuestionsStore } from '../../stores/questions';

const questionStore = useQuestionsStore();

const props = defineProps(['question']);

const saveChoice = (questionNumber, event) => {
        const picked = event.target.value;
        questionStore.checkSolvedSingleChoice(questionNumber, picked);
}

</script>

<template>
        <div v-for="item in props.question.choices" :key="item.text">
                <label>
                        <input type="radio" :value="item.text" name="radio"
                                @change="(event) => saveChoice(props.question.questionNumber, event)" />
                        {{ item.text }}
                </label>
        </div>
</template>

<style scoped></style>