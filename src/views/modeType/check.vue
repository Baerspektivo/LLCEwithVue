<script setup>
import { useQuestionsStore } from '../../stores/questions';
import { saveSinglChoiceAnswers } from '../../service/saveSingleChoiceAnswer';
import singleQuestion from '../../components/checkQuestionTyps/checkSingleQuestion.vue';
import multipleQuestion from '../../components/checkQuestionTyps/checkMultipleQuestion.vue';
import inputQuestion from '../../components/checkQuestionTyps/checkInputQuestion.vue';
import catalogToggle from '../../components/buttons/catalogToggle.vue';


const questionStore = useQuestionsStore();

const saveSingleAnswer = (selectedValue) => {
    saveSinglChoiceAnswers(selectedValue);
}

function showNextQuestion() {
    questionStore.showNextQuestion();
}

function showPreviusQuestion() {
    questionStore.showPreviusQuestion();
}

</script>

<template>
    <div class="question-section">
        <div class="button-container">
           <catalogToggle></catalogToggle>
        </div>
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
                                :question="questionStore.currentQuestionGetter" @choice="saveSingleAnswer"/>
                        </div>

                        <div>
                            <multipleQuestion v-if="questionStore.currentQuestionGetter.questionType === 'multiple'"
                                :question="questionStore.currentQuestionGetter" />
                        </div>
                        <div>
                            <inputQuestion v-if="questionStore.currentQuestionGetter.questionType === 'input'"
                                :question="questionStore.currentQuestionGetter" />
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