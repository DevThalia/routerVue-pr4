<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawai">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/itb">ITB</router-link>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
</script>

<style scoped>
/* Container para asegurar que el contenido esté debajo del nav sticky */
.container {
  margin-top: 0px;  /* Da espacio después del nav sticky */
  padding: 20px;
}

/* Estilo para el contenido dentro de RouterView */
.container h1 {
  font-size: 2rem;  /* Aumenta el tamaño del título */
  text-align: center;
  margin-bottom: 20px;
}

.container h2 {
  font-size: 1.5rem;  /* Aumenta el tamaño de los subtítulos */
  text-align: center;
  margin-bottom: 15px;
}
</style>
