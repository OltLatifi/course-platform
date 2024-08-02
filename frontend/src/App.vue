<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import Footer from './components/Footer.vue'
    import NavBar from './components/NavBar.vue'
</script>

<template>
    <NavBar />
    <div class="min-h-screen w-[96%] mx-auto">
        <RouterView />
    </div>
    <Footer />
</template>