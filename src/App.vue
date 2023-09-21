<script setup>
import { useQuestionsStore } from './stores/questions';
import { onMounted } from 'vue';
const questions = useQuestionsStore();

questions.loadQuestions();

onMounted(() => {
  console.log(questions.getQuestionCount('101'));
}) 

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
</style>
