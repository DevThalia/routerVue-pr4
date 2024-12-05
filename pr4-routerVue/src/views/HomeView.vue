<template>
    <div>
        <h1>All destinations</h1>
        <!-- Contenedor de destinos -->
        <div class="contenedorDestinos" v-if="destinations && destinations.length > 0">
            <div v-for="destination in destinations" :key="destination.id" class="destination-item">
                <h2>{{ destination.name }}</h2>
                <!-- Imagen en línea -->
                <img 
                    :src="`/img/${destination.image}`" 
                    :alt="destination.name" 
                    class="destination-image"
                />
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

<style scoped>
nav {
    position: sticky;
    top: 0;
    background-color: #fff; 
    z-index: 1000; 
}

.contenedorDestinos {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;  
    justify-content: flex-start;
    gap: 10px;
    box-sizing: border-box;
    margin-top: 30px;  
}

.destination-item {
    flex-shrink: 0; 
    width: 300px;   
    text-align: center;
}

.destination-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h1 {
    margin-top: 20px; 
    text-align: center;
}

h2 {
    text-align: center;
}
</style>
