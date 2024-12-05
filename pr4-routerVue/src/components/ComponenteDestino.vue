<template>
    <div>
        <!-- Filtrar el destino según el nombre pasado en la ruta -->
        <div v-for="destination in destinations.filter(d => d.name === destinationName)" :key="destination.id" class="destination-card">

            <!-- Contenedor principal -->
            <div class="principal">
                <div class="title-container">
                    <h2>{{ destination.name }}</h2>
                    <button class="button" @click="goBack">Volver</button>
                </div>

                <div class="image-description-container">
                    <img :src="`/img/${destination.image}`" alt="Destination Image" class="destination-image" />
                    <p class="destination-description">{{ destination.description }}</p>
                </div>
            </div>

            <!-- Experiencias -->
            <div class="experiencias">
                <div v-for="experience in destination.experiences" :key="experience.slug" class="experience-card">
                    <h3>{{ experience.name }}</h3>
                    <img :src="`/img/${experience.image}`" alt="Experience Image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import data from '../assets/data.json';
import { useRoute, useRouter } from 'vue-router';

// Obtener el nombre del destino de la ruta dinámica
const route = useRoute();
const destinationName = route.params.name; 

const destinations = ref(data.destinations);

const router = useRouter();
const goBack = () => {
    router.push('/');
}
</script>
