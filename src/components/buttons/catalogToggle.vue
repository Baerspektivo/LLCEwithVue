<script setup>
import { useQuestionsStore } from '../../stores/questions';

const questionsStore = useQuestionsStore();


function toggleButton(catalog){
    console.log("button was pressed");
    questionsStore.toggleCatalog(catalog);
}

</script>


<template>
        <div class="button-container">
            <button @click="toggleButton(101)">Catalog 101</button>
            <button @click="toggleButton(102)">Catalog 102</button>
        </div>
</template>

<style scoped>
</style>