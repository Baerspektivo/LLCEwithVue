<script setup>
import { useQuestionsStore } from '../../stores/questions';


const questionStore = useQuestionsStore();

const props = defineProps(['question']);

const picked = [];

let answer = null;

const saveChoice = (questionNumber, event, text) => {
        if (!picked.includes(text)) {
                picked.push(text)
        } else {
                const index = picked.indexOf(text)
                if (index !== -1) {
                        picked.splice(index, 1)
                }
        }
        answer = picked.sort().join('');
        questionStore.checkSolvedMultipleChoice(questionNumber, answer);
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