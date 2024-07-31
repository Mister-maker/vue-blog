<script setup>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar />
  <router-view v-slot="{ Component, route }">
    <transition name="route" mode="out-in">
      <div :key="route.name">  
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
  <Footer />
</template>

<style scoped>
 .route-enter-active,
.route-leave-active {
  transition: opacity 0.3s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}

</style>