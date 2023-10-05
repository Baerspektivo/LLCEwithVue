<script setup>
import { ref } from 'vue';
import { useQuestionsStore } from '../../stores/questions';
import  useRouter  from '../../router/index'
import singleQuestion from '../../components/checkQuestionTyps/checkSingleQuestion.vue';
import multipleQuestion from '../../components/checkQuestionTyps/checkMultipleQuestion.vue';
import inputQuestion from '../../components/checkQuestionTyps/checkInputQuestion.vue';
import catalogToggle from '../../components/buttons/catalogToggle.vue';
import failPopUp from '../../components/popups/fail.vue';
import statisticPopUp from '../../components/popups/statistic.vue';


const router = useRouter();
const questionStore = useQuestionsStore();
const isOpened = ref(false);
const isEnd = ref(false);

function showNextQuestion() {
    if (questionStore.currentQuestionIndex !== questionStore.questions.length) {
        if (questionStore.wrongCounterGetter != 7) {
            if (questionStore.currentQuestionGetter.solved === true) {
                questionStore.setRightCounter();
                questionStore.showNextQuestion();
            }else{
                questionStore.setWrongCounter();
                questionStore.showPreviusQuestion();
                isOpened.value = true;
            }
        }
    }
}

function skipQuestion(){
    questionStore.showNextQuestion();
}

function showPreviusQuestion() {
    questionStore.showPreviusQuestion();
}
</script>

<template>
    <div class="question-section">
        <div>
            <teleport to="header">
                <statisticPopUp v-if="isEnd" @close="isEnd = !isEnd" />
                <failPopUp v-if="isOpened" @close="isOpened = !isOpened" />
            </teleport>
        </div>
        
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
                    </div>
                </div>
            </div>

            <div class="button-container">
                <button @click="showPreviusQuestion">Back</button>
                <button @click="showNextQuestion">Forward</button>
                <button @click="skipQuestion">Skip</button>
            </div>
            
        </div>
    </div>
</template>

<style scoped></style>