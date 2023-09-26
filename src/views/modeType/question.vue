<script setup>
import { ref, computed } from 'vue';
import singleQuestion from '../../components/listingQuestionTyps/singleQuestion.vue';
import multipleQuestion from '../../components/listingQuestionTyps/multipleQuestion.vue';
import inputQuestion from '../../components/listingQuestionTyps/inputQuestion.vue';
import questionAnswer from '../../components/listingQuestionTyps/questionAnswer.vue';
import { useQuestionsStore } from '../../stores/questions';
import { storeToRefs } from 'pinia';


const questionsStore = useQuestionsStore();

const { questions } = storeToRefs(questionsStore);

const currentQuestionIndex = ref(0);
const toogleButton = ref(true);
// const arrayCatgory101 = ref([]);
// const arrayCategory102 = ref([]);

function showNextQuestion() {
    currentQuestionIndex.value += 1;
    if (currentQuestionIndex.value >= questionsStore.questions.length) {
        currentQuestionIndex.value = 0;
    }
}

function showPreviusQuestion() {
    currentQuestionIndex.value -= 1;
    if (currentQuestionIndex.value <= 0) {
        currentQuestionIndex.value = questionsStore.questions.length - 1;
    }
}

/*
for (let index = 0; index < questionsStore.questions.length; index++) {
    if (questionsStore.questions[index].category == 101) {
        arrayCatgory101.value.push(questionsStore.questions[index])
    }else{
        arrayCategory102.value.push(questionsStore.questions[index])
    };
}*/

const currentQuestions = computed(() => {
    console.log('here', questions.value);
    return questions.value.filter(question => {
        if (toogleButton.value) {
            return question.category === 101;
        } else {
            return question.category === 102;
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
                <div class="question-block" v-if="currentQuestionIndex.length >= 0">
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
                                :question="questionsStore.questions[currentQuestionIndex]" />
                        </div>

                        <div>
                            <multipleQuestion v-if="currentQuestions.questionType === 'multiple'"
                                :question="questionsStore.questions[currentQuestionIndex]" />
                        </div>
                        <div>
                            <inputQuestion v-if="currentQuestions.questionType === 'input'"
                                :question="questionsStore.questions[currentQuestionIndex]" />
                        </div>
                        <div class="answer">
                            Answer:
                            <questionAnswer :question="currentQuestions[currentQuestionIndex]" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div v-if="toogleButton"
                class="question-block">
                <h2>Catalog {{ arrayCatgory101[currentQuestionIndex].category }} </h2>
                <div>
                    <h3>Question: {{ arrayCatgory101[currentQuestionIndex].questionNumber }}</h3>
                    <div class="question-text">
                        Question: {{ arrayCatgory101[currentQuestionIndex].questionText }}
                    </div>
                </div>
                <div class="choice-text">
                    <div>
                        <singleQuestion v-if="arrayCatgory101[currentQuestionIndex].questionType === 'single'"
                            :question="questionsStore.questions[currentQuestionIndex]" />
                    </div>

                    <div>
                        <multipleQuestion v-if="arrayCatgory101.questionType === 'multiple'"
                            :question="questionsStore.questions[currentQuestionIndex]" />
                    </div>
                    <div>
                        <inputQuestion v-if="arrayCatgory101.questionType === 'input'"
                            :question="questionsStore.questions[currentQuestionIndex]" />
                    </div>
                    <div class="answer">
                        Answer:
                        <questionAnswer :question="arrayCatgory101[currentQuestionIndex]" />
                    </div>
                </div>
            </div> -->

            <!-- <div v-else-if="!toogleButton"
                class="question-block">
                <h2>Catalog {{ arrayCategory102[currentQuestionIndex].category }}</h2>
                <div>
                    <h3>Question: {{ arrayCategory102[currentQuestionIndex].questionNumber }}</h3>
                    <div class="question-text">
                        Question: {{ arrayCategory102[currentQuestionIndex].questionText }}
                    </div>
                </div>
                <div class="choice-text">
                    <div>
                        <singleQuestion v-if="arrayCategory102[currentQuestionIndex].questionType === 'single'"
                            :question="questionsStore.questions[currentQuestionIndex]" />
                    </div>

                    <div>
                        <multipleQuestion v-if="arrayCategory102.questionType === 'multiple'"
                            :question="questionsStore.questions[currentQuestionIndex]" />
                    </div>
                    <div>
                        <inputQuestion v-if="arrayCategory102.questionType === 'input'"
                            :question="questionsStore.questions[currentQuestionIndex]" />
                    </div>
                    <div class="answer">
                        Answer:
                        <questionAnswer :question="arrayCategory102[currentQuestionIndex]" />
                    </div>
                </div>
            </div> -->


            <div class="button-container">
                <button @click="showPreviusQuestion">Back</button>
                <button @click="showNextQuestion">Forward</button>
            </div>

        </div>

    </div>
</template>

<style scoped></style>