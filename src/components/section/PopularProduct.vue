<template>
  <div class="container">
    <div class="header">
      <h1 class="title">Popular Products</h1>
      <router-link to="/products" class="view-all">
        View All Products <i class="bx bx-right-arrow-alt"></i>
      </router-link>
    </div>

    <div class="product-list">
      <router-link
          :to="'/productdetails/' + product.id"
          v-for="product in popularProducts"
          :key="product.id"
          class="product-card"
      >
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3 class="product-title">{{ product.name }}</h3>
        <span v-if="product.price" class="product-price">${{ product.price }}</span>
        <span v-else class="product-price unavailable">Price not available</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const popularProducts = computed(() => store.getters['popular/allProducts']);
</script>

<style scoped>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

/* Container */
.container {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  color: #000814;
}

/* View All button */
.view-all {
  display: flex;
  align-items: center;
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;
}

.view-all:hover {
  background-color: #0056b3;
  transform: scale(1.07);
}

/* Product List */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding-top: 20px;
}

/* Product Card */
.product-card {
  background: white;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.product-card:hover img {
  transform: scale(1.1);
}


.product-card img {
  transition: all .4s;
}
/* Product Image */
.product-image {
  width: 90%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
}

/* Product Title */
.product-title {
  font-size: 22px;
  font-weight: bold;
  margin: 15px 0;
}

/* Product Price */
.product-price {
  font-size: 20px;
  font-weight: bold;
  color: #28a745;
}

.product-price.unavailable {
  color: #dc3545;
  font-size: 18px;
}
</style>
