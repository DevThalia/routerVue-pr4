<template>
    <div class="experience-detail" v-if="experience">
        <button class="button" @click="closeExperience">Cerrar</button>
        <h2>{{ experience.name }}</h2>
        <img :src="`/img/${experience.image}`" :alt="`Imagen de la experiencia: ${experience.name}`" />
        <p>{{ experience.description }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    experience: Object, 
});

const emits = defineEmits(['close']);

const closeExperience = () => {
    emits('close');
};
</script>

<style scoped>

</style>
