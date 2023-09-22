<script setup>
import './index.css'
import { useQuestionsStore } from './stores/questions';


const questions = useQuestionsStore();

questions.loadQuestions();

</script>

<template>
  <header>

    <div>  
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/learning">Learning-Mode</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <body>
    <div>
    
      <RouterView />
      
    </div>
  </body>

  <footer>
    test 123
  </footer>

</template>

<style>
</style>
