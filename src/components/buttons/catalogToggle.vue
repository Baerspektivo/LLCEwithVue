<script setup>
import { useQuestionsStore } from '../../stores/questions';

const questionsStore = useQuestionsStore();


function toggleButton(catalog){
    questionsStore.toggleCatalog(catalog);
}

</script>


<template>
    <div class="button-container">
        <button v-for="category in questionsStore.categories" :key="category"
                @click="toggleButton(category)"
                >
                Category {{ category }}
        </button>
    </div>
</template>

<style scoped>
</style>
