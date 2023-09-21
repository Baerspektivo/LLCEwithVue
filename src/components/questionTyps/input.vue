<!-- <script setup>
import { userAnswer } from '../../stores/question';

const answerStore = userAnswer()

const input=ref('');

function handleSubmit(){
    answerStore.setUserInput(input.value)
}

</script>

<template>
     <div>
        <form @submit.prevent="handleSubmit">
            <div>Your answer:</div>
            <input type="text" placeholder="Please enter your text" name="userAnswer" v-model="input" /><button>Answer</button>
        </form>
    </div>
</template>

<style scoped>
</style> -->