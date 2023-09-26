<script setup>
const props = defineProps(['question'])


</script>

<template>
        <label>
                {{ props.question.answer }}
        </label>
</template>

<style scoped>

</style>