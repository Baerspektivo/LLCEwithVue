<script setup>
import { useQuestionsStore } from '../../stores/questions';
import singleQuestion from '../../components/listingQuestionTyps/singleQuestion.vue';
import multipleQuestion from '../../components/listingQuestionTyps/multipleQuestion.vue';
import inputQuestion from '../../components/listingQuestionTyps/inputQuestion.vue';
import questionAnswer from '../../components/listingQuestionTyps/questionAnswer.vue';
import catalogToggle from '../../components/buttons/catalogToggle.vue';


const questionStore = useQuestionsStore();
function showNextQuestion() {
    questionStore.showNextQuestion();
}

function showPreviusQuestion() {
    questionStore.showPreviusQuestion();
}

</script>


<template>
    <div class="question-section">
        <catalogToggle></catalogToggle>
        <div class="question-container">
            
            <div>
                <div class="question-block">
                    <h2>Catalog {{ questionStore.currentQuestionGetter.category }} </h2>
                    <div>
                        <h3>Question: {{ questionStore.currentQuestionGetter.questionNumber }}</h3>
                        <div class="question-text">
                            Question: {{ questionStore.currentQuestionGetter.questionText }}
                        </div>
                    </div>
                    <div class="choice-text">
                        <div>
                            <singleQuestion v-if="questionStore.currentQuestionGetter.questionType === 'single'"
                                :question="questionStore.currentQuestionGetter" />
                        </div>

                        <div>
                            <multipleQuestion v-if="questionStore.currentQuestionGetter.questionType === 'multiple'"
                                :question="questionStore.currentQuestionGetter" />
                        </div>
                        <div>
                            <inputQuestion v-if="questionStore.currentQuestionGetter.questionType === 'input'"
                                :question="questionStore.currentQuestionGetter" />
                        </div>
                        <div class="answer">
                            Answer:
                            <questionAnswer :question="questionStore.currentQuestionGetter" />
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