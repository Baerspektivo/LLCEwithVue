<script setup lang="ts">
//import { singleChoice } from '../../service/testSingleChoice'
import { onMounted, onBeforeMount , ref } from 'vue';

const props = defineProps(['question'])

const picked = ref(null)

onBeforeMount(() => {
        picked.value = null
})


</script>

<template>
        <label>
                <div v-for="item in props.question.choices" :key="item.text" >
                        <input type="radio" :value="item.text" v-model="picked" @click="$emit('choice', picked)"/>
                                {{ item.text }}
                </div>
                {{ picked }}
        </label>
</template>

<style scoped>

</style>