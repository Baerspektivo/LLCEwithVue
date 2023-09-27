<script setup>
//import { singleChoice } from '../../service/testSingleChoice'
import { ref } from 'vue';

const props = defineProps(['question'])

const picked = ref(null);

</script>

<template>
        <div v-for="item in props.question.choices" :key="item.text">
                <label>
                        <input type="radio" :value="item.text" v-model="picked" @click="$emit('choice', picked)" />
                        {{ item.text }}
                </label>
        </div>
        {{ picked }}
</template>

<style scoped>
</style>