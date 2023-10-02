<script setup>
import { ref } from 'vue';

const message = ref('The answer was wrong');
const emit = defineEmits(['close']);

const closeModel = () => {
    emit('close');
}
</script>

<template>
    <div class="popup" @click.self="closeModel">
        <div class="popup-content">
            <div class="popup-header">
                <h2 class="popup-title">{{ message }}</h2>
            </div>
            <article>
                <div class="popup-content-text">
                    The answer was wrong. Try it again.
                </div>
            </article>
            <div class="">
                <button class="popup-close-button" @click.prevent="closeModel">
                    <span>
                        Close
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    z-index: 9999;
}

.popup-content {
    background-color: white;
    padding: 20px;
    max-width: 80%;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    position: relative;
}

.popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.popup-title {
    font-size: 1.5rem;
}

.popup-close-button {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-decoration: none;
    color: #333;
    background: none;
    cursor: pointer;
    font-size: 1rem;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.popup-close-button span {
    display: inline-block;
}

.popup-close-button :hover {
    background-color: thistle;
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.popup-content-text {
    font-size: 1rem;
}
</style>