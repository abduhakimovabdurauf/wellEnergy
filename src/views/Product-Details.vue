<template>
  <div class="product-details" v-if="product">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p class="price">${{ product.price }}</p>
      <p class="description">{{ product.description }}</p>
      <button class="buy-btn">Add to Cart <i class='bx bxs-cart-alt'></i></button>
    </div>
  </div>
  <div v-else>
    <p>Product not found.</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const productId = computed(() => route.params.id);
const product = computed(() =>
    store.getters["products/allProducts"].find(p => p.id === Number(productId.value))
);
</script>

<style scoped>
.product-details {
  display: flex;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  background: #1d5a82;
  border-radius: 10px;
  color: #fff;
}

.product-image img {
  width: 500px;
  height: auto;
  border-radius: 10px;
}

.product-info {
  flex: 1;
}

h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

.price {
  font-size: 22px;
  font-weight: bold;
  color: #ffc300;
}

.description {
  font-size: 16px;
  margin: 15px 0;
}

.buy-btn {
  padding: 10px 20px;
  font-size: 16px;
  background: #ffc300;
  color: #000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.buy-btn:hover {
  background: #e0a800;
}
</style>
