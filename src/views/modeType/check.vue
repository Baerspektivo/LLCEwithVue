<script setup>
import { ref, computed } from 'vue';
import singleQuestion from '../../components/checkQuestionTyps/checkSingleQuestion.vue';
import multipleQuestion from '../../components/checkQuestionTyps/checkMultipleQuestion.vue';
import inputQuestion from '../../components/checkQuestionTyps/checkInputQuestion.vue';
import { useQuestionsStore } from '../../stores/questions';
import { storeToRefs } from 'pinia';

const questionsStore = useQuestionsStore();

const { questions } = storeToRefs(questionsStore);

const currentQuestionIndex = ref(0);
const toogleButton = ref(true);

function showNextQuestion() {
    currentQuestionIndex.value += 1;
    if (currentQuestionIndex.value >= questionsStore.questions.length) {
        currentQuestionIndex.value = 0;
    }
}

function showPreviusQuestion() {
    currentQuestionIndex.value -= 1;
    if (currentQuestionIndex.value < 0) {
        currentQuestionIndex.value = questionsStore.questions.length - 1;
    }
}

const currentQuestions = computed(() => {
    return questions.value.filter(question => {
        if (toogleButton.value) {
            return question.category.toString() === '101';
        } else {
            return question.category.toString() === '102';
        }
    })
})

</script>

<template>
    <div class="question-section">
        <div class="button-container">
            <button @click="toogleButton = true">Catalog 101</button>
            <button @click="toogleButton = false">Catalog 102</button>
        </div>
        <div class="question-container">
            
            <div>
                <div class="question-block">
                    <h2>Catalog {{ currentQuestions[currentQuestionIndex].category }} </h2>
                    <div>
                        <h3>Question: {{ currentQuestions[currentQuestionIndex].questionNumber }}</h3>
                        <div class="question-text">
                            Question: {{ currentQuestions[currentQuestionIndex].questionText }}
                        </div>
                    </div>
                    <div class="choice-text">
                        <div>
                            <singleQuestion v-if="currentQuestions[currentQuestionIndex].questionType === 'single'"
                                :question="currentQuestions[currentQuestionIndex]" @choice="(value) => console.log('pick', value)"/>
                        </div>

                        <div>
                            <multipleQuestion v-if="currentQuestions.questionType === 'multiple'"
                                :question="currentQuestions[currentQuestionIndex]" />
                        </div>
                        <div>
                            <inputQuestion v-if="currentQuestions.questionType === 'input'"
                                :question="currentQuestions[currentQuestionIndex]" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="button-container">
                <button @click="showPreviusQuestion">Back</button>
                <button @click="showNextQuestion">Forward</button>
            </div>
            
        </div>
    </div>
</template>

<style scoped></style>