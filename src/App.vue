<template>
    <Navbar />
    <router-view></router-view>
    <footer />
</template>

<script setup>
import Navbar from "@/components/ui/Navbar.vue";
import footer from "@/components/ui/footer.vue";
</script>