<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(['question'])

const picked = ref('props.question.choices')

</script>

<template>
        <label>
                <div v-for="item in props.question.choices" :key="item.text" >
                        <input type="radio" value="item.selected" v-model="picked" />
                                {{ item.text }} | {{ item.selected }}
                
                </div>
        </label>
</template>

<style scoped>

</style>