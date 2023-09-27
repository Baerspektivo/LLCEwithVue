<script setup>
import { ref } from 'vue';

const props = defineProps(['question'])

const checkbox = ref(false)

</script>

<template>
        <label>
                <div v-for="item in props.question.choices" :key="item.text" >
                        <input type="checkbox" id="checkbox" value="checked" v-model="checkbox" />
                                <label for="checked">{{ item.text }} | {{ item.selected }}</label>
                                
                </div>
        </label>
</template>

<style scoped>

</style>