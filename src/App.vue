<script setup>
import './index.css'
import { useQuestionsStore } from './stores/questions';


const questions = useQuestionsStore();

questions.loadQuestions();

</script>

<template>
  <header>
    <div>  
      <nav class="side-navigation">
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/dashboard/question">Question</RouterLink>
        <RouterLink to="/dashboard/questlist">QuestionList</RouterLink>
      </nav>
    </div>
  </header>

  <body>
    <div>
    <h1>LLCE</h1>
      <RouterView />
    
    </div>
  </body>

  <footer>
   
  </footer>

</template>

<style>
</style>
