<template>
  <div class="app-container">
    <Navbar />
    <div class="div">
      <router-view></router-view>
    </div>
    <Footer />
  </div>

</template>

<script>
import Navbar from "@/components/ui/Navbar.vue";
import Footer from "@/components/ui/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>