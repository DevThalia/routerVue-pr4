<template>
    <div class="experiencias">
        <div v-for="experience in props.destination.experiences" :key="experience.slug" class="experience-card">
            <h3>{{ experience.name }}</h3>
            <img :src="`/img/${experience.image}`" alt="Experience Image" />
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import data from '../assets/data.json'

//Obtener datos de json
const destinations = ref(data.destinations);

import { defineProps } from 'vue';

const props = defineProps({
  destination: {
    type: Object,
    required: true
  }
});


</script>