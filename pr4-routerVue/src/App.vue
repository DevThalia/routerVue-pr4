<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/destination/Brazil">Brazil</router-link>
    <router-link to="/destination/Panama">Panama</router-link>
    <router-link to="/destination/Hawai">Hawaii</router-link>
    <router-link to="/destination/Jamaica">Jamaica</router-link>
    <router-link to="/destination/Dashboard">Dashboard</router-link>
    <router-link to="/destination/Itb">ITB</router-link>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>