<script setup lang="ts">
const props = defineProps(['question'])


</script>

<template>
        <label>
                <div v-for="item in props.question.choices" :key="item.text">
                        <li>
                                {{ item.text }}
                        </li>
                </div>
        </label>
</template>

<style scoped>

</style>