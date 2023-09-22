<script setup>
import singleQuestion from '../../components/questionTyps/singleQuestion.vue';
import multipleQuestion from '../../components/questionTyps/multipleQuestion.vue';
import inputQuestion from '../../components/questionTyps/inputQuestion.vue';
import questionAnswer from '../../components/questionTyps/questionAnswer.vue';
import { useQuestionsStore } from '../../stores/questions';

const questionsStore = useQuestionsStore();


</script>

<template>
    <div class="question-section">
        <div class="question-type-buttons">
            
        </div>
            <div class="question-container" >
                <div v-for="question in questionsStore.questions" :key="question.questionNumber">
            <div class="question-block">
                <div>
                    <h3>Question: {{ question.questionNumber }}</h3>
                    <div class="question-text">
                        Question: {{ question.questionText }}
                </div>
            </div>
            <div class="choice-text">
                    <div>
                        <singleQuestion v-if="question.questionType === 'single'" :question="question" />
                    </div>
                    <div>
                        <multipleQuestion v-if="question.questionType === 'multiple'" :question="question" />
                    </div>
                    <div>
                        <inputQuestion v-if="question.questionType === 'input'" :question="question" />
                    </div>
                    <div class="answer">
                        Answer: <questionAnswer :question="question"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>