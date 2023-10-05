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
                    <span>The answer was wrong. <br> Try it again! </span>
                </div>
            </article>
            <button class="popup-close-button" @click.prevent="closeModel">
                <span class="popup-close-button-text">
                    Close
                </span>
            </button>
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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
}

.popup-content {
    background-color: white;
    padding: 20px;
    max-width: 80%;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    border-radius: 15px 50px;
}

.popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.popup-title {
    font-size: 1.5rem;
    padding-bottom: 5px;
}

.popup-close-button {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 10px 5px;
    text-decoration: none;
    color: #333;
    background: none;
    cursor: pointer;
    font-size: 1rem;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.popup-close-button :hover {
    padding: 5px;
    border-radius: 5px 10px;
    background-color: #0ca9f193;
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.popup-close-button-text {
    padding: auto;    
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
}

.popup-close-button-text :hover{
    background-color: #0ca9f193;
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.popup-close-button span {
    display: inline-block;
}


.popup-content-text {
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;
}
</style>