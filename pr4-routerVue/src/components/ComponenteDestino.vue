<template>
    <div v-if="currentDestination" class="destination-container">
        <!-- Contenedor principal -->
        <div class="principal">
            <div class="title-container">
                <h2>{{ currentDestination.name }}</h2>
                <button class="button" @click="goBack">Volver</button>
            </div>

            <div class="image-description-container">
                <img :src="`/img/${currentDestination.image}`" :alt="`Imagen de ${currentDestination.name}`"
                    class="destination-image" />
                <p class="destination-description">
                    {{ currentDestination.description }}
                </p>
            </div>
        </div>

        <!-- Experiencias -->
        <div class="experiencias" v-if="!selectedExperience">
            <div v-for="experience in currentDestination.experiences" :key="experience.slug" class="experience-card">
                <h3>{{ experience.name }}</h3>
                <img :src="`/img/${experience.image}`" :alt="`Imagen de la experiencia: ${experience.name}`"
                    @click="selectExperience(experience)" />
            </div>
        </div>

        <!-- Detalle de la experiencia seleccionada -->
        <ExperienceDetail v-if="selectedExperience" :experience="selectedExperience"
            @close="selectedExperience = null" />
    </div>

    <div v-else class="error-message">
        <p>Destino no encontrado. <button @click="goBack">Volver</button></p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import data from '../assets/data.json';
import { useRoute, useRouter } from 'vue-router';
import ExperienceDetail from './ExperienceDetail.vue';

const route = useRoute();
const destinationName = route.params.name;
const destinations = ref(data.destinations);

const currentDestination = computed(() =>
    destinations.value.find((d) => d.name === destinationName)
);

const selectedExperience = ref(null);

const selectExperience = (experience) => {
    selectedExperience.value = experience;
};

const router = useRouter();
const goBack = () => {
    router.push('/');
};
</script>

<style scoped>
.experience-card img {
    cursor: pointer;
    transition: transform 0.2s;
}

.experience-card img:hover {
    transform: scale(1.05);
}
</style>
