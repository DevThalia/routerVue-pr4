<template>
    <div>
        <h1>All destinations</h1>
        <div class="contenedorDestinos" v-if="destinations && destinations.length > 0">
            <div v-for="destination in destinations" :key="destination.id" class="destination-item">
                <h2>{{ destination.name }}</h2>
                <router-link :to="`/destination/${destination.name}`">
                    <img :src="`/img/${destination.image}`" :alt="destination.name" class="destination-image" />
                </router-link>
            </div>
        </div>
        <div v-else>
            <p>Cargando...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import data from '../assets/data.json';

const destinations = ref(data.destinations);

onMounted(() => {
    console.log(destinations.value);
});
</script>
